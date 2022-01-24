class Shipping < ApplicationRecord
    belongs_to :assembliesofcar
    # validates :assembliesofcar, presence: true
end
