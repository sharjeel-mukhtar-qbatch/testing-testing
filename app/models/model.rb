class Model < ApplicationRecord
    belongs_to :car
    has_many :likes
end
