import Preloader from "@/components/Preloader";
import RootPage from "@/pages/RootPage"
import AnimatedCursor from "react-animated-cursor";

const Page = () => {

  return (
    <>
      <Preloader/>
      <RootPage/>
      <AnimatedCursor 
        innerSize={15}
        outerSize={15}
        color='251, 191, 48'
        outerAlpha={0.2}
        innerScale={1.7}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
    </>
  )
}

export default Page;