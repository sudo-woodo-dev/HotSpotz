require 'test_helper'

class UserTest < ActiveSupport::TestCase
  def setup
    @subject = User.new(name: 'Test User',
                        username: 'test101',
                        email: 'test@test.com',
                        password: 'Foobared1',
                        password_confirmation: 'Foobared1')
  end

  test 'should be valid' do
    assert @subject.valid?
  end
end
