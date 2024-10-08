import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Jackson.
            <br className="hidden lg:inline-block" />I love to build amazing
            websites & apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            I am a Full stack web developer with more than 1 year of experience
            in web development. My main purpose is to produce the best quality
            results required by the clients.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center sm:items-stretch space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex justify-center text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg whitespace-nowrap"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex justify-center text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg whitespace-nowrap"
            >
              See My Past Work
            </a>
            <a
              href="/Blessing_Jackon_-_Full_Stack_Web_Developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex justify-center text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg whitespace-nowrap"
            >
              Check out my CV
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded opacity-75 "
            alt="hero"
            src="./coding-1.png"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
