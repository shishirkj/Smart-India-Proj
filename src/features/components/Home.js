import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

export default function Home() {
  const backgroundImageUrl = './images/school3.jpg';
  const { loginWithRedirect} = useAuth0();
  return (
    <div>
      <section
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
        }}
        className="bg-cover bg-no-repeat min-h-screen flex justify-center items-center"
      >
        <div className="grid max-w-screen-xl px-4 py-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1
              className="max-w-2xl text-center mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-dark"
              style={{ marginLeft: '10vw' }} // Adjust margin as needed
            >
              Revolutionizing Rural Education in India
            </h1>

            <p className="max-w-2xl mb-6 pl-21 text-black lg:mb-8 md:text-lg lg:text-xl dark:text-black">
              Empowering Rural Minds, Transforming India's Future
            </p>
            <div className="mx-2 mx-6flex flex-row items-center">  
         
         <a onClick={() => loginWithRedirect()}
               
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-black border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Login
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-black border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Know More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
