# json.partial! "api/users/user", user: @user

json.extract! @user,
  :id,
  :username,
  :email,
  :first_name,
  :last_name

json.challenges_in_progress do
  json.array! @challenges_in_progress do |challenge|
    json.partial! "api/challenges/challenge", challenge: challenge
  end
end

json.challenges_complete do
  json.array! @challenges_complete do |challenge|
    json.partial! "api/challenges/challenge", challenge: challenge
  end
end

json.challenges_pending do
  json.array! @challenges_pending do |challenge|
    json.partial! "api/challenges/challenge", challenge: challenge
  end
end
