import React from "react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";

function Admin() {
	return (
		<div className="container-fluid bg-success p-0 m-0">
			<Navbar />
			<Sidebar />
		</div>
	);
}

export default Admin;
