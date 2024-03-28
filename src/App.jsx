import React from "react";

const App = () => {
  return (
    <>
      <section id="home" className="h-screen">
        <nav
          id="nav"
          className=" navbar bg-gradient-to-r from-[#cacaca] from-50% to-black to-50% flex justify-between px-2 sm:bg-[#cacaca]"
        >
          <div>
            <img className="w-[6rem] h-auto" src="/mohan.png" alt="" id="nav-img"/>
          </div>
          <div>
            <ul>
              <li className="grid grid-flow-col gap-3 ">
                <a
                  className="font-bold btn btn-ghost btn-sm text-[#cacaca] w-auto bg-black rounded-2xl nav-list"
                  href="#"
                >
                  About
                </a>
                <a
                  className="font-bold btn btn-ghost btn-sm text-[#cacaca] w-auto bg-black rounded-2xl nav-list"
                  href="#"
                >
                  Education
                </a>
                <a
                  className="font-bold btn btn-ghost btn-sm text-[#cacaca] w-auto bg-black rounded-2xl nav-list"
                  href="#"
                >
                  Skills
                </a>
                <a
                  className="font-bold btn btn-ghost btn-sm text-[#cacaca] w-auto bg-black rounded-2xl nav-list"
                  href="#"
                >
                  Certifications
                </a>
                <a
                  className="font-bold btn btn-ghost btn-sm text-[#cacaca] w-auto bg-black rounded-2xl nav-list"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <button id="nav-button" className="hidden">
          <i class="fa-solid fa-bars fa-lg"></i>
          </button>
        </nav>
        <div
          id="nav-bottom"
          className=" w-full bg-gradient-to-r from-[#cacaca] from-50% to-black to-50% flex flex-row" 
        >
          <div className="w-1/2 h-[100%] flex flex-col justify-center items-center " >
            <p className="text-3xl pb-3 text-[#00000085]">Hi, i am</p>
            <p className="text-6xl text-[#000000cb] ">MOHAN SUNKARA</p>
            <p className="text-xs text-[#0000006f]">
              Data Scientist / Front-end Developer
            </p>
            <div className="flex space-x-4 pt-5">
              <div className="w-10 h-10 shadow-[0px_0px_10px_1px_black] rounded-full bg-[#cacaca] flex items-center justify-center hover:cursor-pointer hover:bg-[#000000] hover:text-[#cacaca]">
                
              <i className="fa-solid fa-at fa-md"></i>
              </div>
              <div className="w-10 h-10 shadow-[0px_0px_10px_1px_black] rounded-full bg-[#cacaca] flex items-center justify-center hover:cursor-pointer hover:bg-[#000000] hover:text-[#cacaca]">               
                <i className="fa-brands fa-github fa-md"></i>
              </div>
              <div className="w-10 h-10 shadow-[0px_0px_10px_1px_black] rounded-full bg-[#cacaca] flex items-center justify-center hover:cursor-pointer hover:bg-[#000000] hover:text-[#cacaca]">
                <i className="fa-brands fa-linkedin fa-md"></i>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-[100%] flex item-center justify-center"> <img src="me-img-1.png" alt="" /></div>
        </div>
      </section>
    </>
  );
};

export default App;
