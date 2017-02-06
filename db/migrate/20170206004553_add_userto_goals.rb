class AddUsertoGoals < ActiveRecord::Migration
  def change
    add_column :goals, :user_id, :integer, null: false
  end

end
