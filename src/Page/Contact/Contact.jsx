import React, { useEffect, useRef, useState } from 'react';
import bgVideoContact from '../../assets/video (2160p).mp4';
import './Contact.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet-async';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        to_name: '',
        from_name: '',
        message: '',
    });
    const [message, setMessage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_3fumn3s', 'template_ku3d529', form.current, 'ASqDdtT4Ef94GQmxT')
            .then((result) => {
                console.log(result.text);
                setMessage('Message sent successfully.');
                setFormData({
                    to_name: '',
                    from_name: '',
                    message: '',
                });
            })
            .catch((error) => {
                console.error(error.text);
                setMessage('An error occurred while sending the message.');
            });
    };

    useEffect(() => {
        Aos.init({
            offset: 200,
            easing: 'ease-in-sine',
            duration: 600,
        });
    }, []);

    return (
        <div>
            <Helmet>
                <title>Poetry Of Introversion | Contact</title>
            </Helmet>

            <div className="daily-blogs">
                <div className="divider my-20 mx-10 md:text-2xl text-white">Stay In Touch</div>

                <video autoPlay loop muted className="video-backgrounds">
                    <source src={bgVideoContact} type="video/mp4" />
                </video>

                <div className="contents">
                    <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="md:max-w-md md:w-[1000px] bg-black p-10 bg-opacity-50 text-black mx-auto">
                                <label className="block font-bold mb-2 text-white text-xl" htmlFor="to_name">
                                    Name
                                </label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                    id="to_name"
                                    type="text"
                                    name="to_name"
                                    placeholder="Enter your name"
                                    value={formData.to_name}
                                    onChange={handleChange}
                                />

                                <label className="block font-bold mt-4 text-white text-xl" htmlFor="from_name">
                                    Email
                                </label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                    id="from_name"
                                    type="email"
                                    name="from_name"
                                    placeholder="Enter your email"
                                    value={formData.from_name}
                                    onChange={handleChange}
                                />

                                <label className="block font-bold mt-4 text-white text-xl" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                    id="message"
                                    name="message"
                                    placeholder="Enter your message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                />

                                <input
                                    style={{
                                        background: 'linear-gradient(260deg, rgba(239, 13, 121, 1) 0%, rgba(174, 8, 140, 1) 71%)',
                                        color: '#fff',
                                        border: 'none',
                                        padding: '10px 20px',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                    }}
                                    type="submit"
                                    value="Send"
                                    className='w-full mt-2'
                                />
                            </div>
                        </form>
                        {message && <p className="text-white text-center text-xl mt-4">{message}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
