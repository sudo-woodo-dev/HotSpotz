class UsersController < ApplicationController
  def show
    @user = User.find params[:id]
  end

  def create
    user = User.new(user_params)
    if user.save
      render json: user, status: 201
    else
      render json: { errors: user.errors }, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(
      :name, :username, :email, :password, :password_confirmation, :avatar_base
    )
  end
end
