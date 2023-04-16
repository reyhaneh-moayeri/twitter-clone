export default () => {
  const useAuthToken = () => useState("auth_token");
  const useAuthUser = () => useState("auth_user");

  const setToken = (newToken) => {
    const authToken = useAuthToken();
    authToken.value = newToken;
    console.log(authToken.value);
  };

  const setUser = (newUser) => {
    const authUser = useAuthUser();
    authUser.value = newUser;
    console.log(authUser.value);
  };
  const login = (username, password) => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await $fetch("/api/auth/login", {
          method: "POST",
          body: {
            username,
            password,
          },
        });

        setToken(data.access_token);
        setUser(data.user);

        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  };

  const refreshToken = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await $fetch("/api/auth/refresh");
        setToken(data.access_token);
      } catch (error) {
        reject(error);
      }
    });
  };

  const initAuth = () => {
    return new Promise(async (resolve, reject) => {
      try {
        await refreshToken();
      } catch (error) {
        reject(error);
      }
    });
  };
  return {
    login,
    useAuthUser,
  };
};
