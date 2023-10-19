import Category from "@/components/forums/Category";
import Latest from "@/components/forums/Latest";
import Statistics from "@/components/forums/Statistics";
import ClientIcon from "@/components/general/ClientIcon";
import Navigator from "@/components/general/Navigator";
import Staffs from "@/components/index/Staffs";
import Layout from "@/components/layout/Layout";

export default function Home() {
  return (
    <Layout flex>
      <Navigator locations={["Forums"]} />
      <section className="flex w-full mt-7 gap-10 mb-14">
        <section className="w-3/4">
          <div className="flex">
            <p className="opacity-50 font-bold text-sm uppercase tracking-wider mb-1">Information</p>
            <hr className="w-full ml-5 mt-2.5 opacity-60" />
          </div>
          <Category icon="twemoji:loudspeaker" title="Announcements" threads={1} replies={4} />
          <Category icon="twemoji:bullseye" title="Updates" threads={0} replies={0} />
          <div className="flex mt-8">
            <p className="opacity-50 font-bold text-sm uppercase tracking-wider mb-1">Community</p>
            <hr className="w-full ml-5 mt-2.5 opacity-60" />
          </div>
          <Category icon="twemoji:left-speech-bubble" title="General" threads={0} replies={0} />
          <Category icon="twemoji:incoming-envelope" title="Suggestions" threads={0} replies={0} />
          <Category icon="twemoji:video-camera" title="Media" threads={0} replies={0} />
          <Category icon="twemoji:wrapped-gift" title="Giveaways & Competitions" threads={0} replies={0} />
          <div className="flex mt-8">
            <p className="opacity-50 font-bold text-sm uppercase tracking-wider mb-1">Games</p>
            <hr className="w-full ml-5 mt-2.5 opacity-60" />
          </div>
          <Category icon="twemoji:tanabata-tree" title="Conewar" threads={0} replies={0} />
          <div className="flex mt-8">
            <p className="opacity-50 font-bold text-sm uppercase tracking-wider mb-1">Other</p>
            <hr className="w-full ml-5 mt-2.5 opacity-60" />
          </div>
          <Category icon="twemoji:balance-scale" title="Applications" threads={0} replies={0} />
          <Category icon="twemoji:anger-symbol" title="Reports" threads={0} replies={0} />
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
