import Blog from "./Blog/Blog";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import { ImPencil } from "react-icons/im";
const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Blog />

      <div className="edit-btn d-sm-none d-block">
        <ImPencil />
      </div>
    </div>
  );
};

export default Home;
