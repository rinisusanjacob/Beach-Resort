import React from 'react'
import loadingGif from '../images/gif/loading-gear.gif'

function Loading() {
    return (
        <div className="loading">
            <h4>rooms data loading</h4>
            <img src={loadingGif} alt=""/>
        </div>
    )
}

export default Loading
