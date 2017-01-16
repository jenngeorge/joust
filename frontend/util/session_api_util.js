
export const signout = () => {
  return $.ajax({
    method: 'delete',
    url: '/users/sign_out'
  });
};
