class Car < ApplicationRecord
    has_many :models
    validates :body, confirmation: true
    validates :body_confirmation, presence: true
end
