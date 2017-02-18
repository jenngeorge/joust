# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


user1 = User.create({email:"peter@email.com", password: "password", username: "Peter"})
user2 = User.create({email:"jamie@email.com", password: "password", username: "Jamie"})
user3 = User.create({email:"jenn@email.com", password: "password", username: "Jenn"})
user4 = User.create({email:"bill@email.com", password: "password", username: "Bill"})
user5 = User.create({email:"sharon@email.com", password: "password", username: "Sharon"})
user6 = User.create({email:"edmund@email.com", password: "password", username: "Edmund"})
user7 = User.create({email:"lisa@email.com", password: "password", username: "Lisa"})
user8 = User.create({email:"dave@email.com", password: "password", username: "Dave"})
user9 = User.create({email:"belinda@email.com", password: "password", username: "Belinda"})
user10 = User.create({email:"rob@email.com", password: "password", username: "Rob"})
user11 = User.create({email:"lindsey@email.com", password: "password", username: "Lindsey"})
user12 = User.create({email:"darius@email.com", password: "password", username: "Darius"})
user13 = User.create({email:"stacy@email.com", password: "password", username: "Stacy"})

goal1 = Goal.create( {name: "New Contacts", description: "new contacts entered to Salesforce", user_id: 1, points: 10})
goal2 = Goal.create( {name: "Demos Scheduled", description: "demos scheduled with new contacts", user_id: 1, points: 10})
goal3 = Goal.create( {name: "Calls Scheduled", description: "introductory calls scheduled", user_id: 1, points: 10})
goal4 = Goal.create( {name: "Consultations Scheduled", description: "consultations scheduled", user_id: 1, points: 10})
goal5 = Goal.create( {name: "Follow-up Calls Made", description: "reaching out to current contacts via call", user_id: 1, points: 10})
goal6 = Goal.create( {name: "Follow-up Emails Sent", description: "reaching out to current contacts via email", user_id: 1, points: 10})

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
