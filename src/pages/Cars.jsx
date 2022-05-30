import "../public/css/style.css";
import Navbar from "../components/Navbar";
import SearchColumn from "../components/searchform/SearchColumn";
import Hero from "../components/searchform/Hero";
import Footer from "../components/Footer";

function Cars() {
  return (
    <div className="App">
      <Navbar />
      <Hero showbtn={false} />
      <SearchColumn />
      <Footer />
    </div>
  );
}

export default Cars;
