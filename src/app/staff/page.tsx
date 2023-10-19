import Navigator from "@/components/general/Navigator";
import Layout from "@/components/layout/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout flex>
      <Navigator locations={["Staff"]} />
      <section className="flex flex-col w-full mt-7 gap-10 mb-14 whitespace-nowrap">
        <section>
          <div className="flex w-full mb-5">
            <p className="opacity-50 font-bold text-sm uppercase tracking-wider mb-1">Owner</p>
            <hr className="w-full ml-5 mt-2.5 opacity-60" />
          </div>
          <section className="flex gap-8">
            <div className="flex flex-col items-center cursor-pointer hover:opacity-75 duration-300 w-fit">
              <Image src={"https://cravatar.eu/helmhead/7D_"} width={200} height={200} alt="Wallpaper" className="w-20 h-20 rounded-xl -scale-x-100" />
              <p className="font-bold text-gray-600 text-xl mt-3">7D_</p>
            </div>
            <div className="flex flex-col items-center cursor-pointer hover:opacity-75 duration-300 w-fit">
              <Image src={"https://cravatar.eu/helmhead/Madoka"} width={200} height={200} alt="Wallpaper" className="w-20 h-20 rounded-xl -scale-x-100" />
              <p className="font-bold text-gray-600 text-xl mt-3">Madoka</p>
            </div>
            <div className="flex flex-col items-center cursor-pointer hover:opacity-75 duration-300 w-fit">
              <Image src={"https://cravatar.eu/helmhead/Jager32"} width={200} height={200} alt="Wallpaper" className="w-20 h-20 rounded-xl -scale-x-100" />
              <p className="font-bold text-gray-600 text-xl mt-3">Jager32</p>
            </div>
          </section>
        </section>
        <section className="mt-5">
          <div className="flex w-full mb-5">
            <p className="opacity-50 font-bold text-sm uppercase tracking-wider mb-1">Builder</p>
            <hr className="w-full ml-5 mt-2.5 opacity-60" />
          </div>
          <section className="flex gap-8">
            <div className="flex flex-col items-center cursor-pointer hover:opacity-75 duration-300 w-fit">
              <Image src={"https://cravatar.eu/helmhead/Notch"} width={200} height={200} alt="Wallpaper" className="w-20 h-20 rounded-xl -scale-x-100" />
              <p className="font-bold text-gray-600 text-xl mt-3">Notch</p>
            </div>
          </section>
        </section>
      </section>
    </Layout>
  )
}
