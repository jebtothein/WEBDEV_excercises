import { ImageSlider } from "./ImageSlider"
import car1 from "./images/car(1).jpg"
import car2 from "./images/car(2).jpg"
import car3 from "./images/car(3).jpg"
import car4 from "./images/car(4).jpg"
import car5 from "./images/car(5).jpg"
// to import all of the image files to the program

const IMAGES = [car1,car2,car3,car4,car5]
// to collect all of the images intoi a single array

export default function App()
{
  return (
    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        height: "500px",
        aspectRatio: 1/1,
        margin: "0 auto"
      }}>
    <ImageSlider imageUrls={IMAGES}/>
    </div>
  )
}
