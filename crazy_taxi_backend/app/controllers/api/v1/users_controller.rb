class Api::V1::UsersController < ApplicationController
  def index
    users = User.all
    render json: users.map {|u| u.username}
  end

  def create
    #code
    user = User.create(user_params)
    render json: user
  end

  private
  def user_params
    params.permit(:username)
  end
end
