import React, { useState } from "react";
import axios from "axios";

export default function Postrequest() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [post, setPost] = useState({});
  const inputHandler = (event) => {
    setPost(...post, [event.target.name]);
  };
  const postData = axios
    .post(url, {})
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div>
      <form className="form">
        <p>
          Here we might to push our data to server.
          <br />
          Type something in input area and push the Submit button.
        </p>
        <input
          type="text"
          name="dataFromReact"
          onChange={inputHandler}
          className="m-2"
        />
        <button className="btn btn-outline-info mt-2 px-5 " onClick={postData}>
          Post
        </button>
      </form>
    </div>
  );
}
