import {Hidden, useScrollTrigger} from '@material-ui/core'
import MobileMenu from './mobile-header/mobile-header'
import DesktopMenu from './desktop-header/desktop-header'
import {useEffect} from 'react'
import Slide from 'react-reveal/Slide'

const Header = () => {

  const trigger = useScrollTrigger({target: window})

  useEffect(() => {
    console.log(trigger)
  }, [trigger]);

  return (
    <>
      <Hidden smDown>
        {/*{!trigger &&*/}
        {/*  <Slide in={!trigger} top collapse>*/}
        {/*    <DesktopMenu />*/}
        {/*  </Slide>*/}
        {/*}*/}
          <DesktopMenu />
      </Hidden>
      {/*<Hidden mdUp>*/}
      {/*  {!trigger &&*/}
      {/*    <Slide in={!trigger} top collapse>*/}
      {/*      <MobileMenu />*/}
      {/*    </Slide>*/}
      {/*  }*/}
      {/*</Hidden>*/}
    </>
  )
}

export default Header