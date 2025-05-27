import { Link } from "react-router-dom";
import Logo from '../../components/logo/Logo';
import AuthImage from '../../assets/auth-bg.png';

export default function AfterAuth() {
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
                    <div className="mx-auto w-full max-w-md rounded-xl p-8 shadow-lg bg-white/30 backdrop-blur-md border border-white/40">
                        <div className='grid grid-cols-2 gap-5'>
                            <Link to="/dashboard" className="btn w-full cursor-pointer bg-linear-to-t from-gray-900 to-gray-700 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]">
                                B2B
                            </Link>

                            <Link to="/dashboard" className="btn w-full cursor-pointer bg-linear-to-t from-gray-900 to-gray-700 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]">
                                B2C
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}