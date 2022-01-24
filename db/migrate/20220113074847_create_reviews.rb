class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :rtitle
      t.text :rbody
      t.timestamps
    end
  end
end
