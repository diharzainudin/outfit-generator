import { FaHeart } from 'react-icons/fa'
import React, { useState } from 'react'

const HeartButton = () => {
  const [liked, setLiked] = useState(false)
  const handleClick = () => {
    setLiked(!liked)
  }
  return (
    <div>
      <FaHeart
        size="30"
        onClick={handleClick}
        style={{ color: liked ? 'black' : '#e9d2c0' }}
      />
    </div>
  )
}

export default HeartButton
