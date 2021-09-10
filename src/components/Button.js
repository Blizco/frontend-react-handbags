import React from "react";


function Button({ turnedOff, buttonText }) {
    return (
        <button type="button"
                disabled={turnedOff}
                onClick={() => console.log(buttonText)}>
            {buttonText}
        </button>
    );
}

export default Button;