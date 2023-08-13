import { NavLink } from "react-router-dom"
import { useState } from "react";

import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { HomeIcon } from '@heroicons/react/24/outline';
import { ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/outline';
import { BriefcaseIcon } from '@heroicons/react/24/outline';
import { DocumentTextIcon } from '@heroicons/react/24/outline';
import { PhoneArrowUpRightIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

// eslint-disable-next-line react/prop-types
const Navbar = ({ size }) => {

    const [showSubMenu, setShowSubMenu] = useState(false)

    const showSub = () => {
        setShowSubMenu(!showSubMenu)
    }

    if (size === 'd') {
        return (
            <ul className="flex items-center md:gap-x-6 lg:gap-x-9 h-full text-xl text-gray-300 tracking-tightest child:leading-[56px] [&.active]:child:dark:text-orange-300">
                <NavLink to='/'>
                    <span className="font-DanaM">صفحه اصلی</span>
                </NavLink>
                <NavLink to='a2' className="relative group">
                    <span className="flex justify-between items-center gap-x-1 hover:text-orange-200">
                        <span>فروشگاه</span>
                        <ChevronDownIcon className="w-4 h-4" />
                    </span>

                    <div className="absolute top-full w-52 p-6 space-y-4 text-zinc-700 dark:text-white bg-white dark:bg-zinc-700 text-base tracking-normal shadow-base rounded-2xl border-t-[3px] border-orange-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all delay-75 child:inline-block child:transition-colors child-hover:text-orange-400">
                        <span>قهوه ویژه</span>
                        <span>ویژه در سطح جهانی</span>
                        <span>قهوه درجه یک</span>
                        <span>ترکیبات تجاری</span>
                        <span>کپسول قهوه</span>
                        <span>قهوه زینو برزیلی</span>
                    </div>
                </NavLink>
                <NavLink to='a3'>
                    <span className=" hover:text-orange-200">دیکشنری</span>
                </NavLink>
                <NavLink to='a4'>
                    <span className=" hover:text-orange-200">بلاگ</span>
                </NavLink>
                <NavLink to='a5'>
                    <span className=" hover:text-orange-200">درباره ما</span>
                </NavLink>
                <NavLink to='a6'>
                    <span className=" hover:text-orange-200">تماس با ما</span>
                </NavLink>
            </ul>

        )
    } else {
        return (
            <div className="flex flex-col gap-y-1.5 text-zinc-600 dark:text-white child:duration-300 child:transition-colors child:p-2.5 child:rounded-md  [&.active]:child:bg-orange-300/40 [&.active]:child:text-orange-500 [&.active]:child:dark:bg-orange-200/30 [&.active]:child:dark:text-orange-300">
                <NavLink to='/' className="flex items-center ">
                    <div className="flex items-center gap-x-2">
                        <span>
                            <HomeIcon className="w-6 h-5" />
                        </span>
                        <span className="font-DanaM">صفحه اصلی</span>
                    </div>
                </NavLink>
                <NavLink className='relative flex justify-between items-center ' to='2' onClick={showSub}>
                    <div className="flex justify-betwee">
                        <div className="flex items-center gap-x-2">
                            <span>
                                <ShoppingBagIcon className="w-6 h-5" />
                            </span>
                            <span>فروشگاه</span>
                        </div>
                        <span>
                            <ChevronDownIcon  className="w-4 h-4 mr-24 mt-0.5" />
                        </span>
                    </div>
                </NavLink>
                <div className={` ${showSubMenu ? 'flex' : 'hidden'} w-[80%] mr-8 top-[32%] flex-col p-6 space-y-4 bg-orange-200/10 dark:bg-orange-300/10 border-r border-orange-300 child:rounded-md text-zinc-600 dark:text-white text-sm rounded-2xl child-hover:text-orange-300 transition-transform duration-500 `}>
                    <NavLink to="444">قهوه ویژه</NavLink>
                    <NavLink to="33">ویژه در سطح جهانی</NavLink>
                    <NavLink to="55">قهوه درجه یک</NavLink>
                    <NavLink to="66">ترکیبات تجاری</NavLink>
                    <NavLink to="88">کپسول قهوه</NavLink>
                    <NavLink to="77">قهوه زینو برزیلی</NavLink>
                </div>
                <NavLink to='3' className="flex items-center justify-between">
                    <div className="flex items-center gap-x-2">
                        <span>
                            <ChatBubbleLeftEllipsisIcon className="w-6 h-5" />
                        </span>
                        <span>دیکشنری</span>

                    </div>
                </NavLink>
                <NavLink to='4' className="flex items-center justify-between">
                    <div href="#" className="flex items-center gap-x-2">
                        <span>
                            <DocumentTextIcon className="w-6 h-5" />
                        </span>
                        <span >بلاگ</span>

                    </div>
                </NavLink>
                <NavLink to='5' className="flex items-center justify-between">
                    <div href="#" className="flex items-center gap-x-2">
                        <span>
                            <BriefcaseIcon className="w-6 h-5" />
                        </span>
                        <span >درباره ما</span>

                    </div>
                </NavLink>
                <NavLink to='6' className="flex items-center justify-between .active">
                    <div href="#" className="flex items-center gap-x-2">
                        <span>
                            <PhoneArrowUpRightIcon className="w-6 h-5" />
                        </span>
                        <span >تماس با ما</span>
                    </div>
                </NavLink>
            </div>
        )

    }
}

export default Navbar