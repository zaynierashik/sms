import { Link } from 'react-router-dom';
import AuthLayout from './AuthLayout';

export default function Login() {
    return (
		<>
			<AuthLayout>
				<div className="mb-10">
					<h1 className="text-4xl font-bold">Login to your account.</h1>
				</div>
				
				<form>
					<div className="space-y-4">
						<div>
							<label className="mb-1 block text-base font-medium" htmlFor="role">Role</label>
							<select id="role" className="form-input w-full">
								<option value="">Select a role</option>
								<option value="admin">Admin</option>
								<option value="teacher">Teacher</option>
							</select>
						</div>
						<div>
							<label className="mb-1 block text-base font-medium" htmlFor="email">Email</label>
							<input id="email" className="form-input w-full p-2.5" type="email" placeholder="johndoe@example.com"/>
						</div>
						<div>
							<label className="mb-1 block text-base font-medium" htmlFor="password">Password</label>
							<input id="password" className="form-input w-full p-2.5" type="password" autoComplete="on" placeholder="••••••••"/>
						</div>
					</div>
					<div className="mt-11">
						<Link to="/after-auth" className="btn w-full cursor-pointer bg-linear-to-t from-gray-900 to-gray-700 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]">
							Login
						</Link>
					</div>
				</form>

				{/* <div className="mt-6 text-center">
					<Link to="" className="text-base text-gray-700 transition-all duration-500 hover:text-gray-900">Forgot password?</Link>
				</div> */}
			</AuthLayout>
		</>
    );
}