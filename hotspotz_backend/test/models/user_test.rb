require 'test_helper'

class UserTest < ActiveSupport::TestCase
  describe '#User model' do
    context 'when valid user' do
      @subject = User.new(name: 'Test User',
                          username: 'test123',
                          email: 'user@example.com',
                          password: 'foobared',
                          password_confirmation: 'foobared')

      it 'has name' do
        must validate_presence_of(:username), @user
      end
    end
  #   def setup
  #     @subject = User.new(name: 'Test User',
  #                         username: 'test123',
  #                         email: 'user@example.com',
  #                         password: 'foobared',
  #                         password_confirmation: 'foobared')
  #   end
  #
  #   def test_username_presence_validation
  #     must validate_presence_of(:username), @user
  #   end
  end
end
