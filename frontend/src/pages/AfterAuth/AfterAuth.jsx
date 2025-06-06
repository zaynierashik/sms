import { Link } from "react-router-dom";
import Logo from "../../components/logo/Logo";
import AuthImage from "../../assets/auth-bg.jpg";
import RobotImg from "../../assets/image 4.png";

export default function AfterAuth() {
    return (
        <>
            <header className="absolute z-30 w-full">
                <div className="mx-auto max-w-6xl px-4 sm:px-6">
                    <div className="flex h-16 items-center justify-between md:h-20">
                        <div className="mr-4 shrink-0">
                            <Logo />
                        </div>
                    </div>
                </div>
            </header>

            <main
                className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${AuthImage})` }}
            >
                <div className="w-full px-4 sm:px-6 max-w-7xl">
                    <div className="flex items-center justify-between min-h-[80vh]">
                        
                        <div className="flex-1 flex justify-center items-center">
                            <div className="relative">
                                <img
                                    src={RobotImg}
                                    alt="Welcome robot illustration"
                                    className="w-[250px] md:w-[300px] lg:w-[450px] max-w-full h-auto object-contain"
                                />
                                
                                <div className="absolute top-10 left-0 w-32 h-20 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 flex items-center justify-center">
                                    <div className="w-8 h-8 bg-blue-200 rounded mr-2"></div>
                                    <div className="space-y-1">
                                        <div className="w-12 h-2 bg-gray-300 rounded"></div>
                                        <div className="w-8 h-2 bg-gray-300 rounded"></div>
                                    </div>
                                </div>
                                
                                <div className="absolute top-20 right-0 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 flex items-center justify-center">
                                    <div className="w-8 h-8 border-2 border-blue-300 rounded-sm"></div>
                                </div>
                                
                                <div className="absolute bottom-20 left-10 w-28 h-16 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 flex items-center justify-center">
                                    <div className="w-6 h-6 bg-blue-200 rounded mr-2"></div>
                                    <div className="space-y-1">
                                        <div className="w-10 h-1.5 bg-gray-300 rounded"></div>
                                        <div className="w-6 h-1.5 bg-gray-300 rounded"></div>
                                    </div>
                                </div>
                                
                                <div className="absolute bottom-10 left-0 flex space-x-2">
                                    <div className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center">
                                        <div className="w-4 h-4 border border-gray-400 rounded"></div>
                                    </div>
                                    <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
                                        <div className="w-4 h-4 bg-blue-400 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 flex justify-center items-center">
                            <div className="space-y-5 mr-32">
    <Link
        to="/dashboard/b2b"
        aria-label="Navigate to B2B Dashboard"
        className="flex justify-center gap-3 items-center shadow-xl text-xl bg-transparent backdrop-blur-md font-semibold text-slate-800 relative z-10 px-20 py-3 overflow-hidden border-2 border-slate-800 rounded-full group transition-all duration-300 hover:shadow-2xl hover:scale-105 min-w-[280px]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full 
        before:hover:left-0 before:rounded-full before:bg-slate-700 hover:text-amber-500 before:-z-10 before:aspect-square 
        before:hover:scale-150 before:hover:duration-700"
    >
        B2B
        <div className="w-10 h-10 bg-slate-800 group-hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 group-hover:rotate-90">
            <svg
                className="w-5 h-5 text-white group-hover:text-slate-800 transition-colors duration-300"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className="fill-current"
                />
            </svg>
        </div>
    </Link>

    <Link
        to="/dashboard/b2c"
        aria-label="Navigate to B2C Dashboard"
        className="flex justify-center gap-3 items-center shadow-xl text-xl bg-transparent backdrop-blur-md font-semibold text-amber-600 relative z-10 px-20 py-3 overflow-hidden border-2 border-amber-500 rounded-full group transition-all duration-300 hover:shadow-2xl hover:scale-105 min-w-[280px]
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full 
        before:hover:left-0 before:rounded-full before:bg-amber-500 hover:text-slate-800 before:-z-10 before:aspect-square 
        before:hover:scale-150 before:hover:duration-700"
    >
        B2C
        <div className="w-10 h-10 bg-amber-500 group-hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 group-hover:rotate-90">
            <svg
                className="w-5 h-5 text-white group-hover:text-amber-500 transition-colors duration-300"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className="fill-current"
                />
            </svg>
        </div>
    </Link>
</div>
  
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}