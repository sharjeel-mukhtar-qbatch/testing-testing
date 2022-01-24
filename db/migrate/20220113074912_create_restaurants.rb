class CreateRestaurants < ActiveRecord::Migration[7.0]
  def change
    create_table :restaurants do |t|
      t.string :restauranttitle
      t.text :restaurantbody
      t.timestamps
    end
  end
end
