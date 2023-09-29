import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import Marquee from 'react-fast-marquee';

import css from '../../assets/download.png'
import tailwind from '../../assets/unnamed.webp'
import bootstrap from '../../assets/5968667.png'
import javascript from '../../assets/download (1).jfif'
import react from '../../assets/png-transparent-black-and-blue-atom-icon-screenshot-react-javascript-responsive-web-design-github-angularjs-github-logo-electric-blue-signage.png'

import redux from '../../assets/2xx0em1u7x631w280lsd.webp'
import node from '../../assets/node-js-icon-8.jpg'
import socket from '../../assets/download (1).png'
import express from '../../assets/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png'

import next from '../../assets/download (2).png'
import mongodb from '../../assets/download (2).jfif'
import npm from '../../assets/npm-icon-512x512-qtfdrf37.png'
import github from '../../assets/github-512.webp'

const KnowledgeIcon = () => {

    return (
        <Marquee>
            <div className="flex overflow-x-hidden overflow-y-hidden gap-10 mx-10">

{/* HTML */}
            <div>
                <img className='w-36 hover:translate-y-2 duration-700' src="https://play-lh.googleusercontent.com/RslBy1o2NEBYUdRjQtUqLbN-ZM2hpks1mHPMiHMrpAuLqxeBPcFSAjo65nQHbTA53YYn" alt="" />

                <div className='my-3 text-xl text-center'>
                    <p>HTML</p> <br />

                    <CountUp
                        start={10}
                        end={80}
                        duration={2.75}
                        className='border-4 p-3 rounded-full'
                    >

                    </CountUp>
                </div>

            </div>

            {/* CSS */}
            <div>
                <img className='w-36 hover:translate-y-2 duration-700' src={css} alt="" />

                <div className='my-3 text-xl text-center'>
                    <p>CSS</p> <br />

                    <CountUp
                        start={10}
                        end={70}
                        duration={2.75}
                        className='border-4 p-3 rounded-full'
                    >

                    </CountUp>
                </div>

            </div>


            {/* TAILWIND */}
            <div>
                <img className='w-36 hover:translate-y-2 duration-700' src={tailwind} alt="" />

                <div className='my-3 text-xl text-center'>
                    <p>Tailwind</p> <br />

                    <CountUp
                        start={10}
                        end={80}
                        duration={2.75}
                        className='border-4 p-3 rounded-full'
                    >

                    </CountUp>
                </div>

            </div>


            {/* BOOTSTRAP */}
            <div>
                <img className='w-36 hover:translate-y-2 duration-700' src={bootstrap} alt="" />

                <div className='my-3 text-xl text-center'>
                    <p>BOOTSTRAP</p> <br />

                    <CountUp
                        start={10}
                        end={70}
                        duration={2.75}
                        className='border-4 p-3 rounded-full'
                    >

                    </CountUp>
                </div>

            </div>

            {/* JAVASCRIPT */}
            <div>
                <img className='w-36 hover:translate-y-2 duration-700' src={javascript} alt="" />

                <div className='my-3 text-xl text-center'>
                    <p>JAVASCRIPT</p> <br />

                    <CountUp
                        start={10}
                        end={70}
                        duration={2.75}
                        className='border-4 p-3 rounded-full'
                    >

                    </CountUp>
                </div>

            </div>


            {/* REACT */}
            <div>
                <img className='w-36 hover:translate-y-2 duration-700' src={react} alt="" />

                <div className='my-3 text-xl text-center'>
                    <p> REACT</p> <br />

                    <CountUp
                        start={10}
                        end={90}
                        duration={2.75}
                        className='border-4 p-3 rounded-full'
                    >

                    </CountUp>
                </div>

            </div>

            {/* REDUX */}
            <div>
                <img className='w-36 hover:translate-y-2 duration-700' src={redux} alt="" />

                <div className='my-3 text-xl text-center'>
                    <p>REDUX</p> <br />

                    <CountUp
                        start={10}
                        end={50}
                        duration={2.75}
                        className='border-4 p-3 rounded-full'
                    >

                    </CountUp>
                </div>

            </div>


            {/* NODE JS */}
            <div>
                <img className='w-36 hover:translate-y-2 duration-700' src={node} alt="" />

                <div className='my-3 text-xl text-center'>
                    <p>NODE JS</p> <br />

                    <CountUp
                        start={10}
                        end={60}
                        duration={2.75}
                        className='border-4 p-3 rounded-full'
                    >

                    </CountUp>
                </div>

            </div>

            {/* NEXT JS */}
            <div>
                <img className='w-36 hover:translate-y-2 duration-700' src={next} alt="" />

                <div className='my-3 text-xl text-center'>
                    <p>NEXT JS</p> <br />

                    <CountUp
                        start={10}
                        end={40}
                        duration={2.75}
                        className='border-4 p-3 rounded-full'
                    >

                    </CountUp>
                </div>

            </div>

            {/* MONGODB */}
            <div>
                <img className='w-36 hover:translate-y-2 duration-700' src={mongodb}alt="" />

                <div className='my-3 text-xl text-center'>
                    <p>MONGODB</p> <br />

                    <CountUp
                        start={10}
                        end={60}
                        duration={2.75}
                        className='border-4 p-3 rounded-full'
                    >

                    </CountUp>
                </div>

            </div>

            {/* NPM */}
            <div>
                <img className='w-36 hover:translate-y-2 duration-700' src={npm} alt="" />

                <div className='my-3 text-xl text-center'>
                    <p>NPM</p> <br />

                    <CountUp
                        start={10}
                        end={70}
                        duration={2.75}
                        className='border-4 p-3 rounded-full'
                    >

                    </CountUp>
                </div>

            </div>

            {/* EXPRESS JS */}
            <div>
                <img className='w-36 hover:translate-y-2 duration-700' src={express} alt="" />

                <div className='my-3 text-xl text-center'>
                    <p>EXPRESS JS</p> <br />

                    <CountUp
                        start={10}
                        end={60}
                        duration={2.75}
                        className='border-4 p-3 rounded-full'
                    >

                    </CountUp>
                </div>

            </div>

            {/* GitHub */}
            <div>
                <img className='w-36 hover:translate-y-2 duration-700' src={github} alt="" />

                <div className='my-3 text-xl text-center'>
                    <p>GitHub</p> <br />

                    <CountUp
                        start={10}
                        end={80}
                        duration={2.75}
                        className='border-4 p-3 rounded-full'
                    >

                    </CountUp>
                </div>

            </div>

            {/* SOCKET IO */}
            <div>
                <img className='w-36 hover:translate-y-2 duration-700' src={socket} alt="" />

                <div className='my-3 text-xl text-center'>
                    <p>SOCKET IO</p> <br />

                    <CountUp
                        start={10}
                        end={40}
                        duration={2.75}
                        className='border-4 p-3 rounded-full'
                    >

                    </CountUp>
                </div>

            </div>


        </div>
        </Marquee>
    );
};

export default KnowledgeIcon;