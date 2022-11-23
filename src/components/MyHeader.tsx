import React from "react";

// import styles from "../styles/components/MyHeader.module.scss"
// import "../styles/components/MyHeader.scss";

function MyHeader() {
    return (
      <div className="MyHeader">
        <ul>
          <li>
            <div>PROJECT</div>
          </li>
          <li>
            <div>A PROPOS</div>
          </li>
          <li>
            <div>CONTACT</div>
          </li>
          <li>
            <div>BOUTIQUE</div>
          </li>
          <li>
            <div><div className="Dot"></div></div>
          </li>
        </ul>
      </div>
    );
}

export default MyHeader;