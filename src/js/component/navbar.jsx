import React from "react";
export const Navbar = () =>{
    return(
        <div className="container">
		<nav id="Navbar" className="navbar navbar-expand-lg bg-dark p-2">
		<div className="container">
		  <a className="navbar-brand text-light ms-5" href="https://getbootstrap.com/docs/5.3/getting-started/download/"
                  onMouseOver={(e) => (e.target.style.color = "white")}
                  onMouseOut={(e) => (e.target.style.color = "gray")}><b>Start Bootstrap</b></a>
		  <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
			<ul className="navbar-nav me-5">
			  <li className="nav-item">
				<a className="nav-link active text-light hover-link" aria-current="page"  href="https://getbootstrap.com/"
                  onMouseOver={(e) => (e.target.style.color = "white")}
                  onMouseOut={(e) => (e.target.style.color = "gray")}><b>Home</b></a>
			  </li>
			  <li className="nav-item">
				<a className="nav-link text-light" href="https://getbootstrap.com/docs/5.3/getting-started/introduction/"
                  onMouseOver={(e) => (e.target.style.color = "white")}
                  onMouseOut={(e) => (e.target.style.color = "gray")}><b>About</b></a>
			  </li>
			  <li className="nav-item">
				<a className="nav-link text-light" href="https://icons.getbootstrap.com/"
                  onMouseOver={(e) => (e.target.style.color = "white")}
                  onMouseOut={(e) => (e.target.style.color = "gray")}><b>Services</b></a>
			  </li>
			  <li className="nav-item">
				<a className="nav-link text-light"  href="https://themes.getbootstrap.com/" 
                   onMouseOver={(e) => (e.target.style.color = "white")}
				   onMouseOut={(e) => (e.target.style.color = "gray")}><b>Contact</b></a>
			  </li>
			</ul>
		  </div>
		</div>
	  </nav>
    </div>
    )
}