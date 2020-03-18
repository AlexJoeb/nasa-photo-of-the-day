import React, { useState } from 'react';

export default function Card({ data }) {
    const styles = {
        
    }
    return (
        <div className='card'>
            <div className='card_header'>
                {/* ! Planet SVG HERE */}
                <h1>{data.title}</h1>
            </div>
            <div className='card_middle' style={{backgroundImage: `url(${data.url})`}}></div>
            <div className='card_bottom'>
                <p>{data.explanation}</p>
            </div>
        </div>
    )
}