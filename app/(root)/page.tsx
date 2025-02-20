"use client"
import Home from "@/components/Home";
import Loader from "@/components/Loader";
import {useEffect, useState} from "react";

export default function Portfolio() {
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    setTimeout(function(){
      setShowPage(true)
    }, 2000);
  }, []);

  return (
    <main>
      {!showPage ? <Loader/> : (
        <Home/>
      )} 
    </main>
  );
}
