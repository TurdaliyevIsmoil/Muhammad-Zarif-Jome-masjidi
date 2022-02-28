import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Lecture from "./components/lecture";
import News from "./components/news";
import Articles from "./components/articles";
import WomanPage from "./components/womanPage";
import Library from "./components/library";
import { articles, family } from "./components/articles/datas";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Lecture />
      <News />
      <Articles data={articles} />
      <WomanPage />
      <Library />
      <Articles data={family} />
      <Footer />
    </>
  );
}

export default App;
