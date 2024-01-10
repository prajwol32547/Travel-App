import React, { useState } from "react";
import HotelData from "../assets/HotelData";
import RentCard from "./RentCard";
import { useNavigate } from "react-router-dom";

function HotelList() {
	const navigate = useNavigate();

	const handleDisplay = (data) => {
		navigate(`/display/${data}`);
	};

	return (
		<>
			{HotelData.map((currEle) => (
				<RentCard
					key={currEle.id} // Add a key prop for each mapped element
					image={currEle.image}
					description={currEle.description}
					title={currEle.title}
					review={currEle.review}
					func={() => handleDisplay(currEle.id)} // Pass a function reference
				/>
			))}
		</>
	);
}

export default HotelList;
