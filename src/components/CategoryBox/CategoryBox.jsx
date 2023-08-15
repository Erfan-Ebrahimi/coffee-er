import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const CategoryBox = ({img , title}) => {
  return (
    <Link to='/' className="flex flex-col items-center justify-center w-[100px] md:w-[200px] text-center hover:scale-95 hover: duration-500">
        <img src={`images/categories/category${img}.png`} alt="p1" />
        <span className="inline-block h-10 mt-1.5 md:mt-2.5 font-DanaB text-sm md:text-xl text-zink-700 dark:text-white">{title}</span>
    </Link>
  )
}

export default CategoryBox;