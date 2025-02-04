import React from 'react'

const Square = ({sqrItem}) => {

  return (
    <div style={{backgroundColor: `#${sqrItem.isColor}`}} className='square-main'>

    </div>
  )
}

export default Square