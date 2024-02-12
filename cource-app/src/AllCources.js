import React, { useState,useEffect } from "react";
import Cource from "./Cource";

const AllCource = () => {
  useEffect(()=>{
 document.title="All Courses"
  },[])

  const [cources, setCources] = useState([
    { title: "Java Cource", description: "This is demo Cource" },
    { title: "Django Cource", description: "This is Django Cource" },
    { title: "ReactJS Cource", description: "This is ReactJS Cource" }
  ]);

  return (
    <div>
      <h1>All Cources</h1>
      <p>List of cources are as follows:</p>
      {
        cources.length > 0 ?
                cources.map((item)=>(
            <Cource cource={item} />
        )):
        
          "No cources"
      }
    </div>
  );
}

export default AllCource;