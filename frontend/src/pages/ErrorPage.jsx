import "../components/error/module.ErrorPage.css"
import sad_gif from "../assets/gifs/sad.gif"
// import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  // const error = useRouteError();
  // console.error(error);

  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>This page does <span>not</span> exist... check the <span>navigation menu</span> for valid <span>links</span>!</p>
      <img src={sad_gif} alt="crying marshmallow" id="sad-marshmallow"/>

    </div>
  );
}