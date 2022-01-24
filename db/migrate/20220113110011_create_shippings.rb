class CreateShippings < ActiveRecord::Migration[7.0]
  def change
    create_table :shippings do |t|
      t.string :type
      t.string :title

      t.timestamps
    end
  end
end
