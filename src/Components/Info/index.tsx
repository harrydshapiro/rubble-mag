import React, { useState } from 'react'
import './index.css'
import { useIsMobile } from 'utils/useIsMobile'

export function Info (): JSX.Element {
  const isMobile = useIsMobile()
  const [showInfo, setShowInfo] = useState(false)
  const buttonText = showInfo ? isMobile ? 'Close' : 'Info' : 'Info'
  const handleInfoWrapperClick = () => {
    if (!isMobile) {
      return
    }
    setShowInfo(!showInfo)
  }
  const handleOnMouseEnter = () => {
    if (isMobile) {
      return
    }
    setShowInfo(true)
  }
  const handleOnMouseLeave = () => {
    if (isMobile) {
      return
    }
    setShowInfo(false)
  }
  return (
    <div id="info-wrapper" onClick={handleInfoWrapperClick} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
      <p className='content' data-visible={showInfo}>Rubble is a longitudinal study of capital conceived of by Sarah Conlisk. It focuses on waste throughout New York City. Waste is anything but.</p>
      <p className='button'>{buttonText}</p>
    </div>
  )
}