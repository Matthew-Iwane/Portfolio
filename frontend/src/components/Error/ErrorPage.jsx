import "./module.ErrorPage.css"
import sad_gif from "../../assets/gifs/sad.gif"

export default function ErrorPage() {
  return (
    <div className="error-page">
      <h1>Uh oh!</h1>
      <p>This page does <span>not</span> exist... check the <span>navigation menu</span> for valid <span>links</span>!</p>
      <img src={sad_gif} alt="crying marshmallow" id="sad-marshmallow"/>

    </div>
  );
}