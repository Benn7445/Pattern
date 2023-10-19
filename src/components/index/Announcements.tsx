import Image from "next/image";

export const Announcements = () => {
  return (
    <section className="flex flex-col h-[400px]">
      <div className="flex mt-4 mb-3 w-full rounded-xl overflow-hidden relative cursor-pointer h-[calc(100%-40px)]">
        <Image src="/wallpapers/wallpaper.png" width={1500} height={1500} alt="Wallpaper" className="w-full h-full object-cover hover:opacity-90 duration-300" />
        <div className="pointer-events-none flex absolute w-full h-full">
          <div className="text-4xl ml-[5%] mt-[15%] text-white whitespace-nowrap">
            <p className="font-bold text-4xl ml-auto">Our new gamemode is out!</p>
            <p className="font-semibold text-xl ml-auto mt-3">Come check it out on myserver.net!</p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mx-5">
        <div className="w-14 h-1.5 bg-gray-500 bg-opacity-30 rounded-full" />
        <div className="w-14 h-1.5 bg-gray-500 bg-opacity-30 rounded-full" />
        <div className="w-14 h-1.5 bg-gray-500 bg-opacity-30 rounded-full relative overflow-hidden">
          <div className="absolute w-full h-full bg-black bg-opacity-30" />
          <Image src="/extra/gradient.png" width={50} height={50} alt="Gradient" className="w-full h-full object-cover object-left-bottom" />
        </div>
        <div className="w-14 h-1.5 bg-gray-500 bg-opacity-30 rounded-full" />
      </div>
    </section>
  )
}

export default Announcements;