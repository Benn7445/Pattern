import Image from "next/image";

export const Staff = ({ name, rank, last }: { name: string, rank: string, last?: boolean }) => {
  return (
    <>
      <div className="flex items-center cursor-pointer hover:opacity-75 duration-300 w-fit mb-3 mt-3">
        <Image src={"https://cravatar.eu/avatar/" + name} width={50} height={50} alt="Wallpaper" className="w-7 h-7 rounded" />
        <div className="ml-2 flex flex-col">
          <p className="font-semibold text-red-600">{name}</p>
          <p className="text-[11px] -mt-1">{rank}</p>
        </div>
      </div>
      {!last && <hr className="opacity-50" />}
    </>
  )
}

export default Staff;