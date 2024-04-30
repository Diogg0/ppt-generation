import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from '../firebase/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';



type LoginProps = {
    
};

const Login:React.FC<LoginProps> = () => {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[state, setState] = useState(["Sign Up", "Already have an account?", true]);
    const [credentials, setCredentials] = useState(false);
  
    const router = useRouter();

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!email || !password) return alert("Please fill all fields");
      try {
        console.log("test");
        const newUser = createUserWithEmailAndPassword(auth, email, password)
        if (!newUser) return;
        router.push("/Main");
      } catch (error: any) {
        alert(error.message);
      }
    };

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!email || !password) return alert("Please fill all fields");
      try {
        const newUser = await signInWithEmailAndPassword(auth, email, password);
        if (!newUser) return;
        router.push("/Main");
      } catch (error: any) {
        setCredentials(true);
      }
    };

    const handleClick = () => {
      if(state[0] === "Sign Up"){
        setState(["Log In", "Don't have an account?", false]);
      }else{
        setState(["Sign Up", "Already have an account?", true]);
      }
    }
    
    return <>
<div className="w-full h-full flex flex-col items-top items-end">
<div className="w-full h-3/4 flex">
  <div className="px-3 py-10 w-3/4 h-3/4 border-b border-stroke bg-dull-peach">
    <p className="text-black font-sans text-2xl "> Generate your PPT's with a simple prompt, select the necessary subject and topics along with the number of slides to generate the ppt you require.</p>
    <p className="text-black font-sans text-2xl pt-5 "> PPT's will be created using the required DY Patil template, and allows you to customize the ppt further.</p>
  </div>
  <div className="w-1/4 h-full bg-red-pink border-l border-b border-stroke flex flex-col">
    <h2 className="text-3xl mt-8 ml-10 font-bold text-black">{state[0]}</h2>
    <form onSubmit={state[0] === "Sign Up" ? handleRegister : handleLogin}>
      <div className="flex flex-col">
        {credentials ? <span className="ml-10 mt-2 text-red-800">Invalid credentials</span> : null}
        <h3 className="text-xl ml-10 mt-5 text-black">Username:</h3>
        
        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="ml-10 mr-28 text-black pl-2 mt-2 rounded-lg"></input>
        <h3 className="text-xl ml-10 mt-5 text-black">{state[2] ? "Set Password" : "Password"}:</h3>
        <input type="password" placeholder="Enter your password" value={password} onChange={(p) => setPassword(p.target.value)} className="ml-10 mr-28 text-black pl-2 mt-2 rounded-lg"></input>
        {state[2] ? (<><h3 className="text-xl ml-10 mt-5 text-black">Confirm Password:</h3>
                     <input type="password" placeholder="Renter your password" className="ml-10 mr-28 text-black pl-2 mt-2 rounded-lg"></input> </>) : null}
        
      </div>
      <button type="submit" className="bg-hot-pink h-10 w-24 ml-10 mt-7 border border-black rounded-xl transition-transform ease-in duration-100 hover:scale-105">{state[0]}</button>
      </form>
      <button onClick={handleClick} className='w-52 ml-8 mt-3 text-blue-700 hover:text-white'>{state[1]}</button>
  </div>      
</div>
</div>
    </>
}
export default Login;