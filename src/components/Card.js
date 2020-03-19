import React from 'react';
import styled from 'styled-components';

export default function Card({ api, data }) {
    if(!data) return <h1>Loading... </h1>;
    return (
        <div className='card'>
            <CardHeader title={data.title} />
            <StyledCardImage className='card_middle' url={data.url} />
            <StyledCardBottom className="card_bottom" explanation={data.explanation} />
        </div>
    )
}

function CardHeader({ title }){
    const size = 25;
    if(!title) return <h1>Loading... </h1>;
    return (
        <div className='card_header'>
            <svg height={size} width={size} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <g fill="#ffffff">
                    <path d="M42.306,31.282c-0.222,0.841-0.495,1.661-0.816,2.458c3.547,5.834,4.128,9.531,2.955,10.705 c-0.447,0.447-1.074,0.665-1.917,0.665c-0.002,0-0.003,0-0.005,0c-2.328-0.002-5.668-1.62-9.175-3.887 C37.987,37.754,41,32.224,41,26c0-10.477-8.523-19-19-19c-6.227,0-11.757,3.017-15.223,7.661C4.401,10.847,3.002,7.524,3,5.309 C2.999,4.512,3.185,3.921,3.553,3.553C4.727,2.38,8.425,2.961,14.262,6.51c0.797-0.32,1.617-0.594,2.458-0.816 C9.714,1.135,4.449-0.171,2.139,2.139C1.382,2.896,0.999,3.963,1,5.311c0.005,5.49,6.554,15.696,16.291,25.393 c4.236,4.253,17.963,16.397,25.23,16.405c0.002,0,0.005,0,0.007,0c1.38,0,2.501-0.42,3.331-1.25 C48.169,43.548,46.863,38.285,42.306,31.282z M30,26c1.104,0,2,0.895,2,2c0,1.104-0.895,2-2,2c-1.104,0-2-0.895-2-2 C28.001,26.896,28.896,26,30,26z M22,15c1.657,0,3,1.343,3,3c0,1.657-1.343,3-3,3c-1.657,0-3-1.343-3-3 C19.001,16.343,20.344,15,22,15z" fill="#ffffff"/>
                    <path d="M4.519,18.564C3.543,20.849,3,23.362,3,26c0,10.477,8.523,19,19,19 c2.667,0,5.205-0.558,7.511-1.555c-7.126-4.903-13.534-11.226-13.637-11.33C11.255,27.515,7.389,22.856,4.519,18.564z"/>
                </g>
            </svg>
            <h1>{title}</h1>
        </div>
    )
}

function CardImage({ className, url }) {
    if(!url) return <h1>Loading...</h1>;
    return <div className={className}></div>;
}
const StyledCardImage = styled(CardImage)`
    height: 400px;
    background: url(${props => props.url || ""}) center center no-repeat;
    background-size: cover;
`;

function CardBottom({ className, explanation }){
    if(!explanation) return <h1>Loading... </h1>;
    return (
        <div className={className}>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;{explanation}</p>
        </div>
    )
}

const StyledCardBottom = styled(CardBottom)`
    height: auto;
    padding: 20px 1vw;
    background: #4962BE;
    text-align: left;
`;