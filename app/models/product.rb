class Product < ApplicationRecord
    has_many :prices, class_name: "Product", foreign_key: "pricing_id"
    belongs_to :pricing ,class_name: "Product", optional: true
end
