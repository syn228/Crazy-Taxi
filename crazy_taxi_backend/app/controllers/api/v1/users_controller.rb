class Api::V1::UsersController < ApplicationController
  def index
    users = User.all
    render json: users.map {|u| u.username}
  end

  def create
    #code
  end
end
