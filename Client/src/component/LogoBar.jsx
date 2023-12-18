import React from "react";
import img1 from "../assets/logo.png";

function LogoBar() {
	return (
		<div className="container-fluid bg-light">
			<img src={img1} alt="" style={{ maxWidth: "300px", maxHeight: "90px" }} />
		</div>
	);
}

export default LogoBar;
