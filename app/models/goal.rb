class Goal < ActiveRecord::Base
  validates :name, :points, presence: true

  has_many :challenges
end
