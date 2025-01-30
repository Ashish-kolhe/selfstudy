import React from 'react'
import Link from 'next/link'
const Hero = () => {
  return (
    <div className='bg-white'>
         <div className='flex justify-center'>
                <div className='max-w-5xl'>
                    <div id='krypton' className="hero bg-white py-10  lg:p-10" >
                        <div className="hero-content flex-col px-10 lg:flex-row" >
                            <div  className='max-w-sm text-center lg:text-left' >
                            <h1 className="text-6xl  lg:text-8xl font-black text-gray-800 mt-6"> <img src="./Dots.png" alt="" className=' -mb-96'/>MASTER SKILLS AT YOUR OWN PACE.</h1>
                               
                            </div>
                            <div className='max-w-sm mt-10 lg:mt-0 lg:ml-10 text-center text-gray-950'>
                               
                               <Link href="/browse"><button className='btn btn-wide btn-outline text-gray-950'> <img src="./google.png" alt="" className='w-8' />Continue with Google</button></Link> 
                               <Link href="/browse"> <button className='btn btn-wide btn-outline text-gray-950 my-4'> <img src="./FB.png" alt="" className='w-10' />Continue with Facebook</button></Link> 
                               <Link href="/browse"> <button className='btn btn-wide btn-outline text-gray-950'>Continue with Email</button></Link> 
                                <p className='my-8 text-xs font-bold text-gray-800'>By signing up you agree to <span className='text-blue-600 font-black'>SelfStudy's</span> Terms of Service and Privacy Policy, and agree to receive marketing communications from <span className='text-blue-600 font-black'>SelfStudy</span> at the email address provided.</p>
                            
                            <h1 className='flex justify-center'><img src="./Arrow.png" alt=""  className='w-36'/></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Hero