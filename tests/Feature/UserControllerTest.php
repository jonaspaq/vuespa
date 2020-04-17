<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Artisan;

use Tests\PassportAuth;

class UserControllerTest extends TestCase
{
    use RefreshDatabase, PassportAuth;

    /** @test */
    public function register_user_with_correct_details()
    {
        $data = [
            'first_name' => 'Test',
            'last_name' => 'User',
            'email' => 'testuser@veza.com',
            'password' => 'password',
            'password_confirmation' => 'password'
        ];

        $response = $this->postJson('/api/register', $data);

        $response->assertStatus(201);
    }

    /** @test */
    public function register_user_with_empty_data()
    {
        $response = $this->postJson('/api/register', [
                            'first_name' => '',
                            'last_name' => '',
                            'email' => '',
                            'password' => '',
                            'password_confirmation' => ''
                        ]);
        $response->assertStatus(422);
    }

    /** @test */
    public function login_user_with_correct_details()
    {
        $this->passportAndCreateUser();

        $response = $this->postJson('/api/login', [
            'email' => 'test@example.com.unknown',
            'password' => 'password'
        ]);

        $response->assertOk();
    }

    /** @test */
    public function login_user_with_non_existing_credentials()
    {
        $this->passportInstallCommando();

        $response = $this->postJson('/api/login', [
            'email' => 'non_existing_email@unknown.unknown.com',
            'password' => 'non_existing_password_at_all'
        ]);

        $response->assertStatus(404);
    }

    /** @test */
    public function login_user_with_empty_credentials()
    {
        $this->passportInstallCommando();

        $response = $this->postJson('/api/login', [
            'email' => '',
            'password' => ''
        ]);

        $response->assertStatus(422);
    }

    /** @test */
    public function get_details_of_the_authenticated_user()
    {
        $user = $this->passportAndCreateUser();

        $response = $this->actingAs($user, 'api')
                        ->getJson('/api/user/auth-details');

        $response->assertOk()
                ->assertJsonStructure([
                    'id',
                    'first_name',
                    'middle_name',
                    'last_name',
                    'email',
                    'created_at',
                    'updated_at',
                    'full_name'
                ]);
    }

    /** @test */
    public function get_details_of_an_existing_specified_user()
    {
        $user = $this->passportAndCreateUser();

        $response = $this->actingAs($user, 'api')
                        ->getJson('/api/user/'.$user->id);

        $response->assertOk();
    }

    /** @test */
    public function get_details_of_a_non_existent_specified_user()
    {
        $user = $this->passportAndCreateUser();

        $response = $this->actingAs($user, 'api')
                        ->getJson('/api/user/-1');

        $response->assertNotFound();
    }

    /** @test */
    public function get_details_of_a_specified_user_while_not_authenticated()
    {
        $response = $this->getJson('/api/user/1');

        $response->assertUnauthorized();
    }

    /** @test */
    public function edit_details_of_a_specified_user()
    {
        $user = $this->passportAndCreateUser();

        $editData = [
            'first_name' => 'Updated',
            'middle_name' => 'Values',
            'last_name' => 'Ofuser',
        ];

        $response = $this->actingAs($user, 'api')
                    ->putJson('/api/user/'.$user->id.'/edit', $editData);

        $response->assertOk()
                ->assertJson([
                    'first_name' => $editData['first_name'],
                    'middle_name' => $editData['middle_name'],
                    'last_name' => $editData['last_name']
                ]);
    }

    /** @test */
    public function edit_details_of_a_specified_user_with_null_or_invalid_values()
    {
        $user = $this->passportAndCreateUser();

        $editData = [
            'first_name' => '',
            'middle_name' => '',
            'last_name' => '',
        ];

        $response = $this->actingAs($user, 'api')
                    ->putJson('/api/user/'.$user->id.'/edit', $editData);

        $response->assertStatus(422);
    }

    /** @test */
    public function edit_details_of_a_specified_user_while_not_authenticated()
    {
        $user = $this->passportAndCreateUser();

        $editData = [
            'first_name' => '',
            'middle_name' => '',
            'last_name' => '',
        ];

        $response = $this->putJson('/api/user/'.$user->id.'/edit', $editData);

        $response->assertUnauthorized();
    }

    /** @test */
    public function edit_details_of_a_specified_user_that_is_not_owned_by_the_user()
    {
        $user = $this->passportAndCreateUser();
        $user2 = $this->createRandomUser();

        $editData = [
            'first_name' => 'Update',
            'middle_name' => 'Data',
            'last_name' => 'User',
        ];

        $response = $this->actingAs($user, 'api')
                        ->putJson('/api/user/'.$user2->id.'/edit', $editData);

        $response->assertForbidden();
    }
}
