import React from "react";
import { userContext } from "./context";

export default class Header2 extends React.Component {
  static contextType = userContext;

  render() {
    const [ user, setUser ] = this.context;

    const headerStyle = {
      backgroundColor: "#cee",
      textAlign: "center",
      padding: 5,
    };

    const onClickSignin = (event) => {
      event.preventDefault();
      setUser("SsunN");
    };

    const onClickSignout = (event) => {
      event.preventDefault();
      setUser("");
    };

    return (
      <div style={headerStyle}>
        <a href="/">Home&nbsp;&nbsp;</a>
        <a href="/product">Product&nbsp;&nbsp;</a>
        <a href="/contact">Contact Us&nbsp;&nbsp;</a>

        {user ? (
          <span>
            {user}&nbsp;
            <a href=" " onClick={onClickSignout}>
              Signout
            </a>
          </span>
        ) : (
          <span>
            <a href=" " onClick={onClickSignin}>
              Signin
            </a>
          </span>
        )}
      </div>
    );
  }
}
