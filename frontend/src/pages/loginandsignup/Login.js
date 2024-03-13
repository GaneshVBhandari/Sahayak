import React from "react";
import {Link} from "react-router-dom"
import "./loginandsignup.css";
export default function Login() {
  return (
    <div id="logincontent"
      style={{
        backgroundColor: "rgb(238,242,246)",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"column"
      }}
    >
      <div
        style={{
          height: "68vh",
          width: "28vw",
          backgroundColor: "white",
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
            margin: "2rem",
          }}
        >
          <img src={process.env.PUBLIC_URL + "/logo.png"} alt="error" height={35} width={35}/>
          <h3 style={{fontWeight:"600",fontSize:'2rem'}}>SAHAYAK</h3>
        </div>
        <h2 style={{color:"rgb(61,81,181)",fontWeight:"600"}}>Hi,Welcome Back</h2>
        <h4 style={{ color: "rgb(111 112 114)" }}>Enter your credentials to continue</h4>

        <div
          style={{
            backgroundColor: "rgb(238,242,246)",
            border: "2px solid black",
            width: "90%",
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
            borderRadius: "0.5rem",
          }}
        >
          <label htmlFor="username" style={{ color: "rgb(111 112 114)" }}>
            Email Address / Username
          </label>

          <input
            type="text"
            id="username"
            style={{
              border: "none",
              backgroundColor: "rgb(238,242,246)",
              fontSize: "1.5rem",
              width: "100%",
              fontWeight: "500",
            }}
            required
          />
        </div>

        <div
          style={{
            backgroundColor: "rgb(238,242,246)",
            border: "2px solid black",
            width: "90%",
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
            borderRadius: "0.5rem",
          }}
        >
          <label htmlFor="Password" style={{ color: "rgb(111 112 114)" }}>
            Password
          </label>

          <input
            type="text"
            id="Password"
            style={{
              border: "none",
              backgroundColor: "rgb(238,242,246)",
              fontSize: "1.5rem",
              width: "100%",
              fontWeight: "500",
            }}
            required
          />
        </div>

        <div style={{ display: "flex", width: "100%" }}>
          <div style={{ display: "flex" ,marginLeft:"5%",gap:'0.4rem'}}>
            <input type="checkbox" />
            <h4>Keep me logged in</h4>
          </div>

          <Link
            to=""
            style={{
              textDecoration: "none",
              color: "rgb(61,81,181)",
              fontSize: "1.5rem",
              marginLeft: "auto",
              marginRight:"5%"
            }}
          >
            Forgot Password?
          </Link>
        </div>

        <button
          style={{
            backgroundColor: "rgb(61,81,181)",
            color: "white",
            width: "80%",
            padding: "0.5rem",
          }}
        >
          SigIn
        </button>
        <hr style={{color:"rgb(111 112 114)"}}/>
        <Link to="/signup" style={{fontWeight:"600",fontSize:"1.5rem",color:"black",textDecoration:"none  "}}>Don't have an account?</Link>
      </div>
      <div style={{backgroundColor:"rgb(61,81,181)",color:"white",fontWeight:"500"}}>Copyright © 2024 Samarthyam India. All Rights Reserved. Powered By Gursimranjeet Web Pvt Ltd.</div>
   
    </div>
  );
}