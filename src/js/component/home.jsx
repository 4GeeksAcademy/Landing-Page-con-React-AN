import React from "react";
import { Cards } from "./Cards";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Footer } from "./Footer";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="Text-center">
			<Navbar/>
			<Jumbotron/>
			<Cards/>
			<Footer/>
			</div>
	);
};

export default Home;
