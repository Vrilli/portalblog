import About from "@/components/About";
import Footers from "@/components/Footers";
import Header from "@/components/Header";
import History from "@/components/History";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>PortalBlog</title>
      </Head>
      <main>
        <div className="mx-5 my-6">
          <Header />
          <History />
          <About />
        </div>
        <Footers />
      </main>
    </div>
  );
}
