require 'test_helper'

class UserTest < ActiveSupport::TestCase
  describe '#User model' do
    context 'when valid user' do
      @subject = User.new

      it 'has name' do
        must have_valid(:email).when("a@a.com", "foo@bar.com", "dave@abc.io")
      end
    end
  end
end
