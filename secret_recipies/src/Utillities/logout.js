export const logout = callback => {
    setUser({});
    callback();
  };