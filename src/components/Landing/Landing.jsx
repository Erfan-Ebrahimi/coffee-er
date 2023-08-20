import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Landing = () => {
    return (
        <div className="relative flex bg-home-mobile md:bg-home-desktop bg-[center_top] bg-cover bg-no-repeat h-[200px] xs:h-[250px] md:h-[99vh]">

            {/* LANDING TEXT */}
            <div className="container overflow-y-hidden inline-flex flex-col justify-center ml-[10%] sm:ml-[10%] lg:ml-[10%] md:ml-[10%] w-[200px] xs:w-[230px] md:w-auto h-[100%] md:min-h-screen">
                <h2 className="font-MorabbaB text-white text-[20px] xs:text-[22px] mb-0.5 md:mb-2 md:text-6xl overflow-hidden">قهوه عربیکا تانزانیا</h2>
                <span className="font-Morabba text-white text-xl md:text-5xl">یک فنجان بالانس !</span>
                <span className="block w-[100px] h-px my-3 md:my-8 md:h-0.5 bg-orange-300"></span>
                <p className="max-w-[201px] md:max-w-[460px] font-Dana text-white text-xs md:text-2xl">قطعا نام آشنای عربیکا را شنیده اید، عربیکا یکی از گونه های قهوه است که در نواحی مختلف کمربند قهوه کشت می شود.</p>
            </div>

            {/* LANDING BOTTEM DESIGN */}
            <svg className="absolute bottom-0 right-0 left-0 mx-auto w-[100px] h-[22px] fill-gray-100  dark:fill-zinc-800" viewBox="0 0 100 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0C69 0 81 22 100 22L0 22C18.75 22 31 0 50 0Z" />
            </svg>

            <div className="bo bo--main bo--lg w-0 h-0 xs:w-[145px] xs:h-[145px] md:w-[203px] md:h-[203px] hover:border-t-4 hover:border-t-orange-400 d duration-100">
                <div className="bo bo--md w-0 h-0 xs:w-[105px] xs:h-[105px] md:w-[145px] md:h-[145px] hover:border-t-4 hover:border-t-orange-400 duration-75">
                    <div className="bo bo--sm w-0 h-0 xs:w-[75px] xs:h-[75px] md:w-[95px] md:h-[95px] hover:border-t-4 hover:border-t-orange-400">

                        <div className="flex w-6 h-6 xs:w-[30px] xs:h-[30px] justify-center items-center border-2 rounded-full border-orange-300 dark:border-orange-300  hover:scale-110 hover:border-orange-600 dark:hover:border-orange-600 cursor-pointer">                            
                            <ChevronDownIcon onClick={() => console.log('redred')} className="w-5 h-5  xs:w-10 xs:h-10 flex justify-center items-center text-zinc-700 dark:text-white" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;