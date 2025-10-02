"use client"

import { useRouter } from "next/navigation";
import SignForm from "../component/signForm";
import { DASHBOARD_URL } from "@/constants/constants.path";
import { LoginT } from "@/app/zodObject";

 const SignIn = () => {
	const router = useRouter();
	const onSubmit = (data: LoginT) => {
		console.log(data);
		router.push(DASHBOARD_URL);
	};
	return (
		<div>
			<SignForm isLogin={true} handleOnSubmit={onSubmit} />
		</div>
	);
  };

  export default SignIn;