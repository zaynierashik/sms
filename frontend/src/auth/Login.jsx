import { Link } from 'react-router-dom';
import AuthLayout from './AuthLayout';
import { UserCircleIcon } from '@heroicons/react/16/solid';
import AuthModel from '../../src/assets/auth-model.jpg';

export default function Login() {
    return (
		<AuthLayout>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
				<div className="flex items-center justify-center">
					<form className="w-full max-w-md space-y-8 px-0.5">
						<div className="flex flex-col items-center mb-6">
							<UserCircleIcon className='size-7 mb-4'/>
							<h1 className="text-xl font-bold text-center">Login to your account.</h1>
						</div>

						<div className="space-y-5">
							<div>
								<label className="mb-1 block text-base font-medium" htmlFor="email">Email</label>
								<input id="email" className="form-input w-full p-3 rounded border border-gray-300" type="email" placeholder="johndoe@example.com" />
							</div>
							<div>
								<label className="mb-1 block text-base font-medium" htmlFor="password">Password</label>
								<input id="password" className="form-input w-full p-3 rounded border border-gray-300" type="password" autoComplete="on" placeholder="••••••••" />
							</div>
						</div>

						<div className="pt-6">
							<Link to="/after-auth" className="block w-full text-center py-3 bg-[#294998] text-white rounded hover:bg-gray-700 transition duration-300">
								Sign In
							</Link>
						</div>
					</form>
				</div>

				<div className="hidden md:block">
					<img src={AuthModel} alt="Authentication background" className="h-full w-full object-contain rounded-2xl"/>
				</div>
			</div>
		</AuthLayout>
    );
}