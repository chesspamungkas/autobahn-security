import React, { FC, useState } from "react";
import { CustomInput } from "../../components/input";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { MainLayout } from "../../components/layouts";
import InputValidation from "../../helpers/InputValidation";
import autobahnLogo from '../../assets/Autobahn_Security_Logo.svg';
import Http from "../../helpers/Fetch";
import AuthUser from "../../helpers/AuthUser";
import AuthAttributes from "../../interface/AuthUserInterface";

interface DataLogin {
	email?: string | null,
	password?: string | null
}

const Login: FC = () => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState<boolean>(false);
	const [data, setData] = useState<DataLogin>({
		email: '',
		password: '',
	});

	const [errData, setErrData] = useState<DataLogin>({
		email: '',
		password: ''
	});


	/* ------------------------------ OnChange Data ----------------------------- */
	const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();

		const { name, value } = e.target;

		let strErr = ""
		if (name === "email") {
			strErr = InputValidation.EmailValidation(value, 100, "Email", true);
		}
		if (name === "password") {
			strErr = InputValidation.PasswordValidation(value, 4, 12, "Password", true);
		}

		setErrData({
			...errData,
			[name]: strErr
		});

		setData({
			...data,
			[name]: value
		});
	};
	/* ------------------------------ End OnChange ------------------------------ */

	/* -------------------------------- OnSubmit -------------------------------- */
	const onSubmit = async () => {
		const valid = onValidation();
		if (valid) {
			setLoading(true)
			try {
				const response = await Http.post("/user/login", data, { withCredentials: true });
				const responseData: AuthAttributes = {
					id: response.data?.data?.id,
					name: response.data?.data?.name,
					email: response.data?.data?.email,
					roleId: response.data?.data?.roleId,
					token: response.data?.data?.token,
					menuAccess: response.data?.data?.menuAccess,
				}
				setData({
					...data,
					email: "",
					password: ""
				});

				AuthUser.SetAuth(responseData);
				setLoading(false);
				navigate("/dashboard");
			} catch (error:any) {
				Swal.fire({
					icon: "error",
					text: "Invalid Credentials",
					title: "Oops!!",
					confirmButtonColor: "#ff4d00",
				})
				setLoading(false)
			}
		}
	};
	/* ------------------------------ End OnSubmit ------------------------------ */

	/* ------------------------------ On Validation ----------------------------- */
	const onValidation = (): boolean => {
		const tempValidation: DataLogin = {
			email: InputValidation.EmailValidation(data.email, 100, "Email", true),
			password: InputValidation.PasswordValidation(data.password, 4, 12, "Password", true)
		};

		setErrData(tempValidation);

		for (var key in tempValidation) {
			if ((tempValidation as any)[key] !== "") {
				return false;
			}
		}
		return true;
	};
	/* ---------------------------- End On Validation --------------------------- */

	return (
		<MainLayout>
			<div className="min-h-screen bg-secondary flex flex-col justify-center">
				<div className="max-w-sm w-full mx-auto bg-white p-8 border border-gray-300">
					<div className="text-3xl font-bold text-gray-900 flex flex-col justify-center items-center">
						<img src={autobahnLogo} width="250" height="auto" alt="Autobahn Security"/>
					</div>
					<div className="space-y-6">
						<div>
							<CustomInput
								name="email"
								label="Email"
								placeholder="email"
								required={true}
								type="email"
								value={data.email ?? ''}
								error={errData.email}
								onChange={onChange}
							/>
							{/* <input type="text" placeholder="email" className="w-full p-2 border border-gray-300 rounded mt-1" /> */}
						</div>
						<div className='mb-3'>
							<CustomInput
								name="password"
								label="Password"
								placeholder="password"
								required={true}
								type="password"
								value={data.password ?? ''}
								error={errData.password}
								onChange={onChange}
							/>
							{/* <input type="password" placeholder="password" className="w-full p-2 border border-gray-300 rounded mt-1" /> */}
						</div>
						<div className="flex justify-between items-center">
							<p className="">Don't have account ? <span
								className=" text-secondary-50 cursor-pointer hover:text-link-color"
								onClick={() => navigate("/auth/register")}>Signup</span></p>
							{/* <button onClick={onSubmit} className=" btn btn-primary normal-case">Login</button> */}
						</div>
						<div>
							<button onClick={onSubmit} className="py-2 px-6 bg-green-600 hover:bg-link-color rounded-md text-white text-bg">Login</button>
							{/* <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-bg">Login</button> */}
						</div>
						{/* <div className="flex items-center justify-between">
							<div className="flex items-center">
								<input type="checkbox" className="h-4 w-4 text-blue-300 rounded" />
								<label className="ml-2 text-sm text-gray-600">
									Remember me
								</label>
							</div>
							<div>
								<a href='#' className="font-medium text-sm text-blue-500">Forgot Password?</a>
							</div>   
						</div>
						<div>
							<button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-bg">Login</button>
						</div>
					
						<div className="mt-4 text-center5">
							Don't have an account yet? <span className='text-blue-700 cursor-pointer'>Sign-up</span>
						</div> */}
					</div>
				</div>		
			</div>
		</MainLayout>
	)
};

export default Login;