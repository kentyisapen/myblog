Rails.application.routes.draw do
  resources :blogs, param: :id_digest
  
  root 'blogs#index'
  get 'sessions/new'
  get 'blogs/new'
  
  get    '/login',   to: 'sessions#new'
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'

  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
