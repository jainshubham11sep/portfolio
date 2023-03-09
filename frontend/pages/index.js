import Head from "next/head";
import Link from "next/link";
import HomeComponent from "../components/home";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Digital IT Solution</title>
      </Head>
      <HomeComponent />
    </>
  )
}

export default HomePage;