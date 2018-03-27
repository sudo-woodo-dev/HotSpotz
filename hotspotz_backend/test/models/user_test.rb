require 'test_helper'

class UserTest < ActiveSupport::TestCase
  def test_validation
    user = User.new
    assert_must validate_presence_of(:name), user
  end
end
