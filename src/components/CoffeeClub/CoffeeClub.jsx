import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const CoffeeClub = () => {
    return (
        <section className="mb-8 md:mb-20">
            <div className="flex items-center sm:justify-center flex-wrap lg:flex-nowrap md:gap-x-5 xl:gap-x-24 gap-y-9 xl:h-36 py-8 xl:py-0 px-3 md:px-11 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-2xl">
                <div className="flex items-center md:shrink-0 gap-x-3 md:gap-x-6 mt-1 md:mt-0 text-white">
                    <img src="./images/club/diamond.png" className="w-[87px] md:w-[110px]" alt="" />
                    <div className="">
                        <h4 className="font-MorabbaB text-2xl sm:text-5xl mb-2">کافی کلاب</h4>
                        <p className="font-Morabba text-lg sm:text-2xl">میدونستی میتونی با امتیاز هات قهوه بگیری ؟</p>
                    </div>
                </div>
                <div className="flex items-center justify-center mx-auto gap-x-2 sm:gap-x-3 md:gap-x-[10px] xl:gap-x-[110px] ">
                    <div className="flex gap-x-1 sm:gap-x-1 lg:gap-x-2 xl:gap-x-5 child-hover:bg-orange-300">
                        <Link to='/' className="w-[65px] h-[65px] sm:w-[72px] sm:h-[72px] md:w-[98px] md:h-[98px] text-center bg-white pt-1.5 md:pt-5 rounded-2xl hover:scale-105 duration-500">
                            <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-1 mx-auto" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.9998 4.00018C35.0398 4.00018 43.9998 12.9602 43.9998 24.0002C43.9998 35.0602 35.0398 44.0002 23.9998 44.0002C12.9398 44.0002 3.99976 35.0602 3.99976 24.0002C3.99976 12.9602 12.9398 4.00018 23.9998 4.00018ZM31.6998 17.4202C31.9198 16.7202 31.2798 16.0602 30.5798 16.2802L20.3398 19.4802C19.9198 19.6202 19.5798 19.9402 19.4598 20.3602L16.2598 30.6202C16.0398 31.3002 16.6998 31.9602 17.3798 31.7402L27.5798 28.5402C27.9998 28.4202 28.3398 28.0802 28.4598 27.6602L31.6998 17.4202Z" fill="#059669" />
                            </svg>

                            <span className="text-xs md:text-sm text-emerald-600">چرخ و بخت</span>
                        </Link>
                        <Link to='/' className="w-[65px] h-[65px] sm:w-[72px] sm:h-[72px] md:w-[98px] md:h-[98px] text-center bg-white pt-1.5 md:pt-5 rounded-2xl hover:scale-105 duration-500">
                            <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-1 mx-auto" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.8995 7.5606C30.8195 8.0606 30.7795 8.5606 30.7795 9.0606C30.7795 13.5606 34.4195 17.1986 38.8995 17.1986C39.3995 17.1986 39.8795 17.1406 40.3795 17.0606V33.1986C40.3795 39.9806 36.3795 44.0006 29.5795 44.0006H14.8015C7.99951 44.0006 3.99951 39.9806 3.99951 33.1986V18.4006C3.99951 11.6006 7.99951 7.5606 14.8015 7.5606H30.8995ZM31.3015 19.7206C30.7595 19.6606 30.2215 19.9006 29.8995 20.3406L25.0615 26.6006L19.5195 22.2406C19.1795 21.9806 18.7795 21.8786 18.3795 21.9206C17.9815 21.9806 17.6215 22.1986 17.3795 22.5186L11.4615 30.2206L11.3395 30.4006C10.9995 31.0386 11.1595 31.8586 11.7595 32.3006C12.0395 32.4806 12.3395 32.6006 12.6795 32.6006C13.1415 32.6206 13.5795 32.3786 13.8595 32.0006L18.8795 25.5386L24.5795 29.8206L24.7595 29.9386C25.3995 30.2786 26.1995 30.1206 26.6595 29.5186L32.4395 22.0606L32.3595 22.1006C32.6795 21.6606 32.7395 21.1006 32.5195 20.6006C32.3015 20.1006 31.8195 19.7606 31.3015 19.7206ZM39.1797 4C41.8397 4 43.9997 6.16 43.9997 8.82C43.9997 11.48 41.8397 13.64 39.1797 13.64C36.5197 13.64 34.3597 11.48 34.3597 8.82C34.3597 6.16 36.5197 4 39.1797 4Z" fill="#059669" />
                            </svg>
                            <span className="text-xs md:text-sm text-emerald-600">ماموریت ها</span>
                        </Link>
                        <Link to='/' className="w-[65px] h-[65px] sm:w-[72px] sm:h-[72px] md:w-[98px] md:h-[98px] text-center bg-white pt-1.5 md:pt-5 rounded-2xl hover:scale-105 duration-500">
                            <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-1 mx-auto" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M35.712 6C40.28 6 43.998 9.68403 43.998 14.2103L44 19.5649C44 19.9573 43.842 20.3378 43.562 20.6152C43.28 20.8946 42.9 21.0512 42.5 21.0512C40.858 21.0512 39.522 22.375 39.522 24.002C39.522 25.629 40.858 26.9528 42.5 26.9528C43.328 26.9528 44 27.6186 44 28.4391V33.7917C44 38.318 40.284 42 35.716 42H12.286C7.718 42 4 38.318 4 33.7917V28.4391C4 27.6186 4.672 26.9528 5.5 26.9528C7.144 26.9528 8.48 25.629 8.48 24.002C8.48 22.4166 7.198 21.2236 5.5 21.2236C5.102 21.2236 4.722 21.067 4.44 20.7876C4.158 20.5082 4 20.1297 4 19.7373L4.004 14.2103C4.004 9.68403 7.72 6 12.288 6H35.712ZM24.004 16.3069C23.436 16.3069 22.928 16.6201 22.674 17.1234L21.216 20.0504L17.964 20.5201C17.402 20.5994 16.942 20.9799 16.764 21.5149C16.588 22.05 16.73 22.6286 17.138 23.021L19.496 25.296L18.94 28.5124C18.844 29.0673 19.07 29.6182 19.53 29.9491C19.79 30.1334 20.092 30.2286 20.398 30.2286C20.632 30.2286 20.868 30.1711 21.084 30.0581L24 28.5401L26.91 30.0542C27.414 30.3217 28.012 30.2801 28.47 29.9472C28.932 29.6182 29.158 29.0673 29.062 28.5124L28.504 25.296L30.862 23.021C31.272 22.6286 31.414 22.05 31.236 21.5149C31.06 20.9799 30.6 20.5994 30.044 20.5221L26.786 20.0504L25.328 17.1254C25.078 16.622 24.57 16.3089 24.004 16.3069Z" fill="#059669" />
                            </svg>

                            <span className="text-xs md:text-sm text-emerald-600">جایزه ها</span>
                        </Link>
                    </div>
                    <div className="flex flex-col text-white">
                        <div className="flex flex-col text-center mb-1 md:mb-2 ">
                            <span className="inline-block font-DanaB text-2xl md:text-3xl">541</span>
                            <span className="text-xs md:textsm">امتیـــــــاز شما</span>
                        </div>
                        <Link className="flex items-center justify-center mt-1 md:mt-2 text-white max-w-content  h-[26px] md:w-[110px] md:h-8 bg-gradient-to-r from-orange-200 to-orange-300 rounded-xl hover:scale-105 hover:from-sky-400 hover:to-sky-600 duration-500">
                            <span className="font-DanaM text-xs md:text-sm pr-[2px] sm:pr-2">دریافت جایزه</span>
                            <ChevronLeftIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 pb-[1px]"/>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CoffeeClub;