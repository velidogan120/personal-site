import Header from "../components/Header";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Summary from "../components/Summary";
import Footer from "../components/Footer";
const Main = () => {
  return (
    <div>
      <Header />
      <Summary />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
};

export default Main;
