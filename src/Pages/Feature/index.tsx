import React, { useEffect, useMemo, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { features } from 'features'
import './index.css'

export function Feature(): JSX.Element {
  const featureId = useParams().featureId as string
  const renderRef: React.MutableRefObject<any> = useRef()
  const { cameraOrbit, modelViewerElement } = useMemo(() => {
    return features[featureId]
  }, [featureId])

  useEffect(() => {
    if (renderRef.current) {
      renderRef.current.addEventListener('load', () => {
        renderRef.current.cameraOrbit = cameraOrbit
      })
    }
  }, [featureId, cameraOrbit])

  return (
    <div id="feature-page" className="page">
      <div className='render'>
        {{ ...modelViewerElement, ref: renderRef }}
      </div>
    </div>
  )
}