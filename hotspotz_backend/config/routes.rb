Rails.application.routes.draw do

    resources :areas
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # resources :users, only: %i[show create], defaults: { format: :json }

  post 'user_token' => 'user_token#create'
  resources :users
  post 'review_token' => 'review_token#create'
  resources :reviews

  get 'reviews_by_user_id/:user_id' => 'reviews#reviews_by_user_id'
  get 'reviews_by_area_id/:area_id' => 'reviews#reviews_by_area_id'

  resources :users do
    resources :reviews
  end

  resources :areas do
    resources :reviews
  end

end
