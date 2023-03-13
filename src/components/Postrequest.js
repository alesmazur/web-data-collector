export default function Postrequest() {
  return (
    <div>
      <form
        className="form
        py-2 d-flex flex-column align-items-center"
      >
        <p>
          Here we might to push our data to server.
          <br />
          Type something in input area and push the Submit button.
        </p>
        <input type="text" className="m-2" />
        <input
          type="submit"
          value="Submit"
          className="btn btn-outline-info ml-5 px-5"
        />
      </form>
    </div>
  );
}
