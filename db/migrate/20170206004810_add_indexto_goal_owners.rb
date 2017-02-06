class AddIndextoGoalOwners < ActiveRecord::Migration
  def change
    add_index :goals, :user_id 
  end
end
