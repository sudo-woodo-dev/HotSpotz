class UsersController < ApplicationController
    before_action :authenticate_user, only: :show

  def show
    user = User.find params[:id]
    render json: user, status: 201
  end

  def create
    user = User.new()
    user.name = params[:first_name]
    user.username = params[:username]
    user.email = params[:email]
    user.password = params[:password]
    user.password_confirmation = params[:password_confirmation]
    user.avatar_base = params[:avatar_base]
    
    if user.save
     token = Knock::AuthToken.new(payload: { sub: user.id }).token
     payload = {
         user: user,
         jwt: token
      }
      render json: user, status: 201
    else
      render json: { errors: user.errors }, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:id, :name, :username, :email, :password, :password_confirmation, :avatar_base)
  end
end
