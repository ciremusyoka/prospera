"use client"
import { SignupT } from "@/app/zodObject";
import SignForm from "../component/signForm";
import { useRouter } from "next/navigation";
import { SIGN_IN_URL } from "@/constants/constants.path";

 const Signup = () => {
	const router = useRouter();
	const onSubmit = (data: SignupT) => {
		console.log(data);
		router.push(SIGN_IN_URL);
	};
	
	return (
		<div>
			<SignForm isLogin={false} handleOnSubmit={onSubmit} />
		</div>
	);
  };
  
  export default Signup;