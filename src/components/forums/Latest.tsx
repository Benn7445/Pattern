import Image from "next/image";

export const Latest = () => {
  return (
    <section className="bg-white rounded-xl">
      <div className="flex bg-emerald-500 mx-4 rounded-lg px-4 py-2 relative overflow-hidden">
        <p className="mx-auto font-semibold text-sm uppercase text-white z-10">Latest Posts</p>
        <div className="absolute w-full h-full top-0 left-0 rounded">
          <div className="absolute w-full h-full bg-black bg-opacity-30" />
          <Image src="/extra/gradient.png" width={50} height={50} alt="Gradient" className="w-full h-full object-cover object-left-bottom" />
        </div>
      </div>
      <div className="px-8 ">
        <p className="text-xs mt-3 opacity-60">No recent posts.</p>
      </div>
    </section>
  )
}

export default Latest;