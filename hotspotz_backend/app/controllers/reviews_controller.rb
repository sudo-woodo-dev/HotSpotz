class ReviewsController < ApplicationController
    # def index
    #   review = Review.where params[:user_id]
    #   render json: review, status: 201
    # end

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

    def reviews_by_user_id
      review = Review.where("user_id = #{params[:user_id]}")
      render json: review, status: 201
    end

    def reviews_by_area_id
      review = Review.where("area_id = #{params[:area_id]}")
      render json: review, status: 201
    end


    private
    def review_params
      params.require(:review).permit(:area, :area_rating, :dining, :parking, :cleanliness,
       :safety, :price, :family_friendly, :review_text, :avatar_base, :user_id, :area_id)
    end
   end
