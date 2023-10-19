import Layout from "@/components/layout/Layout";

export default function NotFound() {
  return (
    <Layout flex>
      <div className="flex bg-red-400 bg-opacity-75 h-12 rounded-xl">
        <p className="text-white m-auto font-semibold">This page is not found.</p>
      </div>
    </Layout>
  )
}
