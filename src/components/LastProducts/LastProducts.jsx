import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const LastProducts = () => {
  return (
    <section className="h-[2000px] pt-8 md:pt-24 lg:pt-48">
      <div className="flex justify-between items-end mb-5 md:mb-12">
        <div>
          <h2 className="text-2xl md:text-5xl font-MorabbaM text-zink-700 dark:text-white">جدیدترین محصولات</h2>
          <span className="inline-block text-lg md:text-3xl font-Morabba mt-0.5 md:mt-1.5 text-zinc-700 dark:text-white">فرآوری شده از دانه قهوه</span>
        </div>
        <Link to='/' className="flex items-center justify-center md:gap-x-1 h-10 pr-3 pl-1 rounded-md transition-colors duration-300 hover:bg-orange-300/30">
          <span className="hidden md:inline-block text-base md:text-xl text-orange-400 tracking-tighter">مشاهده همه محصولات</span>
          <span className="inline-block md:hidden text-base md:text-xl text-orange-400 tracking-tighter">مشاهده همه</span>
          <ChevronLeftIcon className="w-5 h-5 text-orange-400"/>
        </Link>
      </div>
    </section>
  )
}

export default LastProducts;