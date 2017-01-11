Rails.application.routes.draw do
  root to: "static_pages#root"

  devise_for :users, path_names: { sign_in: 'login', sign_out: 'logout', sign_up: 'sign-up', edit: 'update' }

end
