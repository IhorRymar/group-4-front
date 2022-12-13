export const isAuth = ({ auth }) => auth.isLogin;

export const userName = store => store.auth.user;

export const token = store => store.auth.token;
