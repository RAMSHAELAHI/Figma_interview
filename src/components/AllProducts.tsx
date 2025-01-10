

import React from "react";

export default function AllProducts() {
  return (
    <div>
      <section className="bg-gradient-to-r from-black to-blue-950">
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            <div
              className="col-span-2 sm:col-span-4 md:col-span-2 bg-gradient-to-r from-black to-grey-700
            h-auto md:h-full flex flex-col"
            >
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-2 pb-2 pt-40 flex-grow"
              >
                <img
                  src="/images/4 chair set.jpg"
                  alt="Dinning Sofa Set"
                  className=" insert-0 h-full w-full object-cover group-hover:scale-105 transition-transform
  duration-500 ease-in-out"
                />

                <div className="absolute insert-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5"></div>
                <h3
                  className="z-10 text-3xl font-bold text-white absolute top-0 left-0 p-4 xs:text-xl
md:text-0xl"
                >
                  {" "}
                  Dinning Sofa Set
                  
                </h3>
              </a>
            </div>

            <div
              className="col-span-2 sm:col-span-4 md:col-span-2 bg-gradient-to-r from-black to-grey-700
            h-auto md:h-full flex flex-col"
            >
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src="/images/dinning wooden chairs.jpg"
                  alt=" Wooden Dinning Chair"
                  className=" insert-0 h-full w-full object-cover group-hover:scale-105 transition-transform
  duration-500 ease-in-out"
                />

                <div className="absolute insert-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5"></div>
                <h3
                  className="z-10 text-3xl font-bold text-white absolute top-0 left-0 p-4 xs:text-xl
md:text-0xl"
                >
                  {" "}
                  Wooden Dinning Chair Set
                </h3>
              </a>
            </div>

            <div
              className=" col-span-2 sm:col-span-4 md:col-span-2 bg-gradient-to-r from-black to-grey-700
            h-auto md:h-full flex flex-col"
            >
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4 flex-grow"
              >
                <img
                  src="/images/fancy sofa.jpg"
                  alt="Fancy Sofa  "
                  className=" insert-0 h-full w-full object-cover group-hover:scale-105 transition-transform
  duration-500 ease-in-out"
                />

                <div className="absolute insert-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5"></div>
                <h3
                  className="z-10 text-3xl font-bold text-white absolute top-0 left-0 p-4 xs:text-xl
md:text-0xl"
                >
                  {" "}
                  Fancy Sofa 
                </h3>
              </a>
            </div>

            <div
              className=" col-span-2 sm:col-span-4 md:col-span-2 bg-gradient-to-r from-black to-grey-700
            h-auto md:h-full flex flex-col"
            >
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src="/images/peacoke sofa.jpg"
                  alt=" Peacock sofa set"
                  className=" insert-0 h-full w-full object-cover group-hover:scale-105 transition-transform
  duration-500 ease-in-out"
                />

                <div className="absolute insert-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5"></div>
                <h3
                  className="z-10 text-3xl font-bold text-white absolute top-0 left-0 p-4 xs:text-xl
md:text-0xl"
                >
                  {" "}
                  Peacock Sofa With Table
                </h3>
              </a>
            </div>

            <div
              className=" col-span-2 sm:col-span-4 md:col-span-2 bg-gradient-to-r from-black to-grey-700
            h-auto md:h-full flex flex-col"
            >
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4 flex-grow"
              >
                <img
                  src="/images/marron chair.jpg"
                  alt="Maroon chair  "
                  className=" insert-0 h-full w-full object-cover group-hover:scale-105 transition-transform
  duration-500 ease-in-out"
                />

                <div className="absolute insert-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5"></div>
                <h3
                  className="z-10 text-3xl font-bold text-white absolute top-0 left-0 p-4 xs:text-xl
md:text-0xl"
                >
                  {" "}
                  Maroon Wooden chair {" "}
                </h3>
              </a>
            </div>

            <div
              className="col-span-2 sm:col-span-4 md:col-span-2 bg-gradient-to-r from-black to-grey-700
            h-auto md:h-full flex flex-col "
            >
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src="/images/office dinette chair.jpg"
                  alt="office dinette chair"
                  className=" insert-0 h-full w-full object-cover group-hover:scale-105 transition-transform
  duration-500 ease-in-out"
                />

                <div className="absolute insert-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5"></div>
                <h3
                  className="z-10 text-3xl font-bold text-white absolute top-0 left-0 p-4 xs:text-xl
md:text-0xl"
                >
                  {" "}
                  Office Dinette Chair
                </h3>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
