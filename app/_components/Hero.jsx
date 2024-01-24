import React from "react";

const Hero = () => {
  return (
    <>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-[80vh]">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              All your Digital Products .
              <strong className="font-extrabold text-primary sm:block">
                {" "}
                Is One Click Away.{" "}
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Start Exploring State of the Art Assets Now !
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#7d7c7c] focus:outline-none focus:ring active:bg-primary sm:w-auto"
                href="#courses"
              >
                Get Started
              </a>

              <a
                className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-primary focus:outline-none focus:ring active:text-primary sm:w-auto"
                href="/"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
