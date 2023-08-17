import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import ArticleBox from "../ArticleBox/ArticleBox";


const Articles = () => {
    return (
        <section className="mb-8 md:mb-28">
            <div className="flex justify-between items-end mb-5 md:mb-12">
                <div>
                    <h2 className="text-2xl md:text-5xl font-MorabbaM text-zink-700 dark:text-white">مطـــــــــالب خوانـدنی</h2>
                    <span className="inline-block text-lg md:text-3xl font-Morabba mt-0.5 md:mt-1.5 text-zinc-700 dark:text-white">یه فنجون مطالعـــــــــــــــــــه   . . .</span>
                </div>
                <Link to='/' className="flex items-center justify-center md:gap-x-1 h-10 pr-3 pl-1 rounded-md transition-colors duration-300 hover:bg-orange-300/30">
                    <span className="hidden md:inline-block text-base md:text-xl text-orange-400 tracking-tighter">مشاهده همه مقاله ها</span>
                    <span className="inline-block md:hidden text-base md:text-xl text-orange-400 tracking-tighter">مشاهده همه</span>
                    <ChevronLeftIcon className="w-5 h-5 text-orange-400" />
                </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5">
                <ArticleBox img={1} title='طرز تهیه قهوه دمی با دستگاه اروپرس' day='25' month='فروردین' />
                <ArticleBox img={2} title='یک نوشیدنی هیجان انگیز و پرکالری برای شروع روز' day='17' month='خرداد' />
                <ArticleBox img={3} title='طرز تهیه یک فنجان کافه زینو برزیلی' day='19' month='تیر' />
                <ArticleBox img={4} title='طرز تهیه قهوه دالگونا مناسب روز‌های کرونایی' day='05' month='مرداد' />
            </div>
        </section>
    )
}

export default Articles;