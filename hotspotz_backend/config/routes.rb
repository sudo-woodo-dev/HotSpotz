Rails.application.routes.draw do

    resources :areas
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: %i[show create], defaults: { format: :json }
  resources :reviews, only: %i[show create], defaults: { format: :json }
  post 'user_token' => 'user_token#create'
  post 'review_token' => 'review_token#create'
end
