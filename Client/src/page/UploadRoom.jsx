import React, { useRef } from "react";
import { postRequest } from "../Atom/AxiosReq";
function UploadRoom() {
	const ref = useRef({});

	const uploadData = (e) => {
		e.preventDefault();

		console.log(ref.current["Images"].files[0]);
		const Roomid = ref.current["Roomid"].value;
		const description = ref.current["Description"].value;
		const image = ref.current["Images"].files[0]; // Access file object
		const type = ref.current["RoomNo"].value;
		console.log(image);
		const formData = new FormData(); // Create FormData object
		formData.append("Roomid", Roomid);
		formData.append("Description", description);
		formData.set("Images", image); // Append file object
		formData.append("RoomNo", type);

		console.log(formData);

		const upload = postRequest(
			"http://localhost:4000/admin/roomUpload",
			formData
		);
	};

	return (
		<div className="bg-white min-vh-100 m-auto">
			<h1 className="d-flex justify-content-center mb-4">
				Insert Room Details
			</h1>
			<form className="p-4 mx-5" method="post" encType="multipart/form-data">
				<div className="row my-5">
					<label className="form-label col-sm-6">RoomId</label>
					<input
						type="text"
						ref={(el) => (ref.current["Roomid"] = el)}
						className="form-control col-sm-6"
					/>
				</div>
				<div className="row my-5">
					<label className="form-label col-sm-6">Description</label>
					<input
						type="text"
						ref={(el) => (ref.current["Description"] = el)}
						className="form-control col-sm-6"
					/>
				</div>
				<div className="row my-5">
					<label className="form-label col-sm-6">Images</label>
					<input
						type="file"
						ref={(el) => (ref.current["Images"] = el)}
						className="form-control col-sm-6"
					/>
				</div>
				<div className="row my-5">
					<label className="form-label col-sm-6">Room No</label>
					<input
						type="text"
						ref={(el) => (ref.current["RoomNo"] = el)}
						className="form-control col-sm-6"
					/>
				</div>
				<div className="row d-flex justify-content-center mt-4">
					<button className="btn-lg btn-success" onClick={uploadData}>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}

export default UploadRoom;
