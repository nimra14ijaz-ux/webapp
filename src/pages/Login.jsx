import { Link, useNavigate } from "react-router-dom";
import bgImage from "../assets/bg.jpg"

const Login = () => {

    
    const navigate = useNavigate();

    return (
        <div
       style={{
        height: "100vh",
        width: "100vw",
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
        
          


            {/* <h1>hellp </h1> */}

            <div
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
            <h4 style={{ textAlign: "center", marginBottom: "25px" }}>Login</h4>

                <div className="mt-2">
                    <label className="form-label" htmlFor="email">Email:</label>
                    <input placeholder="Enter email" required className="form-control" type="email" id="email" name="email" />

                </div>
                <div className="mt-2">
                    <label className="form-label" htmlFor="password">Password:</label>
                    <input placeholder="Enter password" className="form-control" type="password" id="password" name="password" />

                </div>

                <Link to="/adminhome">
                <button className="btn btn-primary w-100 mt-4">
                Login in to Dashboard
                </button>
                </Link>
                <p className="text-center mt-3">Don't have an Account?</p>
                {/* <p className="text-center mt-2" onClick={() => navigate("/signup")} style={{ textAlign: "center",color: "rgb(13, 110, 253)",cursor: "pointer",fontWeight: "500",marginTop: "-10px",textDecoration:"underline"}}>SignUp</p> */}
                <div>
                    <Link to="/Signup">Sign up</Link>
                </div>
            </div>
        </div>
    )
}

export default Login 