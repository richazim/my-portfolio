import Home from "@/components/Home";
import Loader from "@/components/Loader";

export default function Portfolio() {
  return (
    <main>
      {false ? <Loader/> : (
        <Home/>
      )} 
    </main>
  );
}
