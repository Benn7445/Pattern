import Navigator from "@/components/general/Navigator";
import Announcements from "@/components/index/Announcements";
import Posts from "@/components/index/Posts";
import Staffs from "@/components/index/Staffs";
import Layout from "@/components/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <Navigator locations={["Home"]} />
      <Announcements />
      <section className="flex gap-10 mt-9 mb-10">
        <Posts />
        <div className="w-1/4">
        <Staffs />
        </div>
      </section>
    </Layout>
  )
}
