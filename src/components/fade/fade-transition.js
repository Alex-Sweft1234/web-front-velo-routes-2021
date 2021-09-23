import {useEffect, useState} from 'react'
import {Transition} from 'react-transition-group'

const duration = 600

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: {opacity: 1},
  entered:  {opacity: 1},
  exiting:  {opacity: 0},
  exited:  {opacity: 0},
}

export default function Fade (props) {

  const [inProp, setInProp] = useState(false)

  useEffect(() => {
    setTimeout(() => setInProp(true), 5)
  }, [])

  return(
    <Transition in={inProp} timeout={duration}>
      {
        state => (
          <div style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}>
            { props.children }
          </div>
        )}
    </Transition>
  )
}