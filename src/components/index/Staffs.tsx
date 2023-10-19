import Image from "next/image";
import Staff from "./Staff";

export const Staffs = () => {
  return (
    <section className="bg-white rounded-xl">
      <div className="flex bg-emerald-500 mx-4 rounded-lg px-4 py-2 relative overflow-hidden">
        <p className="mx-auto font-semibold text-sm uppercase text-white z-10">Online Staff</p>
        <div className="absolute w-full h-full top-0 left-0 rounded">
          <div className="absolute w-full h-full bg-black bg-opacity-30" />
          <Image src="/extra/gradient.png" width={50} height={50} alt="Gradient" className="w-full h-full object-cover object-left-bottom" />
        </div>
      </div>
      <div className="px-8 pt-1">
        <Staff name="7D_" rank="Admin" />
        <Staff name="Madoka" rank="Admin" />
        <Staff name="Jager32" rank="Admin" />
        <Staff name="Notch" rank="Builder" last />
      </div>
    </section>
  )
}

export default Staffs;