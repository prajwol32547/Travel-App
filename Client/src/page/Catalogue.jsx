import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import CatalgueInner from "../component/CatalgueInner";

function Catalogue() {
	return (
		<div className="container-fluid m-0 p-0">
			<div className="container-fluid bg-success m-0 p-0">
				<Navbar />

				<form
					className="form-group mx-auto"
					style={{ maxWidth: "400px", marginBottom: "20px" }}
				>
					<div className="row no-gutters ">
						<div className="col-md-9 ">
							<input type="text" className="form-control bg-light" />
						</div>
						<div className="col-md-3 ">
							<input
								type="button"
								className="form-control btn-success border w-100"
								value="search"
							/>
						</div>
					</div>
					<br />
				</form>
			</div>

			<CatalgueInner />

			<Footer />
		</div>
	);
}

export default Catalogue;
