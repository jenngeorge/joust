# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


user1 = User.create({email:"user1@email.com", password: "password"})
user2 = User.create({email:"user2@email.com", password: "password"})
user3 = User.create({email:"user3@email.com", password: "password"})
user4 = User.create({email:"user4@email.com", password: "password"})
user5 = User.create({email:"user5@email.com", password: "password"})
user6 = User.create({email:"user6@email.com", password: "password"})
user7 = User.create({email:"user7@email.com", password: "password"})
user8 = User.create({email:"user8@email.com", password: "password"})


goal1 = Goal.create( {name: "Goal1", description: "about the goal", user_id: 1, points: 10})
goal2 = Goal.create( {name: "Goal2", description: "about the goal", user_id: 1, points: 10})
goal3 = Goal.create( {name: "Goal3", description: "about the goal", user_id: 1, points: 10})
goal4 = Goal.create( {name: "Goal4", description: "about the goal", user_id: 1, points: 10})
goal5 = Goal.create( {name: "Goal5", description: "about the goal", user_id: 1, points: 10})

start_date = DateTime.new(2017, 5, 2)
end_date = DateTime.new(2017, 5, 3)
challenge1 = Challenge.create({
  challenger_id: 2,
  challengee_id: 3,
  goal_id: 1,
  start_datetime: start_date,
  end_datetime: end_date})

  start_date = DateTime.new(2017, 2, 2)
  end_date = DateTime.new(2017, 2, 3)
  challenge2 = Challenge.create({
    challenger_id: 2,
    challengee_id: 4,
    goal_id: 1,
    start_datetime: start_date,
    end_datetime: end_date})
