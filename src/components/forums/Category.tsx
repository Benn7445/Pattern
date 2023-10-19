import Image from "next/image";
import ClientIcon from "../general/ClientIcon";

export const Category = ({ icon, title, threads, replies }: { icon: string, title: string, threads: number, replies: number }) => {
  return (
    <div className="flex bg-gray-50 w-full h-16 rounded-xl items-center px-6 mt-2">
      <ClientIcon icon={icon} className="text-2xl w-11" />
      <p className="font-semibold opacity-70 hover:text-indigo-700 duration-300 cursor-pointer">{title}</p>
      <div className="text-center ml-auto">
        <p className="text-[10px] font-bold uppercase opacity-40">Threads</p>
        <p className="opacity-80 font-semibold text-sm">{threads}</p>
      </div>
      <div className="text-center ml-5">
        <p className="text-[10px] font-bold uppercase opacity-40">Replies</p>
        <p className="opacity-80 font-semibold text-sm">{replies}</p>
      </div>
      {title === "Announcements" ? (
        <div className="flex items-center ml-14 w-52">
          <Image src={"https://cravatar.eu/avatar/7D_"} width={50} height={50} alt="Wallpaper" className="w-7 h-7 rounded" />
          <div className="ml-2 flex flex-col">
            <p className="font-semibold opacity-75 hover:text-indigo-700 duration-300 cursor-pointer">New Gamemode is..</p>
            <p className="text-[11px] -mt-0.5 text-black text-opacity-70 font-semibold"><span className="text-red-600 hover:opacity-50 duration-300 cursor-pointer">7D_</span> • 10 days ago</p>
          </div>
        </div>
      ) :
        <p className="w-52 ml-14 text-[11px] opacity-50 font-semibold">No Posts</p>}
    </div>
  )
}

export default Category;