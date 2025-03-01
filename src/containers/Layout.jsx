/* eslint-disable react/prop-types */
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <div className="main"></div>
      <div className="relative z-10">
        <NavBar />
        <section className="pt-24">{children}</section>
        <Footer />
      </div>
    </>
  );
}
