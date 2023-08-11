'use client'
import { useState } from "react";
import "./login.css"
export default function login() {

  const [state, setState] = useState({
    email: "",
    password: ""
  }
  );

  const handleChange = (Event) => {
    console.log(Event)
    const { name, value } = Event.target;
    setState(
      {
        ...state,
        [name]: value
      }
    )

    return (
      <div className="container">

        <input onChange={handleChange} name="email" value={state.email} type="text" />
        <input type="password" placeholder="12345" />

        <button>Login</button>
      </div>
    )

  }
}
