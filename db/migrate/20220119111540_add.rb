class Add < ActiveRecord::Migration[7.0]
  def change
    add_column :cars, :body, :string
    add_column :cars, :body_confirmation, :string
  end
end
