import React from 'react'

export default function Hero() {
      return (
            <div className='bg-banner bg-center flex items-center z-20 justify-center w-11/12 md:w-10/12 mx-auto h-[648px] rounded-lg mt-5 font-lexend'>
                  <div className='text-center text-slate-50 py-10 w-8/12 mx-auto'>
                        <h1 className='text-5xl font-bold leading-normal'>Discover an exceptional cooking class tailored for you!</h1>
                        <p className='font-semibold py-5'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                        <div className='flex items-center justify-center gap-6 mt-4'>
                              <button className='py-4 px-5 rounded-3xl bg-green-400 border border-green-400 font-bold text-gray-900'>Explore Now</button>
                              <button className='py-4 px-5 rounded-3xl border font-bold'>Our Feedback</button>
                        </div>
                  </div>
            </div>
      )
}
