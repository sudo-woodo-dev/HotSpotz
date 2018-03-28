class UsersController < ApplicationController
  def show
    @user = User.find params[:id]
  end

  private

  def user_params
    params.require(:user).permit(
      :name, :username, :email, :password, :password_confirmation, :avatar_base
    )
  end
end
