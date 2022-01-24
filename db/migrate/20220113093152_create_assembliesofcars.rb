class CreateAssembliesofcars < ActiveRecord::Migration[7.0]
  def change
    create_table :assembliesofcars do |t|
      t.string :title
      t.text :body
      t.references :abc, foreign_key: {to_table: :assembliesofcars}
      t.timestamps
    end
  end
end
