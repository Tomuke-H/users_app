Rails.application.routes.draw do
    root "users#home"

    # all the user gets!
    get 'users', to: "users#show_all"
    get 'users/new', to: "users#new"
    get 'users/:id', to: "users#show"
    get 'users/:id/edit', to: "users#edit"

    # back end user stuff!
    post 'users', to: "users#create"
    patch 'users/:id', to: "users#update"
    delete 'users/:id', to: "users#destroy"

    # all the bird gets!
    get 'birds', to: "birds#show_all"
    get 'birds/new', to: "birds#new"
    get 'birds/:id', to: "birds#show"
    get 'birds/:id/edit', to: "birds#edit"

    # back end bird stuff!
    post 'birds', to: "birds#create"
    patch 'birds/:id', to: "birds#update"
    delete 'birds/:id', to: "birds#destroy"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
