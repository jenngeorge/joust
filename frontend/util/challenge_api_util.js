export const createChallenge = (challenge) => {
  return $.ajax({
    method: 'post',
    url: '/api/challenges',
    data: challenge
  });
};

export const updateChallenge = (id, challenge) => {
  return $.ajax({
    method: 'patch',
    url: `/api/challenges/${id}`,
    data: challenge
  });
};


export const deleteChallenge = (id) => {
  return $.ajax({
    method: "delete",
    url: `/api/challenges/${id}`
  });
};

export const fetchChallenge = (id) => {
  return $.ajax({
    method: "get",
    url: `/api/challenges/${id}`
  });
};

export const fetchChallenges = () => {
  return $.ajax({
    method: "get",
    url: "/api/challenges"
  });
};
