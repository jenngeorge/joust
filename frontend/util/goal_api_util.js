export const createGoal = (goal) => {
  return $.ajax({
    method: 'post',
    url: '/api/goals',
    data: goal
  });
};

export const deleteGoal = (id) => {
  return $.ajax({
    method: "delete",
    url: `/api/goals/${id}`
  });
};

export const fetchGoal = (id) => {
  return $.ajax({
    method: "get",
    url: `/api/goals/${id}`
  });
};

export const fetchGoals = () => {
  return $.ajax({
    method: "get",
    url: "/api/goals"
  });
};
