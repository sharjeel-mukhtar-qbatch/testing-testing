class CreateModels < ActiveRecord::Migration[7.0]
  def change
    create_table :models do |t|
      t.string :mtitle
      t.references :models, :car, foreign_key: true
      t.timestamps
    end
  end
end
