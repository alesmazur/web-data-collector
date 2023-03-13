import logo from "../assets/logo.svg";
import javalogo from "../assets/java.svg";

export default function Logo() {
  return (
    <div>
      <img src={logo} className="App-logo" />
      <img src={javalogo} className="App-logo--java" />
    </div>
  );
}
