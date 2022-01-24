class Addfkey < ActiveRecord::Migration[7.0]
  def change
    add_reference :shippings, :assembliesofcar, index: true, foreign_key: true
  end
end
