import React from 'react'
import logo from './logo.png'
import background from './background.jpg'

export function Background() {
    return <img src={background} alt="background" style={{height: '100%', width: '100%'}}/>
}

export function Logo(){
    return <img src={logo} alt="logo" style={{position: 'fixed', left: '6%', top: '6%', height: '12%', width: '12%'}}/>
}
