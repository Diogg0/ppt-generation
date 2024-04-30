import React from 'react';
import Navbar from '../components/Navbar';

type pageProps = {
    
};

const Main:React.FC<pageProps> = () => {
    
    return <>
        <div className="w-screen h-screen flex flex-col">
            <Navbar logout={true} />
            <div className="w-screen h-full overflow-hiddenf flex bg-green-200">
                <div className="w-2/5 bg-white pl-10 pt-10">
                    <form className='text-black'>
                        <label className='text-black text-xl' htmlFor="name">Enter subject:</label><br></br>
                        <input type="text" placeholder="DAA" className="border mt-2 pl-5 h-10 w-1/2 border-black rounded-2xl"/>
                        <br></br>
                        <br></br>
                        <label className='text-black text-xl' htmlFor="name">Enter number of slides:</label><br></br>
                        <input type="text" placeholder="10" className="border mt-2 text-center h-10 w-16 border-black rounded-2xl"/>
                        <br></br>
                        <br></br>
                        <label className='text-black text-xl' htmlFor="name">Enter topics:</label><br></br>
                        <input type="text" placeholder="Binary search trees, graphs .... etc" className="border mt-2 pl-5 h-10 w-3/4 border-black rounded-2xl"/>
                        <br></br>
                        <br></br>
                        <button className="bg-hot-pink h-10 w-24 border border-black rounded-xl transition-transform ease-in duration-100 hover:scale-105 hover:text-white">Submit</button>

                    </form>
                </div>
                <div className="w-3/5 bg-red-pink border-l border-black">.</div>
            </div>
        </div>
        
    </>
}
export default Main;