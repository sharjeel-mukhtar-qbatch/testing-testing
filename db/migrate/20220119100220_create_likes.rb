class CreateLikes < ActiveRecord::Migration[7.0]
  def change
    create_table :likes do |t|
      t.string :liketitle
      t.references :likes, :model, foreign_key: true
      t.timestamps
    end
  end
end
