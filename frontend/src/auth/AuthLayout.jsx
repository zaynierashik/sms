import Logo from '../components/logo/Logo';
import AuthImage from '../assets/auth-bg.jpg';

export default function AuthLayout({ children }) {
	return (
		<>
			<header className="absolute z-30 w-full">
				<div className="mx-auto max-w-6xl px-4 sm:px-6">
					<div className="flex h-16 items-center justify-between md:h-20">
						<div className="mr-4 shrink-0">
							<Logo/>
						</div>
					</div>
				</div>
			</header>

			<main className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${AuthImage})` }}>
				<div className="w-full px-4 sm:px-6">
					<div className="mx-auto w-full max-w-4xl rounded-xl p-7 shadow-lg bg-white/30 backdrop-blur-md border border-white/40">
						{children}
					</div>
				</div>
			</main>
		</>
	);
}