class Challenge < ActiveRecord::Base
  validates :challenger_id,
            :challengee_id, :goal_id,
            :start_datetime,
            :end_datetime, presence: true

  belongs_to :challenger,
    class_name: "User",
    foreign_key: :challenger_id

  belongs_to :challengee,
    class_name: "User",
    foreign_key: :challengee_id

  belongs_to :goal

end
