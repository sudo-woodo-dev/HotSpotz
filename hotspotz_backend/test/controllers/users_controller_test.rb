require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  def setup
    @subject = users(:test)
  end
end
