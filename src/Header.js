import React from "react";
import SignMeUp from "./SignMeUp";

export const Header = () => {
  const signupCallback = email => {
    return console.log(`sign up called with email ${email}`);
  };

  return (
    <div className="jumbotron jumbotronheight">
      <div className="row">
        <div className="col-12 col-sm-4 text-center">
          <h6 className="text-uppercase">May 2020</h6>
          <h6 className="text-uppercase">Oulu, Finland</h6>
        </div>
        <div className="col-12 col-sm-8 text-lg-right">
          <div>
            <img  style={{width:"6%"}} src="https://cdn.pixabay.com/photo/2014/04/02/10/47/red-304573_1280.png" />
          </div>
          <h2>Beautiful places in the world</h2>
          <div className="row col-12 text-lg-right">
            <SignMeUp signupCallback={signupCallback} />
          </div>
        </div>
      </div>
    </div>
  );
};