import React from 'react'
import { useParams } from 'react-router-dom'
import { Render } from 'Components/Render'
import { features } from 'features'

export function Feature(): JSX.Element {
  const { featureId } = useParams()
  const feature = features.find((feature) => feature.featureId === featureId)

  return (
    <div id="feature-page" className="page">
      <Render featureId={featureId!} originalPosition={feature?.originalPosition}/>
    </div>
  )
}