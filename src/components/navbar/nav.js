import React from "react";
const Nav = props => 
<nav>
<div className="nav-wrapper #1565c0 blue darken-3">
  <div className="brand-logo"> Clicky App</div>
  <ul id="nav-mobile" className="right hide-on-med-and-down">
  </ul>
</div>
{props.children}
</nav>

export default Nav;