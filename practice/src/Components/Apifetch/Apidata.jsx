import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Apidata = () => {
  const [data, setData] = useState([]);

  //   style={
  // repeat(auto-fill, minmax(300px, 1fr));
  //   }

  const getApidata = () => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  };

  useEffect(() => {
    getApidata();
  }, []);

  //   console.log(data)

  return (
    <div
      style={{
        // display: "flex",
        display:"grid",
        // flexWrap: "wrap",
        gridTemplateColumns: " repeat(auto-fill, minmax(300px, 1fr))",
        border: "1px solid black",
        gap: "10px",
      }}
    >
      {data.map((postItem) => (
        <li
          style={{ border: "1px solid black", backgroundColor: "teal" }}
          key={postItem.id}
        >
          <h2>{postItem.title}</h2>{" "}
          <img
            style={{ width: "200px", height: "200px" }}
            alt="data"
            src={postItem.image}
          />
        </li>
      ))}
    </div>
  );
};

export default Apidata;
