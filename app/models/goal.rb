class Goal < ApplicationRecord
  validates :name, :points, presence: true

  has_many :challenges
  belongs_to :owner,
    class_name: "User",
    foreign_key: :user_id

  has_many :challenges
end
