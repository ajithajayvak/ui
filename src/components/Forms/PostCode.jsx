import AddressSelectBox from "./AddressSelectBox";
import AddressTextField from "./AddressTextField";
import InputButton from "./InputButton";

const PostCode = () => {
  return (
    <div className="insideform">
      <div className="insideHead">
        <span className="insidetext">PERSONAL INFORMATION GUARANTEE</span>
        <div className="textfilds">
          <AddressTextField
            type="text"
            placeholder="Your Postcode"
            name="txtPostCode"
            id="txtPostCode"
            className="btns"
          />
        </div>
        <div className="textfilds" style={{ display: "none" }}>
          <InputButton
            name="next"
            className="btns"
            value="Lookup Address"
            btnType="button"
          />
        </div>
        <div className="textfilds">
          <AddressSelectBox
            className="btns"
            // OptionValue={state.getAddress}
            name="address1"
            id="address1"
          />
        </div>

        <div className="onlybtn">
          <input type="button" className="btnsArea1" value="< Back" />
          <input type="button" className="btnsArea2" value="NEXT" />
        </div>
        <div className="btnsArea">
          <h6>PERSONAL INFORMATION GUARANTEE</h6>
          <p>We do not cold call, spam or pass on your data for marketing</p>
        </div>
      </div>
    </div>
  );
};

export default PostCode;
