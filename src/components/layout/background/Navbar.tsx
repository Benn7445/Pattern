import ClientIcon from "../../general/ClientIcon"
import NavbarButton from "./NavbarButton"
import ThemeSwitch from "../../general/ThemeSwitch"

export const Navbar = () => {
  return (
    <nav className="h-[80px] absolute w-full flex justify-center gap-10 font-semibold text-white">
      <NavbarButton url="/" title="Home" />
      <NavbarButton url="/forums" title="Forums" />
      <NavbarButton url="/staff" title="Staff" />
      <NavbarButton url="/applications" title="Applications" />
      <NavbarButton url="https://store.myserver.net/" title="Store" icon="ic:round-store" className="w-[82.016px]" />
      <div className="flex relative my-auto h-9 w-52 bg-black bg-opacity-20 rounded-full mx-2">
        <ClientIcon icon="map:search" className="text-white my-auto ml-3 pt-0.5 opacity-75" />
        <input className="absolute w-full h-full bg-transparent outline-none pl-9 placeholder:text-white placeholder:opacity-50 opacity-75 placeholder:uppercase text-xs" placeholder="Search" />
      </div>
      <NavbarButton title="Login" />
      <NavbarButton title="Register" />
      <div className="flex relative my-auto h-9 w-[68px] bg-black bg-opacity-20 rounded-full mx-2 cursor-not-allowed">
        <ThemeSwitch />
      </div>
    </nav>
  )
}