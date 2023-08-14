import { Link } from "react-router-dom";

const CategoryBaner = () => {
    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-20 text-white">
                <Link to='/' className="banner1 flex flex-col justify-center shadow-xl h-[142px] md:h-[240px] pr-7 md:pr-12 rounded-2xl hover:scale-95 cursor-pointer duration-500 border-r-2 border-orange-500">
                    <span className="font-DanaB text-2xl/6 md:text-4xl/6 mb-4 md:mb-6">انواع قهوه</span>
                    <span  className="md:font-DanaB md:text-xl/6">ترکیبی و تک خاستگاه</span>
                </Link>
                <Link to='/' className="banner2 flex flex-col justify-center shadow-xl h-[142px] md:h-[240px] pr-7 md:pr-12 rounded-2xl border-l-2 border-orange-500 hover:scale-95 cursor-pointer duration-500">
                    <span className="font-DanaB text-2xl/6 md:text-4xl/6 mb-4 md:mb-6">پودرهای فوری</span>
                    <span className="md:font-DanaB md:text-xl/6">نسکافه ، هات چاکلت ، ماسالا</span>
                </Link>
            </div>
        </section>
    )
}

export default CategoryBaner;