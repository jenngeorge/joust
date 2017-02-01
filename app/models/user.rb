class User < ActiveRecord::Base
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
end
