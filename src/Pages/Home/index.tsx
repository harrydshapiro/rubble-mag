import React, { useEffect, useRef, useState } from 'react'
import { RenderPreview } from 'Components/RenderPreview'
import './index.css'
import { features } from 'features'
import Slider, { Settings } from "react-slick";

export function Home(): JSX.Element {
  const sliderRef = useRef<any>(null)
  
  const NextArrow = () => <div
    className="arrow-container next"
    onClick={() => sliderRef.current.slickNext()}
  >
    <svg onClick={() => sliderRef.current.slickNext()} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m375 816-43-43 198-198-198-198 43-43 241 241-241 241Z"/></svg>
  </div>

  const PrevArrow = () => <div
    className="arrow-container prev"
    onClick={() => sliderRef.current.slickPrev()}
  >
    <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M561 816 320 575l241-241 43 43-198 198 198 198-43 43Z"/></svg>
  </div>

  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  const isMobile = width >= 768;


  const sliderSettings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div id="home-page" className='page'>
      <div>
        {
          isMobile ? 
            /* @ts-expect-error For some reason it thinks we can't add refs to slider :( */
            <Slider ref={sliderRef} {...sliderSettings}>
              {Object.entries(features).map(([featureId], index) => <RenderPreview key={index} featureId={featureId}/>)}
            </Slider> :
            Object.entries(features).map(([featureId], index) => <RenderPreview key={index} featureId={featureId}/>)
        }
      </div>
    </div>
  )
}