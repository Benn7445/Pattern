import Category from "@/components/forums/Category";
import Latest from "@/components/forums/Latest";
import Statistics from "@/components/forums/Statistics";
import ClientIcon from "@/components/general/ClientIcon";
import Navigator from "@/components/general/Navigator";
import Staffs from "@/components/index/Staffs";
import Layout from "@/components/layout/Layout";

export default function Home({ params }: { params: { slug: string } }) {
  return (
    <Layout flex>
      <Navigator locations={["Forums", params.slug]} />
      <section className="flex w-full mt-7 gap-10 mb-14">
        <section className="w-3/4">
          
        </section>
        <section className="flex flex-col gap-10 w-1/4 mb-14">
          <Latest />
          <Statistics />
          <Staffs />
        </section>
      </section>
    </Layout>
  )
}
