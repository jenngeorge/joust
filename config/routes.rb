Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    devise_for :users, path_names: { sign_in: 'login', sign_out: 'logout', sign_up: 'sign-up', edit: 'update' }
    resources :users, only: [:show, :index]
  end

  root "static_pages#root"
end
