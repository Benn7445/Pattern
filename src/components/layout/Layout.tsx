import RenderProvider from "../general/RenderProvider";
import Footer from "./Footer";
import Header from "./background/Header";

export const Layout = ({ children }: any) => {
  return (
    <main className="relative flex flex-col min-h-screen h-screen bg-[#ffffff] duration-300">
      <RenderProvider />
      <Header />
      <section className="flex flex-col mx-[15%] mt-5">
        {children}
      </section>
      <Footer />
    </main>
  )
}

export default Layout;