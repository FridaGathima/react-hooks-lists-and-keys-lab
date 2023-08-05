import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkCards = links.map((linkObj, index) => (
    <a key = {index} href={linkObj}>{linkObj}</a>
  ))

  // return <nav>{/* display an <a> tag for each link here */}</nav>;
  return <nav>
    {linkCards}
  </nav>
}

export default NavBar;
