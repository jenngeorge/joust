class AddStatusToChallenges < ActiveRecord::Migration[5.0]
  def change
    add_column :challenges, :status, :string, null: false, default: "PENDING"
  end
end
