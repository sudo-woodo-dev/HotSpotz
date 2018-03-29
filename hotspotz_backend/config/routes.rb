Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: %i[show create], defaults: { format: :json }
  post 'user_token' => 'user_token#create'
end
