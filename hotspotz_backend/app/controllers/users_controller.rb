class UsersController < ApplicationController
  def show
    @user = User.find params[:id]
  end

  def create
    user = User.new(user_params)
    return unless user.save
    render json: user
  end

  private

  def user_params
    params.require(:user).permit(
      :name, :username, :email, :password, :password_confirmation, :avatar_base
    )
  end
end
