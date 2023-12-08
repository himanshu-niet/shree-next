import Header from "./_components/common/Header";




export default function Layout({ children }) {
  return (
    <>
   <Header/>

    <main>{children}</main>
 
    </>
  )
}