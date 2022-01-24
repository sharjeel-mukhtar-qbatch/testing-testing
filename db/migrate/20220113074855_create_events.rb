class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :etitle
      t.text :ebody
      t.timestamps
    end
  end
end
