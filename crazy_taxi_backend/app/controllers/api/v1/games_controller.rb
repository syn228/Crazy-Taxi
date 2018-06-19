class Api::V1::GamesController < ApplicationController
  def index
    games = Game.all
    render json: games.map {|g| "#{g.score} - #{g.user.username}"}
  end

  def create
    #code
  end
end
