class AddAreaIdToReviews < ActiveRecord::Migration[5.1]
  def change
    add_column :reviews, :area_id, :reference
  end
end
