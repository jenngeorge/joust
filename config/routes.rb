Rails.application.routes.draw do

  devise_for :users, :controllers => {sessions: 'users/sessions', registrations: 'users/registrations'}

  devise_scope :user do
   get 'api/current_user' => 'users/sessions#current'
  end

  root to: "static_pages#root"

  namespace :api, defaults: { format: 'json' } do
    resources :users, only: [:show, :index]
    resources :goals
    resources :challenges
  end

  get '*path', to: 'static_pages#root'
end
