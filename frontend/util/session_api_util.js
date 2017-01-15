export const login = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/users/sign_in',
    data: user
  });
};

export const signup = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/users/sign-up',
    data: user
  });
};

export const logout = () => {
  return $.ajax({
    method: 'delete',
    url: '/users/sign_out'
  });
};
