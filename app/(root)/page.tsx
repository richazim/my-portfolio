import { getSongsRecommendation } from "@/actions/songRecommendation";
import Preloader from "@/components/Preloader";
import RootPage from "@/pages/RootPage"

const SONGS_RECOMMENDATIONS = await getSongsRecommendation();

const Page = () => {

  return (
    <div>
      <Preloader/>
      <RootPage songs={SONGS_RECOMMENDATIONS}/>
    </div>
  )
}

export default Page;