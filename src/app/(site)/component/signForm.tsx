'use client'
import { useForm,SubmitHandler } from "react-hook-form";
import { LoginT,loginSchema,signupSchema,SignupT } from "@/app/zodObject";
import { zodResolver } from "@hookform/resolvers/zod";
import { SIGN_IN_URL, SIGN_UP_URL } from "@/constants/constants.path";

type formType = SignupT | LoginT;
type SignFormProps = {
    isLogin: boolean;
	handleOnSubmit: (data: formType) => void;
}

const SignForm = ({ isLogin, handleOnSubmit }: SignFormProps) => {
    const schema = isLogin ? loginSchema : signupSchema;
	const { register, handleSubmit, formState: { errors } } = useForm<formType>({
		resolver: zodResolver(schema)
	});

	const onSubmit: SubmitHandler<formType> = (data) => {
		console.log(data);
		handleOnSubmit(data);
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-primaryColor to-lightColor">
			<div className="bg-lightColor p-8 rounded shadow-md w-full max-w-md">
				<h2 className="text-2xl font-bold mb-6 text-center">{isLogin ? 'Sign In' : 'Sign Up'}</h2>
				<form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
					<div>
						<label className="block text-sm font-medium text-darkColor">Email</label>
						<input
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primaryColor focus:border-primaryColor"
							placeholder="Enter your email"
							{...register("email")}
						/>
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
					</div>
					<div>
						<label className="block text-sm font-medium text-darkColor">Password</label>
						<input
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primaryColor focus:border-primaryColor"
							placeholder="Enter your password"
							{...register("password")}
						/>
						{errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
					</div>
					<button
						type="submit"
						className="w-full py-2 px-4 bg-gradient-to-r from-primaryColor to-secondaryColor text-lightColor font-medium rounded-lg shadow-md hover:opacity-90 transition"
					>
						{isLogin ? 'Sign In' : 'Sign Up'}
					</button>
					<div className="mt-4 text-center">
						<p className="text-sm text-darkColor">
							{isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
							<a href={isLogin ? SIGN_UP_URL : SIGN_IN_URL} className="text-primaryColor font-medium hover:underline">
								{isLogin ? 'Sign Up' : 'Sign In'}
							</a>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignForm;