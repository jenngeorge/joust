class CreateChallenges < ActiveRecord::Migration
  def change
    create_table :challenges do |t|
      t.integer :challenger_id, null: false
      t.integer :challengee_id, null: false
      t.integer :goal_id, null: false
      t.datetime :start_datetime, null: false
      t.datetime :end_datetime, null: false
      t.timestamps null: false
    end

    add_index :challenges, :challenger_id
    add_index :challenges, :challengee_id
    add_index :challenges, :goal_id

  end
end
