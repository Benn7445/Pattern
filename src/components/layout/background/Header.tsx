import Image from "next/image";
import Link from "next/link";
import ClientIcon from "../../general/ClientIcon";
import { Navbar } from "./Navbar";
import ParticlesHeader from "./ParticlesHeader";

export const Header = () => {
  return (
    <>
      <div className="relative flex w-full min-h-[45%] h-[45%] overflow-hidden">
        <div className="relative">
          <Image src="/background.png" width={1920} height={1080} alt="Minecraft Background" className="w-full h-full object-cover object-top" />
          <ParticlesHeader />
          <canvas data-generated="true" style={{ width: "100%", pointerEvents: "none" }} width="1980" height="475" />
        </div>
      </div>
      <div className="flex flex-col absolute w-full h-1/2 z-10 select-none">
        <Navbar />
        <section className="flex my-auto">
          <div className="flex relative h-20 w-52 bg-black bg-opacity-30 rounded-xl my-auto ml-[20%]">
            <div className="flex w-full hover:scale-[1.035] duration-300 items-center cursor-pointer">
              <ClientIcon icon="mdi:cube-outline" className="text-4xl text-white ml-5 opacity-75 w-8 mt-0.5" />
              <div className="ml-4">
                <p className="uppercase font-medium text-white tracking-wide">MyServer.net</p>
                <p className="text-white tracking-wide opacity-75 text-sm">4 players online</p>
              </div>
            </div>
          </div>
          <Link href="/" className="m-auto hover:scale-[1.02] duration-300">
            <Image src={"/logo.png"} alt="Minecraft Server Logo" height={300} width={300} className="animate-bounce-soft" />
          </Link>
          <div className="flex relative h-20 w-52 bg-black bg-opacity-30 rounded-xl my-auto mr-[20%]">
            <div className="flex w-full hover:scale-[1.035] duration-300 items-center cursor-pointer">
              <ClientIcon icon="iconoir:discord" className="text-4xl text-white ml-5 opacity-75 w-8 mt-0.5" />
              <div className="ml-4">
                <p className="uppercase font-medium text-white tracking-wide">Join Discord</p>
                <p className="text-white tracking-wide opacity-75 text-sm">40 users online</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Header;