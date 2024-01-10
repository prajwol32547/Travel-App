import React from "react";
import BookingField from "../component/BookingField";
import DisplayImage from "../component/DisplayImage";
import Properties from "../component/Properties";
import { useParams } from "react-router-dom";

function Display() {
	const { id } = useParams();
	console.warn(document.cookie);

	return (
		<div className="container-fluid m-0 p-0">
			<DisplayImage />
			<br />
			<BookingField id={id} />
			<Properties />
		</div>
	);
}

export default Display;
