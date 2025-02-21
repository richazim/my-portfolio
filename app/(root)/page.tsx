import Home from "@/components/parts/Home";
import Works from "@/components/parts/Works";

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

        <div className="px-[100px]">
            <Works/>
        </div>
    </main>
  );
}
