import React, { FC, useState } from "react";
import AuthUser from "../../helpers/AuthUser";

interface HeaderProps {
	logout: () => void,
	changeOpen: () => void
}

const Header: FC<HeaderProps> = ({logout, changeOpen}) => {
	const user = AuthUser.GetAuth();
	// const res = Http.get("/user/current-user", { headers: { 'Authorization': `Bearer ${user?.token}` } });

	return (
		<div className={`fixed top-0 left-0 lg:left-64 right-0 h-16 bg-secondary flex justify-between items-center`}>
		{/* <div className={`flex lg:items-stretch xl:mx-auto h-16 bg-secondary flex justify-between items-center`}>	 */}
		{/* <div className="flex gap-x-4"> */}
				{/* <button onClick={changeOpen} className=" inline-block lg:hidden">Show</button> */}
				<span className="absolute right-0 py-2 px-8 text-white text-bg">{user?.name}</span>
			{/* </div> */}
			{/* <button className="py-2 px-6 bg-green-600 hover:bg-link-color rounded-md text-white text-bg" onClick={logout}>Logout</button> */}
		</div>
	)
}

export default Header;