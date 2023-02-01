import React, { FC } from "react";
import AuthUser from "../../helpers/AuthUser";
import { Link } from "react-router-dom";
import autobahnLogo from '../../assets/Autobahn_Security_Logo.svg';

interface SidebarProps {
	open: boolean,
	closeMenu: () => void,
	logout: () => void
}

const Sidebar: FC<SidebarProps> = ({open, closeMenu, logout}) => {
	const user = AuthUser.GetAuth();

	return (
		<div className={`fixed w-full lg:w-64 bg-white h-screen transform transition-all duration-300 z-20 lg:translate-x-0 overflow-y-auto ${open ? 'translate-x-0' : '-translate-x-full'}`}>
			<div className="flex flex-col justify-center items-center">
				<img src={autobahnLogo} width="150" height="auto" alt="Autobahn Security"/>
			</div>
			<div className="pt-10">
				{
					user?.menuAccess?.map((item, index) =>
						<div key={'menu' + index} className="px-4">
							<p>{item?.name}</p>
							{
								item?.Submenus?.map((sub:any, idx:any) =>
									<div key={"sub"+idx} className="px-4">
										<Link to={sub?.url}>{sub?.name}</Link>
									</div>
								)
							}
						</div>
					)
				}
				
				<div className="absolute flex cursor-pointer inset-x-0 bottom-0 py-3 border-blue-600 dark:border-blue-500 ring-blue-300 dark:ring-blue-700 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 hover:border-blue-700 hover:dark:bg-blue-600 hover:dark:border-blue-600">
					<button className="px-4" onClick={logout}>Logout</button>
				</div>
			</div>
		</div>
	)
};

export default Sidebar;