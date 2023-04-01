import React from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'

export function RenderPreview ({ featureId }: { featureId: string }) {
  const navigate = useNavigate()
  return (
    <div className="renderPreview" onClick={() => navigate(`/feature/${featureId}`)}>
      <img alt="render-preview" src={`features/${featureId}/preview.png`}></img>
    </div>
  )
}