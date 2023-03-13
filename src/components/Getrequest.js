import React, { useState } from "react";
import axios from "axios";

export default function Getrequest() {
  // function
  const url = "https://api.adviceslip.com/advice";
  const [data, setData] = useState("");
  const getData = () => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data.slip.advice);
        setData(response.data.slip.advice);
      })
      .catch((error) => console.log(error));
  };
  // rendering to DOM
  return (
    <div>
      <div
        className="get-data d-flex flex-column py-5 align-items-center"
        id="get-data"
      >
        <p>
          Here we might to get data from server.
          <br />
          Push the Get button to check this out!
        </p>

        <div className="mx-2 ">
          <div>
            {data ? (
              <p>{data}</p>
            ) : (
              <p className="small">here response will appear...</p>
            )}
          </div>
        </div>
        <button className="btn btn-outline-info mt-2 px-5 " onClick={getData}>
          Get
        </button>
      </div>
    </div>
  );
}
