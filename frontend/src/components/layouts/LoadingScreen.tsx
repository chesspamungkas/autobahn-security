import React, { FC } from "react";
import autobahnLogo from '../../assets/Autobahn_Security_Logo.svg';

const LoadingScreen: FC = () => {
	return (
		<div className=" w-screen h-screen flex justify-center items-center">
			<img src={autobahnLogo} alt="logo" className=" animate-bounce" />
		</div>
	)
}

export default LoadingScreen