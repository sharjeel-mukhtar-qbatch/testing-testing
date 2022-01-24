class Assembliesofcar < ApplicationRecord
    # has_many :subordinates, class_name: "Assembliesofcar", foreign_key: "abc_id"

    # belongs_to :abc, class_name: "Assembliesofcar", optional: true
    has_many :shippings, inverse_of: :assembliesofcar
end