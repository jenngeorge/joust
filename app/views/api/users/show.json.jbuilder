# json.partial! "api/users/user", user: @user

json.extract! @user,
  :id,
  :username,
  :email,
  :first_name,
  :last_name
  # :received_challenges,
  # :given_challenges

json.received_challenges do
  json.array! @user.received_challenges do |challenge|
    json.challenger challenge.challenger
    json.partial! "api/challenges/challenge", challenge: challenge
  end
end

json.given_challenges do
  json.array! @user.given_challenges do |challenge|
    json.challengee challenge.challengee
    json.partial! "api/challenges/challenge", challenge: challenge
  end
end
