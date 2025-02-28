import React from 'react';
import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";

const SignIn = () => {

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  //navigate to sign in page after clicking the submit button 
  const navigate = useNavigate()

  //create state variables to handle form changes
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(formData)
    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      //listens for the response from server and holds it in const data variable 
      const data = await res.json();
      console.log(data);

      if (data.success == false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      //(if data.success== true)
      setLoading(false);
      setError(null);
      navigate("/profile")


    } catch (error) {
      setLoading(false);
    }

  };

  return (
    //Keep in mind for those learning that often times the return here is returning UI components
    // to the UI and the logic is handled by funtios above.
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7"> Sign In</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
    
        <input
          type="emai"
          placeholder="User Email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
        />

        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-85">
          {loading ? "Loading..." : "Sing Up"}
        </button>
      </form>

      <div className="flex gap-2 mt-5">
          <p> Have an account?</p>
          <Link to= {"/sign-in"}>
          <span className="text-blue-700">Sign In</span>
          </Link>
      </div>
      {error && <p className="text-red-500"> {error} </p>}
    </div>
  )
}

export default SignIn
