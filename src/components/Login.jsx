import React, { useRef, useState } from "react";
import Header from "./Header";
import { LoginValidation } from "./utils/validation";

const Login = () => {
	const [isSignInForm, setIsSignInForm] = useState(true);
	const [errMessage, setErrMessage] = useState(null);
	const name = useRef(null);
	const email = useRef(null);
	const password = useRef(null);

	const handleSubmit = () => {
		const validation = LoginValidation(
			name?.current?.value,
			email?.current?.value,
			password?.current?.value,
			isSignInForm
		);
		setErrMessage(validation);
	};
	console.log(errMessage);
	return (
		<div className="relative">
			<Header />
			<div>
				<img
					src="https://assets.nflxext.com/ffe/siteui/vlv3/aad37504-bbe0-407d-b8a8-fb31b8faf374/web_tall_panel/IN-en-20241028-TRIFECTA-perspective_2f496d82-4466-44ef-b581-9d69138a2914_large.jpg"
					alt="logo"
				/>
			</div>
			<div className="absolute top-0 w-full h-[100vh] flex justify-center items-center">
				<form
					className="bg-black text-white w-3/12 p-14 bg-opacity-70"
					onSubmit={(e) => e.preventDefault()}
				>
					<h1 className="font-bold text-2xl rounded-sm">
						{isSignInForm ? "Sign In" : "Sign Up"}
					</h1>
					{!isSignInForm && (
						<input
							type="text"
							className={"w-full mt-4 p-3 rounded-sm bg-transparent border border-gray-500 " + (errMessage?.field == "name" ? "border-red-500" : "border-gray-500")}
							placeholder="Enter Name"
							ref={name}
						/>
					)}
					{errMessage?.field === "name" && (
						<p className="font-bold text-red-700 mt-2 text-xs">{errMessage?.message}</p>
					)}
					<input
						type="text"
              className={
                "w-full mt-4 p-3 rounded-sm bg-transparent border " + (errMessage?.field == "email" ? "border-red-500" : "border-gray-500")
              }
						placeholder="Enter Email Address"
						ref={email}
					/>
					{errMessage?.field === "email" && (
						<p className="font-bold text-red-700 mt-2 text-xs">{errMessage?.message}</p>
					)}
					<input
						type="password"
						className={"w-full mt-4 p-3 rounded-sm bg-transparent border border-gray-500 "+ (errMessage?.field == "password" ? "border-red-500" : "border-gray-500")}
						placeholder="Enter Password"
						ref={password}
					/>
					{errMessage?.field === "password" && (
						<p className="font-bold text-red-700 mt-2 text-xs">{errMessage?.message}</p>
					)}
					<button
						className="p-3 mt-4 w-full bg-red-600 rounded-sm"
						onClick={handleSubmit}
					>
						{isSignInForm ? "Sign In" : "Sign Up"}
					</button>
					<p
						className="mt-4 text-sm cursor-pointer"
						onClick={() => setIsSignInForm(!isSignInForm)}
					>
						{isSignInForm
							? "New to Netflix? Sign up now."
							: "Already Registered Sign in now."}
					</p>
				</form>
			</div>
		</div>
	);
};

export default Login;
