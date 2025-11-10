import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
function LoginForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email required!"),

      password: Yup.string()
        .min(6, "Must be at least 6 characters")
        .required("This field is required"),
    }),

    onSubmit: (values) => {
      alert(`Daxil olundu!\nEmail: ${values.email}`);
    },
  });
  return (
    <>
      <div className="form-container w-[50%] h-[100vh] px-[150px] py-[50px]">
        <div className="form-items flex flex-col w-[364px]">
          <span className="grotesk font-extrabold text-[74px] text-[#009EE2] text-center">
            Welcome
          </span>
          <span className="grotesk font-medium text-[16px] text-[#252424] text-center">
            Login with Email
          </span>
          <div className="input-group flex flex-col gap-[24px] items-center mt-[1%]">
            <div className="relative w-[364px]" id="input">
              <input
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Email"
                className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-slate-200 appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
                id="floating_outlined"
                type="text"
                name="email"
              />
              <label
                className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white data-[disabled]:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                for="floating_outlined"
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
                id="floating_outlined"
                type="password"
                name="password"
              />
              <label
                className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white data-[disabled]:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                for="floating_outlined"
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
          </div>
          <span className="grotesk font-bold text-[12px] text-gray-600 text-end mt-[2%]">
            <a href="">Forgot your password?</a>
          </span>
          <button className="hover:brightness-110 hover:animate-pulse font-bold mt-[5%] py-[15px] px-1 rounded-[5px] bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white">
            Login
          </button>
          <div class="or-line flex items-center gap-3 w-full mt-[5%] ">
            <hr class="flex-1 border-t border-[#1C1C1C]/20" />
            <span class="text-[14px] text-[#000] font-medium tracking-[-0.28px]">
              OR
            </span>
            <hr class="flex-1 border-t border-[#1C1C1C]/20" />
          </div>
          <div className="buttons flex justify-between mt-[5%]">
            <button className="py-[17px] px-[35px] cursor-pointer bg-[#E7F2F5] rounded-[9px]  hover:scale-110 transition-transform">
              <span className="text-[24px]">
                <i class="fa-brands fa-google"></i>
              </span>
            </button>{" "}
            <button className="py-[17px] px-[35px] cursor-pointer bg-[#E7F2F5] rounded-[9px]  hover:scale-110 transition-transform">
              <span className="text-[24px]">
                <i class="fa-brands fa-facebook"></i>
              </span>
            </button>{" "}
            <button className="py-[17px] px-[35px] cursor-pointer bg-[#E7F2F5] rounded-[9px]  hover:scale-110 transition-transform">
              <span className="text-[24px]">
                <i class="fa-brands fa-apple"></i>
              </span>
            </button>
          </div>
          <span className="text-center text-[14px] font-[400] mt-[5%]">
            Don`t have account?{" "}
            <a href="">
              <span className="text-[14px] font-[600]">Register Now</span>
            </a>
          </span>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
