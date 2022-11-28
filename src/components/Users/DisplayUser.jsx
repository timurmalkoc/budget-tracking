import React from "react";

import './DisplayUser.css';

const DisplayUser = props =>{


    return(
        <div className="display-user">
            <label>{props.currentUser}'s Expenses</label>
        </div>
    );
};

export default DisplayUser;