import React from "react";
import { useNavigate } from "react-router-dom";

function ServiceCard(props) {
	const navigate = useNavigate();

	return (
		<div
			className="container border bg-light "
			style={{ maxWidth: "300px", maxHeight: "200px" }}
			onClick={() => navigate("catalogue")}
		>
			<div className="row">
				<p className="font-weight-bold mx-auto">{props.title}</p>
			</div>
			<div className="row">
				<div className="col-md-8">
					<p className="text-wrap text-truncate">{props.description}</p>
				</div>
				<div className="col-md-4">
					<img src={props.image} alt="" width={50} height={50} />
				</div>
			</div>
		</div>
	);
}

export default ServiceCard;
