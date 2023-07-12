import { heroData } from "../data"


const Hero = () => {
  //  Destructure
  const {  title, subtitle, btnText, image} = heroData;

  return (
    <section>
      <div className="container"></div>
    </section>
  )
}

export default Hero