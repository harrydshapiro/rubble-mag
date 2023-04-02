declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['model-viewer']: any;
    }
  }
}

const loadingPoster = (<div id="poster" slot="poster">
  <img alt="loading" src="/loading.gif"/>
</div>)

export const features: Record<string, { modelViewerElement: any, cameraOrbit: string, fieldOfView: string, title: string }> = {
  books: {
    title: 'books title',
    cameraOrbit: "-440.6deg 22.5deg 2.138m",
    fieldOfView: "30deg",
    modelViewerElement: (
      <model-viewer 
        src="/features/books/render.glb"
        camera-controls
        shadow-intensity="1" 
        exposure="1" 
        loading="lazy"
        class="modelViewer"
        interpolation-decay="80"
      >
        {loadingPoster}
      </model-viewer>
      )  
  },
  garbage: {
    title: 'Stop staring at me...',
    cameraOrbit: "55.77deg 86.92deg 5.488m",
    fieldOfView: "30deg",
    modelViewerElement: (
      <model-viewer 
        src="/features/garbage/render.glb"
        camera-controls
        shadow-intensity="1" 
        exposure="1" 
        loading="lazy"
        class="modelViewer"
        interpolation-decay="80"
      >
        {loadingPoster}
      </model-viewer>
    )  
  },
  rat: {
    title: 'rat',
    cameraOrbit: "-0.3296deg 22.5deg 2.137m",
    fieldOfView: "30deg",
    modelViewerElement: (
      <model-viewer 
        src="/features/rat/render.glb"
        camera-controls
        shadow-intensity="1" 
        exposure="1" 
        loading="lazy"
        class="modelViewer"
        interpolation-decay="80"
      >
        {loadingPoster}
      </model-viewer>
    )  
  },
  champagne: {
    title: 'champagne',
    cameraOrbit: "-689.8deg 66.31deg 2.096m",
    fieldOfView: "19.85deg",
    modelViewerElement: (
      <model-viewer 
        src="/features/champagne/render.glb"
        camera-controls
        shadow-intensity="1" 
        exposure="1" 
        loading="lazy"
        class="modelViewer"
        interpolation-decay="80"
      >
        {loadingPoster}
      </model-viewer>
    )  
  },
  "trash-bags": {
    title: 'trash-bags',
    cameraOrbit: "-817.8deg 31.69deg 5.28m",
    fieldOfView: "22.96deg",
    modelViewerElement: (
      <model-viewer 
        src="/features/trash-bags/render.glb"
        camera-controls
        shadow-intensity="1" 
        exposure="1" 
        loading="lazy"
        class="modelViewer"
        interpolation-decay="80"
      >
        {loadingPoster}
      </model-viewer>
    )  
  },
  "whole-foods": {
    title: 'whole-foods',
    cameraOrbit: "-811.2deg 22.5deg 3.076m",
    fieldOfView: "22.96deg",
    modelViewerElement: (
      <model-viewer 
        src="/features/trash-bags/render.glb"
        camera-controls
        shadow-intensity="1" 
        exposure="1" 
        loading="lazy"
        class="modelViewer"
        interpolation-decay="80"
      >
        {loadingPoster}
      </model-viewer>
    )  
  },
  pizza: {
    title: 'pizza',
    cameraOrbit: "-811.5deg 74.92deg 4.091m",
    fieldOfView: "20.67deg",
    modelViewerElement: (
      <model-viewer 
        src="/features/pizza/render.glb"
        camera-controls
        shadow-intensity="1" 
        exposure="1" 
        loading="lazy"
        class="modelViewer"
        interpolation-decay="80"
      >
        {loadingPoster}
      </model-viewer>
    )  
  },
  banana: {
    title: 'banana',
    cameraOrbit: "-484.9deg 55.68deg 2.6245m",
    fieldOfView: "30deg",
    modelViewerElement: (
      <model-viewer 
        src="/features/banana/render.glb"
        camera-controls
        shadow-intensity="1" 
        exposure="1" 
        loading="lazy"
        class="modelViewer"
        interpolation-decay="80"
      >
        {loadingPoster}
      </model-viewer>
    )  
  }
}