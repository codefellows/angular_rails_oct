Rails.application.routes.draw do
  get 'angular/index'
  root 'angular#index'

  namespace :apiv1 do
    resources :notes
  end
end
