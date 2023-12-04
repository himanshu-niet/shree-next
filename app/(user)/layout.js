import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Navbar from "./_components/Navbar";

import './css/util.css'
import './css/main.css'


export default function Layout({ children }) {
  return (
    <>
   <Header/>
 <Navbar/>
    <main>{children}</main>
   <Footer/>
    </>
  )
}