class Api::ChallengesController < ApplicationController

  def create
    @challenge = Challenge.new(challenge_params)
    if @challenge.save
      render :show
    else
      render json: @challenge.errors.full_messages, status: 422
    end
  end

  def update
    @challenge = Challenge.find(params["id"])
    if @challenge.update(challenge_params)
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
    all_challenges = Challenge.includes(:goal).order(:start_datetime)
    # @challenges_pending = challenges.select do |challenge|
    #   challenge.status == "PENDING"
    # end
    challenges_in_progress = challenges.select do |challenge|
      challenge.status == "IN_PROGRESS"
    end
    challenges_complete = challenges.select do |challenge|
      challenge.status == "COMPLETE"
    end

    @challenges = @challenges_in_progress << challenges_complete
  end



  def challenge_params
    params.require(:challenge).permit(
      :challenger_id,
      :challengee_id,
      :goal_id,
      :start_datetime,
      :end_datetime,
      :status
    )
  end
end
