/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from "react";
import Link from "../Link/Link";
import "./Navber.css";




const Navber = () => {

  const [open , setOpen] = useState(false) 

  const route = [
    {
      id: 1,
      name: "home",
      path: "/home",
    },
    {
      id: 2,
      name: "about",
      path: "/about",
    },
    {
      id: 3,
      name: "service",
      path: "/service",
    },
    {
      id: 4,
      name: "project",
      path: "/project",
    },
    {
      id: 5,
      name: "contact",
      path: "/contact",
    },
  ];
  

  return (
    <nav className="navbar">
           <div className="md:hidden" onClick={() => setOpen(!open)}>
            <span> {open === true ? <XMarkIcon className="h-6 w-6 text-yellow-600"></XMarkIcon> : <Bars3Icon className="h-6 w-6 text-yellow-600"></Bars3Icon> } </span>
           </div>
    
           <ul className={`md:flex md:static absolute duration-500 pl-4 ${open ? 'top-10' : '-top-52'}`}>
             {route.map((route) => (
               <Link route={route} key={route.id}></Link>
             ))}
           </ul>
         </nav>
  );
};

export default Navber;