import React from 'react';

const Hero = () => {
  return (
    <div className="bg-white font-sans flex flex-col items-center justify-center pb-12 lg:py-0 lg:items-start lg:flex-row">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 pt-12 lg:pt-0">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
            <div>
              <div className="flex flex-col items-center justify-center mt-8 mb-8">
                <a href="https://egyanam.com/" className="inline-flex px-3 py-1 gap-x-2 rounded-full border-2 border-gray-400 hover:border-red-500 items-center text-sm font-semibold text-gray-600 space-x-1">
                  <span className="bg-red-100 flex items-center justify-center gap-2 text-red-800 text-sm font-semibold px-2.5 py-0.5 rounded-lg dark:bg-red-900 dark:text-red-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-red-400">
                      <path d="m3 11 18-5v12L3 14v-3z"></path>
                      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path>
                    </svg>
                    New
                  </span>
                  <span>Updates added this week</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
                <h1 className="mt-2 text-3xl lg:text-5xl font-extrabold text-gray-900">
                  <p className="font-sans sm:block">Empower Your Learning Journey</p>
                  <span className="text-zinc-500 md:block">Explore and Excel</span>
                  <p className="text-red-800 md:block">with Top Tutors.</p>
                </h1>
              </div>
              <div className="sm:flex sm:justify-center lg:justify-start">
                <button className="inline-block px-8 py-3 ml-5 text-white bg-black rounded-md text-base font-medium focus:outline-none hover:bg-primary-dark">
                  Chat with e-assistant
                </button>
                <button id="theme-toggle" type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
    <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
    <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
</button>                                       {/* <img src="https://solutions.technologyadvice.com/wp-content/uploads/2023/06/friendly-chatbot.jpg" alt="Robot" className="w-20 h-30 mt-[-10px]" /> */}
              </div>
            </div>
          </div>
          <div className="mt-1 ml-6 sm:mt-24 lg:mt-0 lg:col-span-5">
            <p className="text-4xl mt-10 lg:text-2xl text-gray-600">
              "Unlock limitless opportunities and stay ahead of the curve by upgrading your tech skills – invest in yourself today for a brighter and more rewarding future."
            </p>
            <div className="mt-12">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="border border-transparent hover:bg-primary/80 inline-block px-4 py-2 text-sm font-medium leading-5 text-red-600 bg-red-100 rounded-full">
                    Active User
                  </div>
                  <p className="mt-2 text-3xl font-bold text-gray-900">16K+</p>
                </div>
                <div className="text-center">
                  <div className="border border-transparent hover:bg-primary/80 inline-block px-4 py-2 text-sm font-medium leading-5 text-red-600 bg-red-100 rounded-full">
                    Videos
                  </div>
                  <p className="mt-2 text-3xl font-bold text-gray-900">28K+</p>
                </div>
                <div className="text-center">
                  <div className="border border-transparent hover:bg-primary/80 inline-block px-4 py-2 text-sm font-medium leading-5 text-red-600 bg-red-100 rounded-full">
                    Series
                  </div>
                  <p className="mt-2 text-3xl font-bold text-gray-900">18+</p>
                </div>
              </div>
            </div>
            <div className="mt-12 flex justify-center space-x-12">
              <span className="relative flex h-25 w-20 shrink-0 mr-2 overflow-hidden rounded-full">
                <img className="aspect-square h-full w-full" alt="User 1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ19c-SmPuYN_hEbZdJdz1Lz8PZpJr_JggezxzzltxqA&s" />
              </span>
              
              <span className="relative flex h-25 w-20 shrink-0 gap-5 overflow-hidden rounded-full">
                <img className="aspect-square h-full w-full" alt="User 3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzyhqN6Pez1mv7lzq2FK2j8sZ6UxOOD5W7bybiSFcTvw&s" />
              </span>
             
              <span className="relative flex h-25 w-20 shrink-0 overflow-hidden rounded-full">
              <img className="aspect-square h-full w-full"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXhl2GGdQQ4FSa0C9Mzc8h8c4MKaaZ3M63ugnQ7Yteqw&s" alt="5" />
              </span>

              <span className="relative flex h-25 w-20 shrink-0 mr-2 overflow-hidden rounded-full">
                <img className="aspect-square h-full w-full" alt="User 1" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/how_to_become_machine_learning_engineer.jpg" />
              </span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
