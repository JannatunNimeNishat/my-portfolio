
import { useEffect } from 'react';
import a3 from '../../../assets/about/a3.jpg'
import Button from '../../../components/Button/Button';

import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {

    useEffect(() => {
        AOS.init();
      }, [])


    return (
        // <div className="bg-black text-white py-16 " id='about'>
        <div className="bg-[#22252c] text-white py-5 lg:py-16 " id='about' >

            <div className=" px-5 lg:px-28 py-8 lg:py-28 grid grid-cols-1 lg:grid-cols-6 gap-5" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
                <div className='lg:col-span-2 '>
                    <img src={a3} alt="" />
                </div>
                <div className='lg:col-span-4 mt-5 lg:mt-0  ml-2 lg:ml-20 w-full '>
                    <h3 className='text-2xl lg:text-5xl capitalize my-text'>about me</h3>
                    <p className='mt-8'>I am a motivated and aspiring junior Frontend Developer with a strong foundation in frontend technologies. With a keen eye
                        for detail and a passion for creating visually appealing and user-friendly applications. I am eager to contribute my skills to a
                        collaborative team environment. And continuously seeking opportunities to grow and learn.</p>


                    <p className='mt-8'> A few  technologies I’ve been working with recently:</p>
                    <div className='flex  gap-10 ml-5 mt-3'>
                        <ul className='list-disc'>
                            <li>React Js</li>
                            <li>Express JS
                                <li>Node.js</li>

                            </li>
                        </ul>
                        <ul className='list-disc'>
                            <li>JavaScript</li>
                            <li>Tailwind CSS</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>

                    <div className='mt-10' onClick={() => {window.open("https://drive.google.com/file/d/1m4-imPm8TCPHA2D8_Xn8LotlZeYCXgug/view", "_blank");}}>
                        <Button btn_text='Download Resume'></Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;