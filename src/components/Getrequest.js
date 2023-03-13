import React, { useState, useEffect } from "react";

export default function Getrequest() {
  // function
  const [data, setData] = useState([]);
  const fetchData = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        ` Error from url: ${url}. Erorr status is ${response.status}   `
      );
    } else {
      return await response.json();
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

  const onClickHandler = () => {
    console.log("Click");
  };
  // rendering to DOM
  return (
    <div>
      <div
        className="get-data py-2 d-flex flex-column align-items-center"
        id="get-data"
      >
        <p>
          Here we might to get data from server.
          <br />
          Push the Get button to check this out!
        </p>
        <textarea cols="24" rows="1" className="mx-2">
          waiting for response ...
        </textarea>
        <button
          onClick={onClickHandler}
          className="btn btn-outline-info mt-2 px-5 "
        >
          Get
        </button>
      </div>
    </div>
  );
}
