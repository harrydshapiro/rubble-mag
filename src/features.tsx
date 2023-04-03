declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['model-viewer']: any;
    }
  }
}

const defaultModelViewerOptions = {
  "camera-controls": true,
  "shadow-intensity": "1",
  exposure: "1",
  loading: "lazy",
  class: "modelViewer",
  "interpolation-decay": "80",
  ar: true,
  'ar-scale': 'fixed',
  'ar-modes': 'quick-look webxr scene-viewer'
}

const loadingPoster = (<div id="poster" slot="poster">
  <img alt="loading" src="/loading.gif"/>
</div>)

export const features: Record<string, { modelViewerElement: any, cameraOrbit: string, fieldOfView: string, title: string }> = {
  eyes_boxes: {
    title: 'What are you looking at?',
    cameraOrbit: "109.3deg 65.56deg 6.859m",
    fieldOfView: "32.33deg",
    modelViewerElement: (
      <model-viewer
        src="/features/eyes_boxes/render.glb"
        {...defaultModelViewerOptions}
      >
        {loadingPoster}
      </model-viewer>
    )
  },
  dogshit: {
    title: 'Too many dogs in Williamsburg',
    cameraOrbit: "159deg 50.65deg 1.975m",
    fieldOfView: "33.65deg",
    modelViewerElement: (
      <model-viewer
        src="/features/dogshit/render.glb"
        {...defaultModelViewerOptions}
      >
        {loadingPoster}
      </model-viewer>
    )
  },
  toilet: {
    title: 'Leave it in the Loo',
    cameraOrbit: "55.31deg 80.93deg 4.017m",
    fieldOfView: "30.62deg",
    modelViewerElement: (
      <model-viewer
        src="/features/toilet/render.glb"
        {...defaultModelViewerOptions}
      >
        {loadingPoster}
      </model-viewer>
    )
  },
  rat: {
    title: 'Forgot to look twice',
    cameraOrbit: "-0.3296deg 22.5deg 2.137m",
    fieldOfView: "30deg",
    modelViewerElement: (
      <model-viewer 
        src="/features/rat/render.glb"
        {...defaultModelViewerOptions}
      >
        {loadingPoster}
      </model-viewer>
    )  
  },
  champagne: {
    title: 'Congratulations',
    cameraOrbit: "-689.8deg 66.31deg 2.096m",
    fieldOfView: "19.85deg",
    modelViewerElement: (
      <model-viewer 
        src="/features/champagne/render.glb"
        {...defaultModelViewerOptions}
      >
        {loadingPoster}
      </model-viewer>
    )  
  },
  banana: {
    title: 'Don\'t slip on me',
    cameraOrbit: "-484.9deg 55.68deg 2.6245m",
    fieldOfView: "30deg",
    modelViewerElement: (
      <model-viewer 
        src="/features/banana/render.glb"
        {...defaultModelViewerOptions}
      >
        {loadingPoster}
      </model-viewer>
    )  
  },
  pizza: {
    title: '99 Cents. Fresh! Hot!',
    cameraOrbit: "-811.5deg 74.92deg 4.091m",
    fieldOfView: "20.67deg",
    modelViewerElement: (
      <model-viewer 
        src="/features/pizza/render.glb"
        {...defaultModelViewerOptions}
      >
        {loadingPoster}
      </model-viewer>
    )  
  },
  couch: {
    title: 'Couch on couch',
    cameraOrbit: "1119deg 62.99deg 6.677m",
    fieldOfView: "30deg",
    modelViewerElement: (
      <model-viewer
        src="/features/couch/render.glb"
        {...defaultModelViewerOptions}
      >
        {loadingPoster}
      </model-viewer>
    )
  },
  bra: {
    title: 'Free the nipple',
    cameraOrbit: "367.4deg 49.66deg 1.427m",
    fieldOfView: "33.63deg",
    modelViewerElement: (
      <model-viewer
        src="/features/bra/render.glb"
        {...defaultModelViewerOptions}
      >
        {loadingPoster}
      </model-viewer>
    )
  },
  flower: {
    title: 'Flower',
    cameraOrbit: "737.3deg 37.31deg 0.4448m",
    fieldOfView: "34.39deg",
    modelViewerElement: (
      <model-viewer
        src="/features/flower/render.glb"
        {...defaultModelViewerOptions}
      >
        {loadingPoster}
      </model-viewer>
    )
  },
  books: {
    title: "School's out",
    cameraOrbit: "-440.6deg 22.5deg 2.138m",
    fieldOfView: "30deg",
    modelViewerElement: (
      <model-viewer 
        src="/features/books/render.glb"
        {...defaultModelViewerOptions}
      >
        {loadingPoster}
      </model-viewer>
      )  
  },
  mayo: {
    title: 'Has to be Heinz',
    cameraOrbit: "1293deg 28.92deg 0.782m",
    fieldOfView: "30deg",
    modelViewerElement: (
      <model-viewer
        src="/features/mayo/render.glb"
        {...defaultModelViewerOptions}
      >
        {loadingPoster}
      </model-viewer>
    )
  },
  pasta: {
    title: 'Tragedy after Lilia',
    cameraOrbit: "607.8deg 68.38deg 1.104m",
    fieldOfView: "32.81deg",
    modelViewerElement: (
      <model-viewer
        src="/features/pasta/render.glb"
        {...defaultModelViewerOptions}
      >
        {loadingPoster}
      </model-viewer>
    )
  },
  pizza_beer: {
    title: 'Dinner for 1',
    cameraOrbit: "83.94deg 53.12deg 2.007m",
    fieldOfView: "30.82deg",
    modelViewerElement: (
      <model-viewer
        src="/features/pizza_beer/render.glb"
        {...defaultModelViewerOptions}
      >
        {loadingPoster}
      </model-viewer>
    )
  },
  trash_lots: {
    title: 'Assortive Mating',
    cameraOrbit: "2159deg 54.6deg 12.53m",
    fieldOfView: "30deg",
    modelViewerElement: (
      <model-viewer
        src="/features/trash_lots/render.glb"
        {...defaultModelViewerOptions}
      >
        {loadingPoster}
      </model-viewer>
    )
  },
  water: {
    title: 'Sparkling or Still?',
    cameraOrbit: "-51.36deg 61.02deg 2.037m",
    fieldOfView: "34.09deg",
    modelViewerElement: (
      <model-viewer
        src="/features/water/render.glb"
        {...defaultModelViewerOptions}
      >
        {loadingPoster}
      </model-viewer>
    )
  },
  "whole_foods": {
    title: 'Housekeeping',
    cameraOrbit: "-811.2deg 22.5deg 3.076m",
    fieldOfView: "22.96deg",
    modelViewerElement: (
      <model-viewer 
        src="/features/whole_foods/render.glb"
        {...defaultModelViewerOptions}
      >
        {loadingPoster}
      </model-viewer>
    )  
  },
  trashcan: {
    title: 'Dont litter',
    cameraOrbit: "1653deg 43.92deg 4.986m",
    fieldOfView: "32.34deg",
    modelViewerElement: (
      <model-viewer
        src="/features/trashcan/render.glb"
        {...defaultModelViewerOptions}
      >
        {loadingPoster}
      </model-viewer>
    )
  },
  sugar: {
    title: 'Pour some sugar on me',
    cameraOrbit: "-61.24deg 45.22deg 3.02m",
    fieldOfView: "33.23deg",
    modelViewerElement: (
      <model-viewer
        src="/features/sugar/render.glb"
        {...defaultModelViewerOptions}
      >
        {loadingPoster}
      </model-viewer>
    )
  }
}