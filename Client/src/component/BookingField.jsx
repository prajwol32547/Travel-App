import React from "react";
import { postRequest } from "../Atom/AxiosReq";
const bookingRequest = (id) => {
	postRequest("http://localhost:4000/booking/hotelbook", {
		id: id,
		fromDate: document.getElementById("from_book").value,
		toDate: document.getElementById("to_book").value,
		email: "prajwol@gmail.com",
	});
};

function BookingField(props) {
	return (
		<div className="bg-light p-3">
			<div className="d-flex flex-column flex-md-row justify-content-around mt-4">
				<div>
					<label htmlFor="">From</label>
					<br />
					<input type="date" id="from_book" placeholder="date" />
				</div>
				<div>
					<label htmlFor="">To</label>
					<br />
					<input type="date" id="to_book" placeholder="date" />
				</div>

				<div>
					<label htmlFor="">Select Room</label>
					<br />
					<select className="custom-select" style={{ maxWidth: "300px" }}>
						<option selected>Open this select menu</option>
						<option value="1">One</option>
						<option value="2">Two</option>
						<option value="3">Three</option>
					</select>
				</div>
			</div>

			<div className="container text-center mt-5">
				<input
					type="button"
					className="btn-success btn-md text-white text-center"
					value="Book Now"
					onClick={() => bookingRequest(props.id)}
				/>
			</div>
		</div>
	);
}

export default BookingField;
