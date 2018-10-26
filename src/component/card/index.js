import React from "react";

const PropTypes = require('prop-types');

const Card = (props) => {
  let titleStyle = props.title ? { fontWeight: 600, paddingTop: "8px", paddingLeft: "8px" } : null
  let bodyStyle = props.title ? { marginTop: "-28px"} : null
  return (
    <div className="mcard" style={{ backgroundColor: "#ffffff", margin: "12px", boxShadow: "1px 1px 2px #a1a1a1" }}>
      <div className="mcard-header" style={titleStyle}>{props.title}</div>
      <div className="mcard-body" style={bodyStyle}>
        {props.children}
      </div>
    </div>
  )
};

Card.propTypes = { children: PropTypes.object, title: PropTypes.string }

export default Card;  