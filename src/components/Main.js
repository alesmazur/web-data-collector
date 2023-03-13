import Getrequest from "./Getrequest";
import Postrequest from "./Postrequest";

export default function Main() {
  return (
    <main className="main text-center">
      <div className="container">
        <Getrequest />
        <hr />
        <Postrequest />
      </div>
    </main>
  );
}
