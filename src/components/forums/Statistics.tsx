import Image from "next/image";

export const Statistics = () => {
  return (
    <section className="bg-white rounded-xl">
      <div className="flex bg-emerald-500 mx-4 rounded-lg px-4 py-2 relative overflow-hidden">
        <p className="mx-auto font-semibold text-sm uppercase text-white z-10">Latest Posts</p>
        <div className="absolute w-full h-full top-0 left-0 rounded">
          <div className="absolute w-full h-full bg-black bg-opacity-30" />
          <Image src="/extra/gradient.png" width={50} height={50} alt="Gradient" className="w-full h-full object-cover object-left-bottom" />
        </div>
      </div>
      <div className="flex flex-col gap-0.5 px-8 text-sm mt-4">
        <div className="flex items-center justify-between">
          <p className="opacity-[0.45]">Totale Threads</p>
          <p className="opacity-80">10</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="opacity-[0.45]">Totale Posts</p>
          <p className="opacity-80">15</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="opacity-[0.45]">Registered Users</p>
          <p className="opacity-80">32</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="opacity-[0.45]">Online Users</p>
          <p className="opacity-80">7</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="opacity-[0.45]">Newest User</p>
          <p className="opacity-80 hover:text-indigo-600 hover:opacity-100 duration-300 cursor-pointer">7D_</p>
        </div>
      </div>
    </section>
  )
}

export default Statistics;