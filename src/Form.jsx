import React from "react";
import download from "../src/images/download.png";
import SignatureCanvas from "react-signature-canvas";
function Form() {
  return (
    <div className="containerr">
      <div className="tests">
        <p>
          Finally, we need your electronic signature below to proceed. Please
          note that your electronic signature will be included on all forms we
          submit to your lender
        </p>
      </div>
      <div className="testArea">
        <ul>
          <li>
            <img src={download} /> Sign using your finger, mouse or stylus
          </li>
          <li>
            <img src={download} /> Keep it fully contained within the box
          </li>
          <li>
            {" "}
            <img src={download} /> Ensure it is a true likeness of your
            signature
          </li>
        </ul>
      </div>
      <div className="sign">
        <SignatureCanvas
          penColor="green"
          canvasProps={{ width: 750, height: 300, className: "sigCanvas" }}
        />
      </div>
      <div className="privacy">
        <div className="check">
          <input className="che" type="checkbox" />
        </div>
        <div className="pars">
          <label className="para">
            By signing and by pressing “Submit” below, you agree to ClaimLion's
            Privacy Policy and that we may use your signature on the Letter of
            Authority that we send to your bank. A copy of the Privacy Policy,
            Letter of Authority, Witness Statement and Statement of Truth will
            be sent to you via email.
          </label>
        </div>
      </div>
      <div className="butt">
        <button className="cl">CLEAR</button>
        <button className="sub">SUBMIT</button>
      </div>
    </div>
  );
}

export default Form;
