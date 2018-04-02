class ReviewsController < ApplicationController
    def show
      review = Review.find params[:id]
      render json: review, status: 201
    end

    def create
      review = Review.new(review_params)
      if review.save
        render json: review, status: 201
      else
        render json: { errors: review.errors }, status: 422
      end
    end

    private
    def review_params
      params.require(:review, :area).permit(:dining, :parking,
      :cleanliness, :safety, :price, :family_friendly, :review_text, :userID)
    end
   end
