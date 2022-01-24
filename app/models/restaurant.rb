class Restaurant < ApplicationRecord
    has_many :reviews, as: :reviewable
end
