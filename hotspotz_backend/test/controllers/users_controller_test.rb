require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  def setup
    @subject = users(:test)
  end

  test 'creates a user' do
    user_params = {
      user: {
        name: 'Test Test',
        username: 'test123',
        email: 'test123@test.com',
        password: 'Password1',
        password_confirmation: 'Password1'
      }
    }

    post '/users', params: user_params
    new_user = User.last
    assert_equal new_user.name, 'Test Test'
  end
end
