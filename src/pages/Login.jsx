import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { supabase } from "../Supabase";

const Login = () => {
    const navigate = useNavigate();

    // =========================
    // STATES
    // =========================

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    // =========================
    // HANDLE SUBMIT
    // =========================

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");

        // Check empty fields
        if (!email || !password) {
            setError("Please enter email and password.");
            return;
        }

        try {
            setLoading(true);

            // Supabase Login
            const { data, error } =
                await supabase.auth.signInWithPassword({
                    email: email,
                    password: password,
                });

            // Login error
            if (error) {
                setError(error.message);
                return;
            }

            console.log("Login successful:", data);

            // Go to Admin Dashboard
            navigate("/AdminHome");

        } catch (err) {
            console.log("Login error:", err);
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
                LOGIN CARD
            ========================= */}

            <div
                style={{
                    width: "100%",
                    maxWidth: "600px",
                    background: "#050707",
                    border: "2px solid #00c9b7",
                    borderRadius: "22px",
                    padding: "45px 60px",
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
                    LOGIN HEADING
                ========================= */}

                <h2
                    style={{
                        textAlign: "center",
                        color: "#ffffff",
                        fontSize: "32px",
                        marginBottom: "30px",
                    }}
                >
                    Login
                </h2>

                {/* =========================
                    LOGIN FORM
                ========================= */}

                <form onSubmit={handleSubmit}>

                    {/* EMAIL */}

                    <div style={{ marginBottom: "22px" }}>

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

                    <div style={{ marginBottom: "12px" }}>

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

                    {/* ERROR */}

                    {error && (
                        <div
                            style={{
                                color: "#ff6b6b",
                                textAlign: "center",
                                fontSize: "14px",
                                marginTop: "15px",
                                marginBottom: "10px",
                            }}
                        >
                            {error}
                        </div>
                    )}

                    {/* LOGIN BUTTON */}

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
                            ? "Logging in..."
                            : "Login in to Dashboard"}
                    </button>

                </form>

                {/* =========================
                    SIGN UP
                ========================= */}

                <p
                    style={{
                        textAlign: "center",
                        color: "#ffffff",
                        fontSize: "17px",
                        marginTop: "28px",
                        marginBottom: "0",
                    }}
                >
                    Don't have an Account?{" "}

                    <Link
                        to="/signup"
                        style={{
                            color: "#00c9b7",
                            textDecoration: "none",
                            fontWeight: "600",
                        }}
                    >
                        Sign Up
                    </Link>
                </p>

            </div>

        </div>
    );
};

export default Login;