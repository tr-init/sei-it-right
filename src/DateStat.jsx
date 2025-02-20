import meter from './assets/meter.png'

import chat from './assets/chatBubble.png'
import Keolap from './assets/KeolaImgs/N.png'
import React, { useState } from 'react'

function DateStat(props){
    return(
        <>
        <img src = {meter} id='meter'></img>
        <img src = {chat} id='chat'></img>
        </>
    )
}

export default DateStat;