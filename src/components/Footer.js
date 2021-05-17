import React from "react";

function Footer() {
  return (
    <div className="ui inverted vertical footer segment">
      <div id="footer-left">
        <h5>Made With Love By Himanshu Dhiman</h5>
      </div>
      <div id="footer-right">
        <a href="https://github.com/himdhiman">
          <i className="github icon" id="footer-icon"></i>
        </a>
        <a href="https://www.linkedin.com/in/himanshu-dhiman-229020b5/">
          <i className="linkedin icon" id="footer-icon"></i>
        </a>
        <a href="https://www.facebook.com/himanshu.dhiman.313/">
          <i className="facebook icon" id="footer-icon"></i>
        </a>
        <a href="https://www.instagram.com/__himanshu_dhiman__/">
          <i className="instagram icon" id="footer-icon"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
