"use client";
import React from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';


type pageProps = {
  
};

const page:React.FC<pageProps> = () => {
  
  return <>
    
    <div className="w-screen h-screen flex flex-col">
      <Navbar logout={false} />
      <Login/>
    </div>

</>
}
export default page;


{/* <div className="w-screen h-screen flex flex-col items-top items-end">
<div className="w-full h-20 bg-dark-red border-l-2 border-black drop-shadow-2xl flex"></div>
<div className="w-full h-3/5 flex">
  <div className="w-3/4 h-3/4 border-b border-stroke bg-dull-peach">
    <p className="text-black font-sans "> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
  </div>
  <div className="w-1/4 h-full bg-red-pink border-l border-b border-stroke flex flex-col">
    <h2 className="text-3xl mt-8 ml-10 font-bold text-black">{state[0]}</h2>
    <form onSubmit={handleLogin}>
      <div className="flex flex-col">
        <h3 className="text-xl ml-10 mt-5 text-black">Username:</h3>
        
        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="ml-10 mr-28 text-black pl-2 mt-2 rounded-lg"></input>
        <h3 className="text-xl ml-10 mt-5 text-black">{state[2] ? "Set Password" : "Password"}:</h3>
        <input type="password" placeholder="Enter your password" value={password} onChange={(p) => setPassword(p.target.value)} className="ml-10 mr-28 text-black pl-2 mt-2 rounded-lg"></input>
        {state[2] ? (<><h3 className="text-xl ml-10 mt-5 text-black">Confirm Password:</h3>
                     <input type="password" placeholder="Renter your password" className="ml-10 mr-28 text-black pl-2 mt-2 rounded-lg"></input> </>) : null}
        
      </div>
      <button className="bg-hot-pink h-10 w-24 ml-10 mt-7 border border-black rounded-xl transition-transform ease-in duration-300 hover:scale-105">{state[0]}</button>
      </form>
      <button onClick={handleClick} className='w-52 ml-8 mt-3 text-blue-700 hover:text-white'>{state[1]}</button>
  </div>      
</div>
</div> */}

/*
"use client";
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';

import { auth } from './firebase/firebase';
import { useRouter } from 'next/router';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';


type pageProps = {
  
};



const page:React.FC<pageProps> = () => {

  const[state, setState] = useState(["Sign Up", "Already have an account?", true]);
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(email === "" || password === ""){
      alert("Please fill in all fields");
    }
    try{
      const newUser = await signInWithEmailAndPassword(email, password);
      if(!newUser) return;
    } catch (error: any){
      alert(error.message);
    }
  }

  const handleClick = () => {
    if(state[0] === "Sign Up"){
      setState(["Log In", "Don't have an account?", false]);
    }else{
      setState(["Sign Up", "Already have an account?", true]);
    }
  }

  return <>
    <div className="w-screen h-screen flex flex-col items-top items-end">
      <div className="w-full h-20 bg-dark-red border-l-2 border-black drop-shadow-2xl flex"></div>
      <div className="w-full h-3/5 flex">
        <div className="w-3/4 h-3/4 border-b border-stroke bg-dull-peach">
          <p className="text-black font-sans "> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
        </div>
        <div className="w-1/4 h-full bg-red-pink border-l border-b border-stroke flex flex-col">
          <h2 className="text-3xl mt-8 ml-10 font-bold text-black">{state[0]}</h2>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col">
            
              <h3 className="text-xl ml-10 mt-5 text-black">Username:</h3>
              <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="ml-10 mr-28 text-black pl-2 mt-2 rounded-lg"></input>
              <h3 className="text-xl ml-10 mt-5 text-black">{state[2] ? "Set Password" : "Password"}:</h3>
              <input type="password" placeholder="Enter your password" value={password} onChange={(p) => setPassword(p.target.value)} className="ml-10 mr-28 text-black pl-2 mt-2 rounded-lg"></input>
              {state[2] ? (<><h3 className="text-xl ml-10 mt-5 text-black">Confirm Password:</h3>
                           <input type="password" placeholder="Renter your password" className="ml-10 mr-28 text-black pl-2 mt-2 rounded-lg"></input> </>) : null}
            </div>
            <button className="bg-hot-pink h-10 w-24 ml-10 mt-7 border border-black rounded-xl transition-transform ease-in duration-300 hover:scale-105">{state[0]}</button>
            <button onClick={handleClick} className='w-52 ml-8 mt-3 text-blue-700 hover:text-white'>{state[1]}</button>
          </form>
        </div>
        
        
      </div>
    </div>
  </>
}
export default page;*/