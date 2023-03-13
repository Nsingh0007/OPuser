export const RouteConstant = {
  login: "/auth/login",
  signup: "/auth/sign-up",
  logout: "/logout",
  forgetPassword: "/forget-password",
  notFound: "/notFound",
  unAuthorized: "/unauthorized",
  verification: "/verification",
  dashboard: "/dashboard",
};

export const ApiPath = {
  //#region AUTH
  login: "api/Student/studentlogin",
  signup: "api/Student/studentsignup",
  getOTP: "api/Student/sendotp",
  //#endregion
};

// export const allowedRoles = { admin: "Admin", staff: "Staff" };
