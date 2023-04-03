import React, { useEffect, useState } from 'react'
import './index.css'
import { useIsMobile } from 'utils/useIsMobile'

export function Info (): JSX.Element {
  const infoButtonId = "info-button"
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
  useEffect(() => {
    const listener = (event: Event) => {
      const target = event.target as HTMLParagraphElement
      if (target.id !== infoButtonId) {
        setShowInfo(false)
      }
    }
    // document.addEventListener('click', listener)
    document.addEventListener('touchstart', listener)
    return () => {
      // document.removeEventListener('click', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [setShowInfo])
  return (
    <div id="info-wrapper" onClick={handleInfoWrapperClick} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
      <p className='content' data-visible={showInfo}>Rubble is a project celebrating the trash of New York. We tend to avoid trash, avert out eyes .. but if you look closer, trash offers an honest record of what it mean to consume <span className="font-icon">-</span> and exist <span className="font-icon">-</span> as a human. Rubble invites you to engage and get intimate with all that we leave behind. There are stories out there. We are our own galleries.</p>
      <p id={infoButtonId} className='button'>{buttonText}</p>
    </div>
  )
}