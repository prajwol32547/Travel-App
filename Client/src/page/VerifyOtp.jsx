import React from "react";
import LogoBar from "../component/LogoBar";
import LoginHeader from "../component/loginHeader";
import VerifyOtpForm from "../component/VerifyOtpForm";

function VerifyOtp() {
	return (
		<div className="container-fluid m-0 p-0">
			<LoginHeader />
			<LogoBar />
			<br />
			<VerifyOtpForm />
		</div>
	);
}

export default VerifyOtp;
