class Api::UsersController < ApplicationController

  # devise helpers
  # before_action :authenticate_user!
  # user_signed_in?
  # current_user
  # user_session

  #sign_in @user
  #sign_out @user

  # You can also override after_sign_in_path_for and after_sign_out_path_for to customize your redirect hooks.

  def show
    @user = User.find(params[:id])
    render 'api/users/show'
  end

  def index
    @users = User.all
    render 'api/users/index'
  end

end
