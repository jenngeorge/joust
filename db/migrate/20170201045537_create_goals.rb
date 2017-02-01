class CreateGoals < ActiveRecord::Migration
  def change
    create_table :goals do |t|
      t.string :name, null: false
      t.text :description
      t.integer :points, null: false
      t.boolean :active, null: false, default: false
      t.timestamps null: false
    end
  end
end
