import Plus from "../assets/plus.svg";

const ToggleButton = (props) => {
    const {
        text,
        onClick
    }=props;
  return (
    <div className="ToggleButton" onClick={onClick}>
        <div className="buttonbody">
            <span>
                <img src={Plus} alt="" />
            </span>
            <span>
                {text}
            </span>
        </div>
    </div>
  );
};

export default ToggleButton;