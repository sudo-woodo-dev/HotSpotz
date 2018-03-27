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

  test 'name should be present' do
    @subject.name = '     '
    assert_not @subject.valid?
  end

  test 'username should be present' do
    @subject.username = '     '
    assert_not @subject.valid?
  end

  test 'email should be present' do
    @subject.email = '     '
    assert_not @subject.valid?
  end

  test 'password should be present' do
    @subject.password = '     '
    assert_not @subject.valid?
  end

  test 'password_confirmation should be present' do
    @subject.password_confirmation = '     '
    assert_not @subject.valid?
  end
end
