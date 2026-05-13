import { Link, useNavigate } from "react-router-dom";
import bgImage from "../assets/bg.jpg"


const Signup = () => {

    const navigate = useNavigate();

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
                    <input className="form-control" type="text" />
                </div>

                <div className="mt-2">
                    <label className="form-label">Email:</label>
                    <input className="form-control" type="email" />
                </div>

                <div className="mt-2">
                    <label className="form-label">Password:</label>
                    <input className="form-control" type="password" />
                </div>
                <div className="mt-2">
                    <label className="form-label">Confirm Password:</label>
                    <input className="form-control" type="password" />
                </div>

                

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