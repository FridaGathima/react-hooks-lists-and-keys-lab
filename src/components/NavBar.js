import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  // return <nav>{/* display an <a> tag for each link here */}</nav>;
  return <nav>
    {links.map((linkObj, index) => (
    <a key = {index} href={`#${linkObj}`}>{linkObj}</a>
  ))}
  </nav>
}

export default NavBar;
