import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ArticleBox = ({img,title,day,month}) => {
    return (
        <div className="flex sm:block gap-x-6 sm:gap-x-2.5 p-2.5 md:pb-2 bg-white dark:bg-zinc-600 rounded-2xl shadow-base cursor-pointer hover:shadow-2xl hover:scale-105 duration-500 delay-100 group">
            <div className="w-[130px] h-[130px] shrink-0 sm:w-auto sm:h-auto sm:mb-4 rounded-2xl rounded-bl-4xl overflow-hidden group-hover:grayscale">
                <img src={`./images/blogs/blog-${img}.png`} className="h-full object-cover sm:h-auto" alt="blog-img" />
            </div>
            <div className="w-full flex flex-col sm:flex-row items-start justify-between">
                <Link to='/' className="max-w-[193px] pb-5 mt-2 sm:mt-0 font-DanaM md:font-Dana md:line-clamp-2  text-sm md:text-lg text-zinc-700 dark:text-white border-b sm:border-none border-gray-200 dark:border-white/20">{title}</Link>
                <div className="flex flex-row gap-x-1 sm:flex-col sm:ml-[18px] sm:-mt-1 text-teal-600 dark:text-emerald-500 sm:text-center sm:text-sm sm:pr-5 sm:mr-5 sm:border-r border-gray-200 dark:border-white/10">
                    <span className="font-DanaB sm:text-2xl">{day}</span>
                    <span>{month}</span>
                    <span>1402</span>
                </div>
            </div>
        </div>
    )
}

export default ArticleBox;