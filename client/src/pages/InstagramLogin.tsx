import React, { useState } from "react";
import axios from "axios";

const InstagramLogin: React.FC = () => {
  const [loginInput, setLoginInput] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/v1/auth/login", {
        loginInput,
        password,
      });
      console.log(res.data);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-sm w-full border border-opacity-30 border-slate-300 bg-black p-8 rounded-sm shadow-md">
        <div className="flex justify-center ">
          <img className="h-18" src="/instalogowhite.PNG" alt="" />
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="rounded-md shadow-sm -space-y-px ">
            <div>
              <input
                type="text"
                required
                className="appearance-none rounded-sm relative block w-full px-3 py-2 border borderborder border-opacity-50 border-slate-300 placeholder-[#939393] bg-[#121212] text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-sm"
                placeholder="Phone number, username, or email"
                value={loginInput}
                onChange={(e) => setLoginInput(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                required
                className="appearance-none rounded-sm relative block w-full px-3 bg-[#121212] py-2 border border-opacity-50 border-slate-300 placeholder-[#939393] text-white  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-sm mt-2"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white 
                    ${
                      loginInput.length === 0 && password.length === 0
                        ? "bg-blue-400 opacity-70 cursor-not-allowed"
                        : "bg-blue-500 hover:bg-blue-600"
                    } 
                       focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
              disabled={loginInput.length === 0 && password.length === 0} // ✅ Properly disables the button
            >
              <a href="#">Log In</a>
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border border-opacity-20 border-slate-400"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-black text-gray-500">OR</span>
            </div>
          </div>

          <button className=" mt-4 w-full flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-blue-500  hover:text-blue-100">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            Log in with Facebook
          </button>
        </div>

        <div className="text-center mt-4 ">
          <a href="#" className="text-sm text-white hover:underline">
            Forgot password?
          </a>
        </div>
      </div>

      <div className="max-w-sm mt-2 w-full border border-opacity-30 border-slate-300 bg-black p-5 rounded-sm shadow-md">
        <div className="text-center ">
          <span className="text-sm text-white">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-blue-400 hover:underline pl-1 font-semibold"
            >
              Sign up
            </a>
          </span>
        </div>
      </div>

      <div className="max-w-sm mt-2 w-full  bg-black p-2 justify-center text-center items-center rounded-lg shadow-md flex flex-col">
        <h2 className="text-white mb-2">Get the app</h2>
        <div className="flex gap-2 ">
          <img className="h-10" src="/playstore.png" alt="" />
          <img className="h-10" src="/microsoft.png" alt="" />
        </div>
      </div>

      <div className="max-w-lg mt-2 w-full  bg-black p-2 rounded-lg shadow-md flex flex-wrap justify-center items-center text-[#939393] text-sm">
        <ul className="flex flex-wrap justify-center gap-3">
          <li>Meta</li>
          <li>About</li>
          <li>Blog</li>
          <li>Jobs</li>
          <li>Help</li>
          <li>API</li>
          <li>Privacy</li>
          <li>Terms</li>
          <li>Locations</li>
          <li>Contact Uploading & Non-Users</li>
          <li>Meta Verified</li>
        </ul>
        <div className="flex w-full text-center justify-center items-center mt-3 pr-14">
          <div className="w-full flex justify-center">
            <span>English ⌄</span>
          </div>
          <div className="w-full flex justify-center ">
            <span>© 2025 Instagram from Meta</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramLogin;
