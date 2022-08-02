import React from 'react';

const Navbar = (props) => {
  return (
        <div class="title-cointainer">
            <img class="logo" alt=""
                src="https://www.clker.com/cliparts/2/d/6/6/12586618121108987169calgarc_Sticker_SVG(inkscape).svg"/>
            <div class="nav-item">
                <span onClick={()=> props.aboutResult()}>about +</span>
            </div>
        </div>
  );
}

export default Navbar;
