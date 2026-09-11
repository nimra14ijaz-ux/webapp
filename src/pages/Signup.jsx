import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../Supabase";
import React, { useState } from "react";

const Signup = () => {

    const navigate = useNavigate();

    // =========================
    // STATES
    // =========================

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setcPassword] = useState("");

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);


    // =========================
    // HANDLE SUBMIT
    // =========================

    const handleSubmit = async (e) => {

        e.preventDefault();

        setError("");
        setSuccess("");

        // Check empty fields
        if (!name || !email || !password || !cpassword) {
            setError("Please fill all fields.");
            return;
        }

        // Check password match
        if (password !== cpassword) {
            setError("Passwords do not match.");
            return;
        }

        // Password length
        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }

        try {

            setLoading(true);

            // =========================
            // SUPABASE SIGN UP
            // =========================

            const { data, error } = await supabase.auth.signUp({
                email: email,
                password: password,

                options: {
                    data: {
                        full_name: name,
                    },
                },
            });

            if (error) {
                setError(error.message);
                return;
            }

            console.log("Signup successful:", data);

            setSuccess("Account created successfully!");

            // Go to Admin Dashboard
            navigate("/AdminHome");

        } catch (err) {

            console.log("Signup error:", err);

            setError("Something went wrong. Please try again.");

        } finally {

            setLoading(false);

        }
    };


    return (

        <div
            style={{
                minHeight: "100vh",
                width: "100%",
                background: "#000000",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "30px",
                boxSizing: "border-box",
                fontFamily: "Arial, sans-serif",
            }}
        >

            {/* =========================
                SIGNUP CARD
            ========================= */}

            <div
                style={{
                    width: "100%",
                    maxWidth: "600px",
                    background: "#050707",
                    border: "2px solid #00c9b7",
                    borderRadius: "22px",
                    padding: "40px 60px",
                    boxSizing: "border-box",
                    boxShadow:
                        "0 0 25px rgba(0, 201, 183, 0.20)",
                }}
            >

                {/* =========================
                    LOGO / BRAND
                ========================= */}

                <div
                    style={{
                        textAlign: "center",
                        marginBottom: "10px",
                    }}
                >

                    <h1
                        style={{
                            margin: "0",
                            fontSize: "48px",
                            fontWeight: "800",
                            letterSpacing: "2px",
                            color: "#ffffff",
                        }}
                    >
                        ELITE-
                        <span style={{ color: "#00c9b7" }}>
                            FIT
                        </span>
                    </h1>

                    <p
                        style={{
                            marginTop: "8px",
                            color: "#bdbdbd",
                            fontSize: "18px",
                            marginBottom: "30px",
                        }}
                    >
                        Your AI Fitness Assistant
                    </p>

                </div>


                {/* =========================
                    SIGNUP HEADING
                ========================= */}

                <h2
                    style={{
                        textAlign: "center",
                        color: "#ffffff",
                        fontSize: "32px",
                        marginBottom: "30px",
                    }}
                >
                    Sign Up
                </h2>


                {/* =========================
                    SIGNUP FORM
                ========================= */}

                <form onSubmit={handleSubmit}>

                    {/* FULL NAME */}

                    <div style={{ marginBottom: "20px" }}>

                        <label
                            htmlFor="name"
                            style={{
                                display: "block",
                                color: "#ffffff",
                                fontSize: "18px",
                                fontWeight: "600",
                                marginBottom: "9px",
                            }}
                        >
                            Full Name:
                        </label>

                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Enter full name"
                            value={name}
                            onChange={(e) =>
                                setName(e.target.value)
                            }
                            required
                            style={{
                                width: "100%",
                                height: "58px",
                                padding: "0 18px",
                                boxSizing: "border-box",
                                borderRadius: "10px",
                                border: "2px solid #00c9b7",
                                background: "#ffffff",
                                color: "#555555",
                                fontSize: "18px",
                                outline: "none",
                            }}
                        />

                    </div>


                    {/* EMAIL */}

                    <div style={{ marginBottom: "20px" }}>

                        <label
                            htmlFor="email"
                            style={{
                                display: "block",
                                color: "#ffffff",
                                fontSize: "18px",
                                fontWeight: "600",
                                marginBottom: "9px",
                            }}
                        >
                            Email:
                        </label>

                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            required
                            style={{
                                width: "100%",
                                height: "58px",
                                padding: "0 18px",
                                boxSizing: "border-box",
                                borderRadius: "10px",
                                border: "2px solid #00c9b7",
                                background: "#ffffff",
                                color: "#555555",
                                fontSize: "18px",
                                outline: "none",
                            }}
                        />

                    </div>


                    {/* PASSWORD */}

                    <div style={{ marginBottom: "20px" }}>

                        <label
                            htmlFor="password"
                            style={{
                                display: "block",
                                color: "#ffffff",
                                fontSize: "18px",
                                fontWeight: "600",
                                marginBottom: "9px",
                            }}
                        >
                            Password:
                        </label>

                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            required
                            style={{
                                width: "100%",
                                height: "58px",
                                padding: "0 18px",
                                boxSizing: "border-box",
                                borderRadius: "10px",
                                border: "2px solid #00c9b7",
                                background: "#ffffff",
                                color: "#555555",
                                fontSize: "18px",
                                outline: "none",
                            }}
                        />

                    </div>


                    {/* CONFIRM PASSWORD */}

                    <div style={{ marginBottom: "15px" }}>

                        <label
                            htmlFor="cpassword"
                            style={{
                                display: "block",
                                color: "#ffffff",
                                fontSize: "18px",
                                fontWeight: "600",
                                marginBottom: "9px",
                            }}
                        >
                            Confirm Password:
                        </label>

                        <input
                            id="cpassword"
                            name="cpassword"
                            type="password"
                            placeholder="Confirm password"
                            value={cpassword}
                            onChange={(e) =>
                                setcPassword(e.target.value)
                            }
                            required
                            style={{
                                width: "100%",
                                height: "58px",
                                padding: "0 18px",
                                boxSizing: "border-box",
                                borderRadius: "10px",
                                border: "2px solid #00c9b7",
                                background: "#ffffff",
                                color: "#555555",
                                fontSize: "18px",
                                outline: "none",
                            }}
                        />

                    </div>


                    {/* ERROR MESSAGE */}

                    {error && (
                        <div
                            style={{
                                color: "#ff6b6b",
                                marginTop: "15px",
                                textAlign: "center",
                                fontSize: "14px",
                            }}
                        >
                            {error}
                        </div>
                    )}


                    {/* SUCCESS MESSAGE */}

                    {success && (
                        <div
                            style={{
                                color: "#00c9b7",
                                marginTop: "15px",
                                textAlign: "center",
                                fontSize: "14px",
                            }}
                        >
                            {success}
                        </div>
                    )}


                    {/* CREATE ACCOUNT BUTTON */}

                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            width: "100%",
                            height: "62px",
                            marginTop: "25px",
                            border: "none",
                            borderRadius: "10px",
                            background: "#00c9b7",
                            color: "#000000",
                            fontSize: "22px",
                            fontWeight: "700",
                            cursor: loading
                                ? "not-allowed"
                                : "pointer",
                            opacity: loading ? 0.7 : 1,
                        }}
                    >
                        {loading
                            ? "Creating Account..."
                            : "Create Account"}
                    </button>

                </form>


                {/* =========================
                    LOGIN LINK
                ========================= */}

                <p
                    style={{
                        textAlign: "center",
                        color: "#ffffff",
                        fontSize: "17px",
                        marginTop: "28px",
                        marginBottom: "12px",
                    }}
                >
                    Already have an account?
                </p>

                <div style={{ textAlign: "center" }}>

                    <Link
                        to="/login"
                        style={{
                            color: "#00c9b7",
                            textDecoration: "none",
                            fontSize: "17px",
                            fontWeight: "600",
                        }}
                    >
                        Login
                    </Link>

                </div>

            </div>

        </div>
    );
};

export default Signup;