import React from "react";

import './ErrorModel.css';

const ErrorModel = props => {

    return(
        <div className="backdrop">
            <div className="modal" onClick={props.onConfirm}>
                <header>
                    <h2>{props.title}</h2>
                </header>
                <div>
                    <p>{props.message}</p>
                </div>
                <footer>
                    <button>OK</button>
                </footer>
            </div>
        </div>
    );
};

export default ErrorModel;