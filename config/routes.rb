Rails.application.routes.draw do
  root "users#home"

  # all the gets!
  get 'users', to: "users#show_all"
  get 'users/new', to: "users#new"
  get 'users/:id', to: "users#show"
  get 'users/:id/edit', to: "users#edit"

  # back end stuff
  post 'users', to: "users#create"
  patch 'users/:id', to: "users#update"
  delete 'users/:id', to: "users#destroy"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
