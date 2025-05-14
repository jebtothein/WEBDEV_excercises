// to control the image slide aspect of the programs

import { useState } from "react"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { CircleDot, Circle } from "lucide-react"
import "./imageSlider.css"

type ImageSliderProps = {
    imageUrls: string[]
}

export function ImageSlider({ imageUrls }: ImageSliderProps) {
    const [imageIndex, setImageIndex] = useState(0)

    function showNextImage()
    {
        setImageIndex(index =>{
            if (index === imageUrls.length-1) return 0
            return index +1;
        })
    }

    function showPrevImage()
    {
        setImageIndex(index =>{
            if (index === 0) return imageUrls.length
            return index -1;
        })
    }

    /* this code bellow is for the transition aspect of the programs
    is to make a much smoother transitions this pratically 
    is by posting all of the image at the same time
    and slide itslowly to create a much smoother
    effects of transitions then just a cut (a tad different as the one before)*/

    return (
        
        <div style = {{ width: "100%", height: "100%", position: "relative"}}>
            <div style = {{ width: "100%", height: "%100", display: "flex", overflow: "hidden"}}>
                {imageUrls.map(url => (
                    <img key = {url} src={url} className = "img-slider-img" style={{ translate: `${-100 * imageIndex}%` }}/>
                ))}
            </div>

            <button onClick={showPrevImage} className = "img-slider-button" style={{left: 0}}>
                <ChevronLeft/>
            </button>

            <button onClick={showNextImage} className = "img-slider-button" style={{right: 0}}>
                <ChevronRight/>
            </button>

    {/*to add the bottom carousel, (the many buttons that used to choose the page)
    Just for the actual movement and logic*/}
    {/*Then, we style the pizaz on the div parts (integrated css parts), to make it one 
    the middle and much - much tidier*/}
            <div style = {{
                position: "absolute",
                bottom: ".5rem", //rem in this I believe is just like a space
                left: "left",
                translate: "38%",
                display: "flex",
                gap: ".05rem"
            }}>
    {/*basically this is to style the buttons, from thos squar-ish shape into a more circular shapes
    and also to add the dot to show what page or slide that we choose */}
                {imageUrls.map((_, index) => ( <button key = {index} className="img-slider-dot-button" onClick = {() => setImageIndex(index)}>
                {index === imageIndex ? <CircleDot/> : <Circle/>}</button>))}
            </div>

        </div>
    )
}