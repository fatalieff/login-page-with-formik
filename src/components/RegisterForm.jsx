import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";



function RegisterForm({ setPage }) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      username : "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email required!"),

      password: Yup.string()
        .min(6, "Must be at least 6 characters")
        .required("This field is required"),

      username: Yup.string()
      .required("Username required")
      .min(2,"Too Short"),
    }),

    onSubmit: (values) => {
  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

  const isUserExists = storedUsers.some(user => user.username === values.username);

  if(isUserExists){
    alert("This username already exists.");
    return;
  }

  const newUser = {
    username: values.username,
    email: values.email,
    password: values.password,
  };

  storedUsers.push(newUser);
  localStorage.setItem("users", JSON.stringify(storedUsers));

  alert("Successfully registered!");
  setPage("login");
}


  });
  return (
    <>
      <div className="form-container w-[50%] h-[100vh] px-[150px] py-[0px]">
        <div className="form-items flex flex-col w-[364px]">
          <span className="grotesk font-extrabold text-[74px] text-[#009EE2] text-center">
            Welcome
          </span>
          <span className="grotesk font-medium text-[16px] text-[#252424] text-center">
            Create Account
          </span>
          <form onSubmit={formik.handleSubmit} className="input-group flex flex-col gap-[24px] items-center mt-[1%]">
            <div className="relative w-[364px]" id="input">
              <input
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Username"
                className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-slate-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                type="text"
                name="username"
              />
              <label
                className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white data-[disabled]:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                htmlFor="floating_outlined"
              >
                Username
              </label>
              <div className="absolute top-3 right-3"></div>
              {formik.touched.username && formik.errors.username && (
                <p className="text-[14px] text-[#f00] font-[500] mt-[1%]">
                  {formik.errors.username}
                </p>
              )}
            </div>
            <div className="relative w-[364px]" id="input">
              <input
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Email"
                className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-slate-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                type="text"
                name="email"
              />
              <label
                className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white data-[disabled]:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                htmlFor="floating_outlined"
              >
                Email
              </label>
              <div className="absolute top-3 right-3"></div>
              {formik.touched.email && formik.errors.email && (
                <p className="text-[14px] text-[#f00] font-[500] mt-[1%]">
                  {formik.errors.email}
                </p>
              )}
            </div>
            <div className="relative w-[364px]" id="input">
              <input
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Password"
                className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-slate-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                type="password"
                name="password"
              />
              <label
                className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white data-[disabled]:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                htmlFor="floating_outlined"
              >
                Password
              </label>
              <div className="absolute top-3 right-3"></div>
              {formik.touched.password && formik.errors.password && (
                <p className="text-[14px] text-[#f00] font-[500] mt-[1%]">
                  {formik.errors.password}
                </p>
              )}
            </div>
            <button type="submit" className="w-[100%] hover:brightness-110 hover:animate-pulse font-bold mt-[1%] py-[15px] px-1 rounded-[5px] bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white">
            Register
          </button>
          <div className="or-line flex items-center gap-3 w-full mt-[1%] ">
            <hr className="flex-1 border-t border-[#1C1C1C]/20" />
            <span className="text-[14px] text-[#000] font-medium tracking-[-0.28px]">
              OR
            </span>
            <hr className="flex-1 border-t border-[#1C1C1C]/20" />
          </div>
          <div className="buttons flex gap-[10px] mt-[5%] ">
            <button className="py-[17px] px-[35px] cursor-pointer bg-[#E7F2F5] rounded-[9px]  hover:scale-110 transition-transform">
              <span className="text-[24px]">
                <i className="fa-brands fa-google"></i>
              </span>
            </button>{" "}
            <button className="py-[17px] px-[35px] cursor-pointer bg-[#E7F2F5] rounded-[9px]  hover:scale-110 transition-transform">
              <span className="text-[24px]">
                <i className="fa-brands fa-facebook"></i>
              </span>
            </button>{" "}
            <button className="py-[17px] px-[35px] cursor-pointer bg-[#E7F2F5] rounded-[9px]  hover:scale-110 transition-transform">
              <span className="text-[24px]">
                <i className="fa-brands fa-apple"></i>
              </span>
            </button>
          </div>
          <span className="text-center text-[14px] font-[400] mt-[1%]">
            Already have an account?{" "}
            <span className="text-[14px] font-[600]" onClick={()=> setPage("login")}>[Login]</span>
          </span>
          </form>
          
          
        </div>
      </div>
    </>
  );
}

export default RegisterForm;
