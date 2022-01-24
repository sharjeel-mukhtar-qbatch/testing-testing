class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :producttitle
      t.references :pricing, foreign_key: {to_table: :products}
      t.timestamps
    end
  end
end
