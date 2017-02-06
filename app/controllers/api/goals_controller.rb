class Api::GoalsController < ApplicationController

  def create
    @goal = Goal.new(goal_params)
    if @goal.save
      render json: ["saved #{@goal.name}"]
    else
      render json: @goal.errors.full_messages, status: 422
    end
  end

  def destroy
    @goal = Goal.find(params[:id])
    @goal = @goal.destroy

    render :show
  end

  def show
    @goal = Goal.find(params[:id])
  end

  def index
    @goals = Goal.all
  end

  def goal_params
    params.require(:goal).permit(
      :name,
      :description,
      :points,
      :active,
      :user_id
    )
  end

end
