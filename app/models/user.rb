class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :given_challenges,
    class_name: "Challenge",
    foreign_key: :challenger_id

  has_many :received_challenges,
    class_name: "Challenge",
    foreign_key: :challengee_id

  has_many :goals,
    class_name: "Goal",
    foreign_key: :user_id
end
