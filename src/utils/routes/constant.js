export const RouteConstant = {
  login: "/auth/login",
  signup: "/auth/sign-up",
  logout: "/logout",
  forgetPassword: "/forget-password",
  notFound: "/notFound",
  unAuthorized: "/unauthorized",
  verification: "/verification",
  uploadphoto: "/upload-photo",
  institute: "/institute",
  course: "/course",
  dashboard: "/dashboard",
};

export const ApiPath = {
  //#region AUTH
  login: "api/Account/login",
  signup: "api/Student/studentsignup",
  getOTP: "api/Student/sendotp",
  editUser:"api/Student/editstudent",
  getAllInstitute:"api/Course/getcoursesbyinstitute",
  getInstitutecode:"api/Course/getcoursesbyinstitute",
  getCoursebyInstitute:"api/Course/getcoursesbyinstitute"
  //#endregion
};

// export const allowedRoles = { admin: "Admin", staff: "Staff" };
