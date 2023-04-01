import React from 'react'
import { RenderPreview } from 'Components/RenderPreview'
import './index.css'
import { features } from 'features'

export function Home(): JSX.Element {
  return (
    <div id="home-page" className='page'>
      {features.map(({featureId}, index) => <RenderPreview key={index} featureId={featureId}/>)}
    </div>
  )
}