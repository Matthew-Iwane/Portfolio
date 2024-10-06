import "../components/error/module.ErrorPage.css"
import sad_gif from "../assets/gifs/sad.gif"
// import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  // const error = useRouteError();
  // console.error(error);

  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>I never created the page you are looking for!</p>
      <img src={sad_gif} alt="crying marshmallow" id="sad-marshmallow"/>

    </div>
  );
}