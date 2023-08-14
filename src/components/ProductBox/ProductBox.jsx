import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
// import { StarIcon } from "@heroicons/react/24/outline";



// eslint-disable-next-line react/prop-types
const ProductBox = ({ img, title, price, off, score, count }) => {
    return (
        <div className="p-2 md:p-5 bg-white dark:bg-zinc-700 rounded-2xl shadow-base cursor-pointer hover:shadow-2xl hover:scale-105 duration-500 group">
            <div className="relative mb-2 md:mb-5">
                <img src={`images/products/p${img}.png`} className=" w-32 mx-auto md:w-auto group-hover:saturate-150" alt="p1" />
                {
                    off === 0 ?
                        (
                            ""
                        )
                        :
                        (
                            <span className="absolute top-1 right-1 h-5 md:h-[30px] px-2.5 md:px-3.5 text-xs/[24px] md:text-base/[34px] rounded-3xl font-DanaB text-white dark:text-zinc-700 bg-orange-300">{off}%</span>
                        )
                }
            </div>
            <h5 className="h-10 md:h-14 font-DanaM text-sm md:text-xl text-zinc-700 dark:text-white line-clamp-2">
                {title}
            </h5>
            {
                count === 0 ?
                    (
                        <div className="mt-1.5 md:mt-2.5">
                            <span className="text-red-400 text-base md:text-xl">فعلا موجود نیست</span>
                        </div>

                    )
                    :
                    (
                        <div className="flex gap-x-2 md:gap-x-2.5 mt-1.5 md:mt-2.5">
                            <div className="text-emerald-600 dark:text-emerald-500">
                                <span className="font-DanaB text-base md:text-xl">{(((price * (off - 100)) / 100) * -1).toLocaleString()}</span>
                                <span className="text-xs md:text-sm tracking-tighter"> تومان</span>
                            </div>
                            {
                                off !== 0 &&
                                (
                                    <div className="relative pt-0.5 offer-line text-gray-400">
                                        <span className="text-sm md:text-xl">{price.toLocaleString()}</span>
                                    </div>

                                )
                            }
                        </div>

                    )
            }
            <div className="flex items-center justify-between  mt-2.5 md:mt-4">
                <div className="flex items-center gap-x-2.5 md:gap-x-3">
                    <span className="flex items-center justify-center w-[26px] h-[26px] md:w-9 md:h-9  text-gray-400 bg-gray-100 dark:bg-zinc-800 rounded-full cursor-pointer hover:text-white hover:bg-teal-600 hover:dark:bg-emerald-500 duration-500">
                        <ShoppingCartIcon className="h-4 w-4 md:h-[22px] md:w-[22px]" />
                    </span>
                    <span className="block text-gray-400 cursor-pointer hover:text-teal-400 duration-500">
                        <ArrowsRightLeftIcon className="w-4 h-4 md:h-6 md:w-6" />
                    </span>
                </div>
                <div className="flex child:cursor-pointer child-hover:scale-110 child-hover:fill-yellow-500 child:duration-500 ">
                    {
                        Array(5 - score).fill(0).map((item, index) => (
                            <StarIcon key={index} className="w-4 h-4 md:w-6 md:h-6 fill-yellow-50 stroke-yellow-400" />
                        ))
                    }
                    {
                        Array(score).fill(0).map((item, index) => (
                            <StarIcon key={index} className="w-4 h-4 md:w-6 md:h-6 fill-yellow-400 stroke-yellow-300" />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductBox;