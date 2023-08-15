// -------------COMPONENTS
import CategoryBox from "../CategoryBox/CategoryBox";


const CategoryProducts = () => {

    return (
        <section className="mb-10 md:mb-20">
            <div className="flex flex-wrap justify-center gap-y-6 gap-x-[29px] md:gap-x-[65px] items-center">
                <CategoryBox img={1} title='قهوه دمی و اسپرسو' />
                <CategoryBox img={2} title='لوازم جانبی و تجهیزات' />
                <CategoryBox img={3} title='اسپرسو ساز' />
                <CategoryBox img={4} title='پک تستر قهوه' />
                <CategoryBox img={5} title='قهوه ترک' />
            </div >
        </section >
    )
}

export default CategoryProducts;