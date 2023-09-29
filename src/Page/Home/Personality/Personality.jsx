import React, { useState } from 'react';
import CountUp from 'react-countup';


const Personality = () => {


    return (
        <div>
            <div className="divider my-20 mx-10 text-2xl">My Personality</div>

            <div className='grid md:grid-cols-3 gap-10 mx-10 text-center mb-10 text-2xl'>

                <div className='shadow-lg p-5'>
                    <center>
                        <img className='w-[100%] mb-3' src="https://img.freepik.com/free-photo/close-up-cheerful-small-blonde-haired-girl-with-blue-eyes-holding-hair-with-hands-looking-aside-with-happy-relaxed-expression_176420-10177.jpg?w=740&t=st=1695921730~exp=1695922330~hmac=2003a1f40e71f122a585524de03b0137d0cca5d822c8a6d0a4986ebfa9345806" alt="" />
                    </center>
                    <p>Innocence</p>
                    <CountUp
                        start={10}
                        end={80}
                        duration={2.75}
                    >
                        {({ countUpRef, start }) => (
                            <div>
                                <span ref={countUpRef} /> <br />
                                <button className='btn btn-warning' onClick={start}>Start</button>
                            </div>
                        )}
                    </CountUp>
                </div>


                <div className='shadow-lg p-5'>
                    <center>
                        <img className='w-[100%] mb-3' src="https://img.freepik.com/free-photo/close-up-cheerful-small-blonde-haired-girl-with-blue-eyes-holding-hair-with-hands-looking-aside-with-happy-relaxed-expression_176420-10177.jpg?w=740&t=st=1695921730~exp=1695922330~hmac=2003a1f40e71f122a585524de03b0137d0cca5d822c8a6d0a4986ebfa9345806" alt="" />
                    </center>
                    <p>Innocence</p>
                    <CountUp
                        start={10}
                        end={80}
                        duration={2.75}
                    >
                        {({ countUpRef, start }) => (
                            <div>
                                <span ref={countUpRef} /> <br />
                                <button className='btn btn-warning' onClick={start}>Start</button>
                            </div>
                        )}
                    </CountUp>
                </div>

                <div className='shadow-lg p-5'>
                    <center>
                        <img className='w-[100%] mb-3' src="https://img.freepik.com/free-photo/close-up-cheerful-small-blonde-haired-girl-with-blue-eyes-holding-hair-with-hands-looking-aside-with-happy-relaxed-expression_176420-10177.jpg?w=740&t=st=1695921730~exp=1695922330~hmac=2003a1f40e71f122a585524de03b0137d0cca5d822c8a6d0a4986ebfa9345806" alt="" />
                    </center>
                    <p>Innocence</p>
                    <CountUp
                        start={10}
                        end={80}
                        duration={2.75}
                    >
                        {({ countUpRef, start }) => (
                            <div>
                                <span ref={countUpRef} /> <br />
                                <button className='btn btn-warning' onClick={start}>Start</button>
                            </div>
                        )}
                    </CountUp>
                </div>

                <div className='shadow-lg p-5'>
                    <center>
                        <img className='w-[100%] mb-3' src="https://img.freepik.com/free-photo/close-up-cheerful-small-blonde-haired-girl-with-blue-eyes-holding-hair-with-hands-looking-aside-with-happy-relaxed-expression_176420-10177.jpg?w=740&t=st=1695921730~exp=1695922330~hmac=2003a1f40e71f122a585524de03b0137d0cca5d822c8a6d0a4986ebfa9345806" alt="" />
                    </center>
                    <p>Innocence</p>
                    <CountUp
                        start={10}
                        end={80}
                        duration={2.75}
                    >
                        {({ countUpRef, start }) => (
                            <div>
                                <span ref={countUpRef} /> <br />
                                <button className='btn btn-warning' onClick={start}>Start</button>
                            </div>
                        )}
                    </CountUp>
                </div>

                <div className='shadow-lg p-5'>
                    <center>
                        <img className='w-[100%] mb-3' src="https://img.freepik.com/free-photo/close-up-cheerful-small-blonde-haired-girl-with-blue-eyes-holding-hair-with-hands-looking-aside-with-happy-relaxed-expression_176420-10177.jpg?w=740&t=st=1695921730~exp=1695922330~hmac=2003a1f40e71f122a585524de03b0137d0cca5d822c8a6d0a4986ebfa9345806" alt="" />
                    </center>
                    <p>Innocence</p>
                    <CountUp
                        start={10}
                        end={80}
                        duration={2.75}
                    >
                        {({ countUpRef, start }) => (
                            <div>
                                <span ref={countUpRef} /> <br />
                                <button className='btn btn-warning' onClick={start}>Start</button>
                            </div>
                        )}
                    </CountUp>
                </div>

                <div className='shadow-lg p-5'>
                    <center>
                        <img className='w-[100%] mb-3' src="https://img.freepik.com/free-photo/close-up-cheerful-small-blonde-haired-girl-with-blue-eyes-holding-hair-with-hands-looking-aside-with-happy-relaxed-expression_176420-10177.jpg?w=740&t=st=1695921730~exp=1695922330~hmac=2003a1f40e71f122a585524de03b0137d0cca5d822c8a6d0a4986ebfa9345806" alt="" />
                    </center>
                    <p>Innocence</p>
                    <CountUp
                        start={10}
                        end={80}
                        duration={2.75}
                    >
                        {({ countUpRef, start }) => (
                            <div>
                                <span ref={countUpRef} /> <br />
                                <button className='btn btn-warning' onClick={start}>Start</button>
                            </div>
                        )}
                    </CountUp>
                </div>

            </div>
        </div>
    );
};

export default Personality;