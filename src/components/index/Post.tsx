import Image from "next/image";

export const Post = ({ id, title, description, author, date }: { id: number, title: string, description: string, author: string, date: Date }) => {
  return (
    <div className="group cursor-pointer">
      <div className="flex w-full rounded-xl overflow-hidden relative cursor-pointer h-44">
        <Image src={"/wallpapers/wallpaper_post" + id + ".png"} width={500} height={500} alt="Wallpaper" className="w-full h-full object-cover scale duration-300" />
      </div>
      <div className="flex items-center mt-3 text-sm">
        <div className="flex cursor-pointer hover:opacity-75 duration-300 w-fit">
          <Image src={"https://cravatar.eu/avatar/" + author} width={50} height={50} alt="Wallpaper" className="w-5 h-5 rounded" />
          <p className="ml-1 font-semibold">{author}</p>
        </div>
        <p className="font-semibold opacity-50 ml-auto">10 days ago</p>
      </div>
      <p className="font-semibold mt-4 text-lg">{title}</p>
      <p className="mt-1 opacity-60">{description}</p>
    </div>
  )
}

export default Post;