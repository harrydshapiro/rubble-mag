import React, { useEffect } from 'react';
import './index.css'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['model-viewer']: any;
    }
  }
}

export function Render({ featureId, originalPosition }: { featureId: string, originalPosition?: { cameraOrbit?:string, fieldOfView?: string} }) {
  const modelRef = React.useRef() as React.MutableRefObject<any>
  
  useEffect(() => {
      modelRef.current.addEventListener('load', () => {
        modelRef.current.cameraOrbit = originalPosition?.cameraOrbit
      })
  }, [originalPosition])

  return (
    <div className="render">
      <model-viewer 
        ref={modelRef} 
        src={`/features/${featureId}/render.glb`} 
        camera-controls
        shadow-intensity="1" 
        exposure="1" 
        loading="lazy"
        class="modelViewer"
        interpolation-decay="80"
      >
      <div id="poster" slot="poster">
        <img alt="loading" src="/loading.gif"/>
      </div>
      </model-viewer>
    </div>
  );
}
      