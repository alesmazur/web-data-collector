import React, { useState, useEffect } from "react";

export default function Getrequest() {
  // function
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await fetch("link from Alexey");
    if (!response.ok) {
      throw new Error("Data cannot be fetched!");
    } else {
      return response.json();
    }
  };

  useEffect(() => {
    fetchData()
      .then((response) => {
        setData(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  // rendering to DOM
  return (
    <div>
      <div className="get-data py-5 d-flex align-items-center" id="get-data">
        <p>
          Here we might to get data from server.
          <br />
          Push the Get button to check this out!
        </p>
        <textarea cols="24" rows="1" className="mx-2">
          waiting for response ...
        </textarea>
        <button className="btn btn-outline-info mt-2 px-5 ">Get</button>
      </div>
    </div>
  );
}
