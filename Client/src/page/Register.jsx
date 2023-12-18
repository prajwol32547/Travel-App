import React from "react";
import RegisterForm from "../component/RegisterForm";
import LoginHeader from "../component/loginHeader";
import LogoBar from "../component/LogoBar";

function Register() {
	return (
		<div className="container-fluid m-0 p-0">
			<LoginHeader />
			<LogoBar />
			<RegisterForm />
		</div>
	);
}

export default Register;
