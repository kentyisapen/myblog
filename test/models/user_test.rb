require 'test_helper'

class UserTest < ActiveSupport::TestCase
  def setup
    @user = User.new(name:"kentyisapen", 
                     password:"Kent3141592",
                     password_confirmation:"Kent3141592")
  end
end
