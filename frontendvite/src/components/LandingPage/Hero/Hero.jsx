import React from 'react';

const Hero = () => {
  return (
    <div className="bg-white h-screen font-sans flex flex-col mt-[-70px] items-center justify-center pb-[-30px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 pt-12 lg:pt-0">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
            <div>
              <div className="flex flex-col items-center justify-center">
                <a href="https://egyanam.com/" className="inline-flex mt-[-60px] px-1 py-1 gap-x-2 rounded-xl border border-gray-400 border-2 hover:border-red-500 items-center text-sm font-semibold text-gray-600 space-x-1">
                  <span className="bg-red-100 flex items-center justify-center gap-2 text-red-800 text-sm font-semibold px-2.5 py-0.5 rounded-lg dark:bg-red-900 dark:text-red-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-red-400">
                      <path d="m3 11 18-5v12L3 14v-3z"></path>
                      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path>
                    </svg>
                    New
                  </span>
                  <span>Our success stories</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
                <h1 className="mt-5 text-15xl tracking-tight font-extrabold text-gray-900 sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                  <p className="sm:block">Empower Your Learning Journey</p>
                  <span className="text-zinc-500 md:block">Explore and Excel</span>
                  <p className="text-red-800 md:block">with Top Tutors.</p>
                </h1>
              </div>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <button className="flex items-center text-white  justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full sm:w-auto">
                  Chat with e-assistant
                </button>
                <img src="https://solutions.technologyadvice.com/wp-content/uploads/2023/06/friendly-chatbot.jpg" alt="Robot" className="w-20 h-20 mt-[-10px]" />
              </div>
            </div>
          </div>
          <div className="mt-16 ml-6 sm:mt-24 lg:mt-0 lg:col-span-5">
            <p className="text-3xl flex mr-3 ml-12 text-gray-600 sm:text-3xl lg:text-lg xl:text-3xl">
            "Unlock limitless opportunities and stay ahead of the curve by upgrading your tech skills – invest in yourself today for a brighter and more rewarding future."
            </p>
            <div className="mt-12 ml-5">
              <div className="grid grid-cols-3 gap-1 sm:gap-6 xl:gap-8">
                <div className="text-center sm:flex sm:items-center sm:justify-center">
                  <div className="sm:flex-shrink-0">
                    <div className="flow-root">
                      <div className="border w-fit transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 inline-flex items-center justify-center px-3 py-0.5 text-sm font-medium leading-5 text-red-600 bg-red-100 rounded-full">
                        Active User
                      </div>
                      <p className="text-4xl font-bold text-gray-900">16K+</p>
                    </div>
                  </div>
                </div>
                <div className="text-center sm:flex sm:items-center sm:justify-center">
                  <div className="sm:flex-shrink-0">
                    <div className="flow-root">
                      <div className="border w-fit transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 inline-flex items-center justify-center px-3 py-0.5 text-sm font-medium leading-5 text-red-600 bg-red-100 rounded-full">
                        Videos
                      </div>
                      <p className="text-4xl font-bold ml-4 text-gray-900">28K+</p>
                    </div>
                  </div>
                </div>
                <div className="text-center sm:flex sm:items-center sm:justify-center">
                  <div className="sm:flex-shrink-0">
                    <div className="flow-root">
                      <div className="border w-fit transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 inline-flex items-center justify-center px-3 py-0.5 text-sm font-medium leading-5 text-red-600 bg-red-100 rounded-full">
                        Series
                      </div>
                      <p className="text-4xl font-bold ml-4 text-gray-900">18+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 flex justify-center space-x-12">
              <span className="relative flex h-25 w-20 shrink-0 mr-2 overflow-hidden rounded-full">
                <img className="aspect-square h-full w-full" alt="User 1" src="https://plus.unsplash.com/premium_photo-1708684233610-7a82720cd733?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </span>
              
              <span className="relative flex h-25 w-20 shrink-0 gap-5 overflow-hidden rounded-full">
                <img className="aspect-square h-full w-full" alt="User 3" src="https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;width=40" />
              </span>
             
              <span className="relative flex h-25 w-20 shrink-0 overflow-hidden rounded-full">
              <img className="aspect-square h-full w-full"  src="https://images.unsplash.com/photo-1527718641255-324f8e2d0421?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="5" />
              </span>
             </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Hero;