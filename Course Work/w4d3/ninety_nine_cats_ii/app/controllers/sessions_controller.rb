class SessionsController < ApplicationController
  def new
    render :new
  end

  def create
    user = User.find_by_credentials(
      params[:user][:user_name],
      params[:user][:password]
    )

    if user
      log_in(user)
      redirect_to cats_url
    else
      flash.now[:errors] = ["Login failed! You suck!"]
      render :new
    end
  end

  def destroy
    log_out
    redirect_to new_session_url
  end


end
