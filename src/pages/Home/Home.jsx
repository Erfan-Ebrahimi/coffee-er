// ------------------COMPONENTS
import Header from "../../components/Header/Header";
import LastProducts from "../../components/LastProducts/LastProducts";
import Landing from "../../components/Landing/Landing";
import CategoryBaner from "../../components/CategoryBaner/CategoryBaner";
import CategoryProducts from "../../components/CategoryProducts/CategoryProducts";

const Home = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col">
        <Landing />
        <div className=" bg-body dark:bg-main bg-no-repeat">
          <main className="container">
            <LastProducts />
            <CategoryBaner/>
            <CategoryProducts/>
          </main>
        </div>

      </div>

    </>
  )
}

export default Home;