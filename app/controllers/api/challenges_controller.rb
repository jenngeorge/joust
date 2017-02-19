class Api::ChallengesController < ApplicationController

  def create
    @challenge = Challenge.new(challenge_params)
    if @challenge.save
      render :show
    else
      render json: @challenge.errors.full_messages, status: 422
    end
  end

  def destroy
    @challenge = Challenge.find(params[:id])
    @challenge = @challenge.destroy

    render :show
  end

  def show
    @challenge = Challenge.includes(:challengee, :challenger)
      .includes(:goal)
      .find(params[:id])
  end

  def index
    @challenges = Challenge.includes(:goal).all
  end

  def challenge_params
    params.require(:challenge).permit(
      :challenger_id,
      :challengee_id,
      :goal_id,
      :start_datetime,
      :end_datetime
    )
  end
end
