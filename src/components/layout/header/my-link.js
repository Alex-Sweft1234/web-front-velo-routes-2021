import React, {useEffect, useState, forwardRef} from 'react'
import {NavLink} from 'react-router-dom'

// eslint-disable-next-line react/display-name
export default forwardRef((props) => {
  const [hash, setHash] = useState(false)

  useEffect(() => {
    setHash(window.location.hash !== '')
  }, [window.location.hash])

  return (
    <NavLink
      {...props}
      isActive={(match, location) => {
        // console.log(match, location)
        if (!match || !location || hash) {
          return false
        }
        return match.url === location.pathname && location.search === ''
      }}
      exact
      activeClassName={'active'}
    />
  )
})