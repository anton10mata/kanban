export const Auth = {
    loggedIn: () => {
      return localStorage.getItem("userToken") ? true : false;
    },
    login: (token: string) => {
      localStorage.setItem("userToken", token);
    },
    logout: () => {
      localStorage.removeItem("userToken");
    },
  };

