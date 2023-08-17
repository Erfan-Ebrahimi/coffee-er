import { Link } from "react-router-dom";
import { PhoneIcon } from "@heroicons/react/24/outline";

const ContactUs = () => {
    return (
        <section className="mb-16 md:mb-28">
            <div className="flex flex-col md:flex-row gap-x-5">
                <img className="w-[296px] h-[305px]  mx-auto sm:my-auto " src="images/contact.png" alt="" />
                <div className="flex flex-col justify-center text-center md:justify-normal gap-y-6">
                    <div >
                        <h2 className="text-[1.9rem] sm:text-3xl md:text-4xl lg:text-5xl mt-5 font-MorabbaM text-zink-700 dark:text-white">یکی از بهترین قهوه ها !</h2>
                        <span className="inline-block text-lg md:text-3xl font-Morabba mt-0.5 md:mt-1.5 text-zinc-700 dark:text-white">کیفیت قهوه را از ما بخواهید  . . .</span>
                    </div>
                    <p className="pt-10 w-[90%] mx-auto text-lg md:text-2xl text-zinc-700 dark:text-white text-justify border-g">فضای گرم و دنج ما را احساس کنید، جایی که همه می توانند قهوه معطری پیدا کنند و دسرهای خوشمزه ما را که کاملاً با قهوه داغ همراه شده است، امتحان کنند. فضای داخلی شیک و کارکنان خوش برخورد ما روز شما را می سازد!</p>
                    <Link className="flex items-center justify-center text-xl w-[180px] h-[50px] sm:w-[216px] sm:h-14 gap-x-2 mx-auto  text-orange-300 rounded-4xl border md:border-2 border-orange-400 hover:bg-orange-300 hover:text-zinc-700 duration-300 group" to="/">
                        <span className="inline-block tracking-tighter text-lg sm:text-xl">ثبت سفارش تلفنی</span>
                        <PhoneIcon className="w-5 h-5 sm:w-7 sm:h-7"/>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ContactUs;