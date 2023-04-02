import React from 'react'
import './index.css'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { features } from 'features'

export function Nav (): JSX.Element {
  const navigate = useNavigate()
  const location = useLocation()
  const { featureId } = useParams()
  const onFeaturePage = location.pathname.indexOf('/feature') === 0 && !!featureId;
  const currentFeature = onFeaturePage ? features[featureId] : null;
  const title = currentFeature?.title ?? 'An ode to trash'

  return (
    <div id="nav">
      <p>{title}</p>
      <img id="logo" alt="logo" src="../logo.png" onClick={() => navigate('/')}></img>
    </div>
  )
}