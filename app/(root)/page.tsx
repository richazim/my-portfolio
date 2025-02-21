import Home from "@/components/parts/Home";
import Works from "@/components/parts/Works";
import Testimonials from "@/components/parts/Testimonials";
import About from "@/components/parts/About";
import SongsRecommendation from "@/components/parts/SongsRecommendation";
import Blogs from "@/components/parts/Blogs";
import Contact from "@/components/parts/Contact";
import Footer from "@/components/parts/Footer";

const getUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!res.ok) throw new Error(res.statusText)
    await new Promise(resolve => setTimeout(resolve, 3000));
    const users = await res.json()
    return users
}

export default async function Portfolio() {
    // const usersFetchedDataToForceTheLoadingUIToShowUp = await getUsers();

  return (
    <main className="">
        <Home/>

        <div className="px-[100px] flex flex-col justify-between gap-[50px]">
            <Works/>

            <Testimonials/>

            <About/>

            <SongsRecommendation/>

            <Blogs/>

            <Contact/>

            <Footer/>
        </div>
    </main>
  );
}
