import React, { FC } from "react";
import { useNavigate } from 'react-router-dom';
import autobahnLogo from '../../assets/Autobahn_Security_Logo.svg'

interface MainLayoutAttributes {
	children: React.ReactNode
}

const MainLayout: FC<MainLayoutAttributes> = ({ children }) => {
	const navigate = useNavigate();
	return (
		<div className=" w-full min-h-screen">
			<div className="fixed flex items-center inset-x-0 top-0 h-20 bg-neutral-100">
				<div className="flex items-center justify-between container">
					<a href="/">
						<img src={autobahnLogo} alt="logo" className=" h-20 w-auto" />
					</a>
					<nav>
						<ul className=" flex gap-x-5">
							<li>
								<div onClick={() => navigate("/auth/login")} className=" cursor-pointer text-menu-label transition-all hover:text-link-color text-lg font-medium">
									<span>Login</span>
								</div>
							</li>
							<li>
								<div onClick={() => navigate("/auth/register")} className=" cursor-pointer text-menu-label transition-all hover:text-link-color text-lg font-medium">
									<span>Register</span>
								</div>
							</li>
						</ul>
					</nav>
				</div>
			</div>
			<main>
				{children}
			</main>
		</div>
	);
};

export default MainLayout;