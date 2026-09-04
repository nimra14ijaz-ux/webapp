import { Link, useNavigate } from "react-router-dom";
import bgImage from "../assets/bg.jpg"
import { supabase } from "../Supabase";
import React, { useState } from "react";



const Signup = () => {

    const navigate = useNavigate();
    const [name, setName] = useState("nimra");
    const [email, setEmail] = useState("nimra@gmail.com");
    const [password, setPassword] = useState("password");
    const [cpassword, setcPassword] = useState("password");

    const signUp = async () => {
        if(password !== cpassword){
        console.log("password are not match");
        return;
        }
        const { data, error } = await supabase.auth.signUp({
        email : email,
        password : password,

        options: {
            data: {
            full_name : name,
            },
        },
        });


        if(error){
        console.log("signUp message :", error.message);
        return;
        }

        console.log("signUp successfull: ",  data);

        navigation.navigate("AdminHome");
    }

    return (
       
        <div style={{
        height: "100vh",
        width: "100%",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingRight: "100px"
        }}
        >

        <div className="card shadow" 
        style={{
          width: "400px",
          padding: "40px",
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(12px)",
          borderRadius: "20px",
          color: "white",
          border: "1px solid rgba(255,255,255,0.3)"
        }}
        >
             <h3 className="text-center mb-4">Sign Up</h3>
                <div className="mt-2">
                    <label className="form-label">Full Name:</label>
                    <input className="form-control" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>

                <div className="mt-2">
                    <label className="form-label">Email:</label>
                    <input className="form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className="mt-2">
                    <label className="form-label">Password:</label>
                    <input className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="mt-2">
                    <label className="form-label">Confirm Password:</label>
                    <input className="form-control" type="password" value={cpassword} onChange={(e) => setcPassword(e.target.value)}/>
                </div>

                <button onClick={signUp}>Create Account</button>

                

                <p style={{ textAlign: "center", marginTop: "15px" }}>
                    Already have an account?
                </p>

                <Link to="/Login"
                    className="btn btn-primary btn-lg btn-link w-100 mt-6" value="Sign Up" type="button" style={{ fontSize: "18px" ,textColor: "white"}}
                     
                >
                    Login
                </Link>

            </div>
        </div>
    )
}

export default Signup