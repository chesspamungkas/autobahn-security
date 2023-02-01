import { FC } from "react";
import Http from "../helpers/Fetch";
import AuthUser from "../helpers/AuthUser";
import { AuthLayout, SectionMain, CardBox, Issues } from "../components/layouts";

const Dashboard: FC = () => {
	const user = AuthUser.GetAuth();

	return (
		<AuthLayout>
			<div className="w-auto mt-10 bg-gradient-to-r p-[3px] from-[#ff0000] via-[#012619] to-[#3EC3DC] mx-10">
				<div className="flex flex-col justify-between h-full bg-gray-100 p-4">
					<SectionMain>
						<div className="grid grid-cols-1 gap-16 lg:grid-cols-2 mb-6">
							<CardBox>
								<p className="text-2xl font-semibold">System Score</p>
								<div className="bg-white flex flex-col dark:bg-slate-900/70">
									<div className="p-16 flex justify-center items-center">
										<p className="text-6xl">1000</p>
									</div>
								</div>
							</CardBox>
							<CardBox>
								<p className="text-2xl mb-2 font-semibold">System Score Changes</p>
								<div className="bg-white flex flex-col dark:bg-slate-900/70">
									<div className="p-16 flex justify-center items-center">
										<p className="text-6xl">10%</p>
									</div>
								</div>
							</CardBox>
						</div>
						<div className="grid grid-cols-1 gap-16 lg:grid-cols-1 mb-6">
							<CardBox>
								<p className="text-2xl mb-2 font-semibold">Issues</p>
								<div className="bg-white flex flex-col dark:bg-slate-900/70">
									<div className="p-20 flex justify-center items-center">
										<Issues/>
									</div>
								</div>
							</CardBox>
						</div>
						</SectionMain>
				</div>
			</div>
			{/* <div className="">
				<p>Ini Dashboard</p>
				<button onClick={GetCurrentUser} className="btn btn-primary normal-case">Get Current User</button>
			</div> */}
		</AuthLayout>
	)
}

export default Dashboard;