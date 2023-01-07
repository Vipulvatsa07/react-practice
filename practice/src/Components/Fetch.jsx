import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchApi = () => {
  const [data, setData] = useState([]);
  //fetch  then //try--  catch  data is in stream form so we need to convert it into readable form so we hav to do json()
  //axios  then //try--- catch  data will be in readable form

  const Api = () => {
    // const Api = async() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("err");
      });

    //   let res=await fetch("https://fakestoreapi.com/products")
    //   res=await res.json();
    //   console.log(res)
    //   setData(res)
      

  };








  useEffect(() => {
    Api();
  }, []);

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

export default FetchApi;
