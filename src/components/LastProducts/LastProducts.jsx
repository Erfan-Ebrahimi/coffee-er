import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import ProductBox from "../ProductBox/ProductBox";

const LastProducts = () => {
  return (
    <section className="pt-8 mb-8 md:mb-20 md:pt-24 lg:pt-48">
      <div className="flex justify-between items-end mb-5 md:mb-12">
        <div>
          <h2 className="text-2xl md:text-5xl font-MorabbaM text-zink-700 dark:text-white">جدیدترین محصولات</h2>
          <span className="inline-block text-lg md:text-3xl font-Morabba mt-0.5 md:mt-1.5 text-zinc-700 dark:text-white">فرآوری شده از دانه قهوه</span>
        </div>
        <Link to='/' className="flex items-center justify-center md:gap-x-1 h-10 pr-3 pl-1 rounded-md transition-colors duration-300 hover:bg-orange-300/30">
          <span className="hidden md:inline-block text-base md:text-xl text-orange-400 tracking-tighter">مشاهده همه محصولات</span>
          <span className="inline-block md:hidden text-base md:text-xl text-orange-400 tracking-tighter">مشاهده همه</span>
          <ChevronLeftIcon className="w-5 h-5 text-orange-400" />
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5">
        <ProductBox img='1' title='قهوه تازه ترکیبی دارک کارامل 250 گرمی' price={175000} score={4} off={20} count={150} />
        <ProductBox img='2' title='قهوه تازه ترکیبی سوپرکرما 250 گرمی' price={152000} score={3} off={0} count={45} />
        <ProductBox img='3' title='قهوه اتیوپی یرگاچف تازه برشت مدیوم 250 گرمی' price={145000} score={5} off={10} count={0} />
        <ProductBox img='4' title='قهوه ربوستا کامرون تازه برشت دارک مدیوم 250 گرمی' price={130000} score={4} off={15} count={10} />
        <ProductBox img='5' title='قهوه برزیل سانتوس سرادو تازه برشت مدیوم 500 گرمی' price={210000} score={2} off={0} count={15} />
        <ProductBox img='6' title='قهوه ربوستا پارچمنت تازه برشت مدیوم 500 گرمی' price={230000} score={5} off={15} count={78} />
        <ProductBox img='7' title='قهوه ترکیبی تازه سوپر کافئین 500 گرمی' price={258000} score={4} off={25} count={50} />
        <ProductBox img='8' title='قهوه تازه ترکیبی فول دارک 500 گرمی' price={280000} score={5} off={5} count={45} />
      </div>
    </section>
  )
}

export default LastProducts;