class User < ApplicationRecord
  validates :name, presence: true, length: { maximum: 25 }
  validates :username, :password,
            presence: true, length: { minimum: 6, maximum: 20 }
  validates :email, :password_confirmation, presence: true

  validates_format_of :name, with: /\A[a-z ]+\z/i
  validates_format_of :username, with: /\A[a-zA-Z0-9]+\Z/
  validates_format_of :email,
                      with: /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  validates_format_of :password, with: /(?=.*[A-Z]+)(?=.*[0-9]+).*/

  has_secure_password
end
