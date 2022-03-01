import Link from "next/link";
import Head from "next/head"

function NotFound() {
    return (
      <div className=" h-screen bg-gradient-to-b from-black to-blue-800">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/icon.ico" />
      </Head>

      <main className="max-w-10xl mx-auto px-8 sm:px-16 h-screen bg-gradient-to-tl from-black to to-blue-900">
        <section className="pt-6">
          <h2 className="text-9xl mt-28 ml-48 text-gray-900 font-bold font-Poppins">Oops!</h2>
          <p className="text-3xl text-cetner justify-between mt-10 ml-44 text-white font-semibold font-Poppins">We can't seem to find the page</p>
          <p className="text-3xl text-cetner ml-44 text-white font-semibold font-Poppins">you're looking for.</p>
          <p className="text-sm text-cetner mt-5 ml-44 text-white font-semibold font-Poppins">Error code: 404</p>
          <p className="text-sm text-cetner mt-3 ml-44 text-white font-semibold font-Poppins">Here are some helpful links instead:</p>
          <Link href="/">
            <a className="text-sm hover:underline cursor-pointer ml-44 text-green-200 font-semibold font-Poppins">Home</a>
          </Link>

          <div className="mt-40 ml-[21vh] w-[70vw] border-b border-sky-500"></div>
        </section>
        <p className="font-Poppins ml-[12vw] mt-3 text-gray-200">© 2022 Airbnb, Inc. All rights reserved.</p>
      </main>
    </div>
  );
}

export default NotFound;