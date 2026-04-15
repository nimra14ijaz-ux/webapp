import React, { useState } from "react";

function Login() {

const [isLogin, setIsLogin] = useState(true);

const styles = {
mainContainer:{
height:"100vh",
display:"flex",
justifyContent:"center",
alignItems:"center",
backgroundImage:"url('https://images.unsplash.com/photo-1550345332-09e3ac987658')",
backgroundSize:"cover",
backgroundPosition:"center",
fontFamily:"Segoe UI"
},

formContainer:{
width:"380px",
background:"rgba(0,0,0,0.8)",
padding:"40px",
borderRadius:"15px",
color:"white",
textAlign:"center",
backdropFilter:"blur(10px)"
},

logo:{
margin:"0",
letterSpacing:"3px"
},

tagline:{
fontSize:"14px",
opacity:"0.7",
marginBottom:"20px"
},

tabs:{
display:"flex",
marginBottom:"20px"
},

tabButton:{
flex:1,
padding:"10px",
background:"none",
border:"none",
color:"white",
cursor:"pointer"
},

activeTab:{
background:"#00c9a7",
borderRadius:"8px",
fontWeight:"bold",
color:"black"
},

input:{
width:"100%",
padding:"12px",
margin:"10px 0",
borderRadius:"8px",
border:"none",
outline:"none"
},

forgot:{
fontSize:"12px",
textAlign:"right",
cursor:"pointer"
},

loginBtn:{
width:"100%",
padding:"12px",
background:"#00c9a7",
border:"none",
borderRadius:"8px",
fontSize:"16px",
fontWeight:"bold",
cursor:"pointer",
marginTop:"10px"
},

switchText:{
marginTop:"15px",
fontSize:"13px"
},

switchLink:{
color:"#00c9a7",
cursor:"pointer"
},

divider:{
margin:"20px 0",
opacity:"0.7"
},

socialBtn:{
width:"100%",
padding:"10px",
marginBottom:"10px",
borderRadius:"8px",
border:"1px solid #00c9a7",
background:"none",
color:"white",
cursor:"pointer"
}
};

return (

<div style={styles.mainContainer}>

<div style={styles.formContainer}>

<h1 style={styles.logo}>ELITE-FIT</h1>
<p style={styles.tagline}>Your AI Fitness Assistant</p>

<div style={styles.tabs}>

<button
style={{
...styles.tabButton,
...(isLogin ? styles.activeTab : {})
}}
onClick={()=>setIsLogin(true)}
>
Sign In
</button>

<button
style={{
...styles.tabButton,
...(!isLogin ? styles.activeTab : {})
}}
onClick={()=>setIsLogin(false)}
>
Sign Up
</button>

</div>

<input style={styles.input} type="email" placeholder="Email Address"/>

<input style={styles.input} type="password" placeholder="Password"/>

{!isLogin && (
<input style={styles.input} type="password" placeholder="Confirm Password"/>
)}

{isLogin && (
<p style={styles.forgot}>Forgot Password?</p>
)}

<button style={styles.loginBtn}>
{isLogin ? "Sign In" : "Create Account"}
</button>

<p style={styles.switchText}>
{isLogin ? "Don't have an account?" : "Already have an account?"}

<span
style={styles.switchLink}
onClick={()=>setIsLogin(!isLogin)}
>
{isLogin ? " Sign Up" : " Sign In"}
</span>

</p>

<div style={styles.divider}>OR</div>

<button style={styles.socialBtn}>
Sign in with Google
</button>

<button style={styles.socialBtn}>
Sign in with Apple
</button>

</div>

</div>



);

}

export default Login;