export const RouteConstant = {
  login: "/auth/login",
  signup: "/auth/sign-up",
  logout: "/logout",
  forgetPassword: "/forget-password",
  notFound: "/notFound",
  unAuthorized: "/unauthorized",
  verification: "/verification",
  verification: "/upload-photo",
  verification: "/institute",
  verification: "/course",
  dashboard: "/dashboard",
};

export const ApiPath = {
  //#region AUTH
  login: "api/Account/login",
  signup: "api/Student/studentsignup",
  getOTP: "api/Student/sendotp",
  //#endregion
};

// export const allowedRoles = { admin: "Admin", staff: "Staff" };
