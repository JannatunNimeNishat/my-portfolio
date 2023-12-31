
// import b1 from '../../../assets/banner/b1.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Banner = () => {

    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div className=' min-h-[100vh] w-full  bg-cover bg-center' id="banner" >
            
            {/* <div className='absolute top-0 bottom-0 w-full flex items-center  bg-gradient-to-r from-cyan-500 to-[rgba(21, 21, 21, 1)] '> */}
            <div className='absolute top-0 bottom-0 w-full flex items-center  bg-gradient-to-r from-cyan-500 to-blue-500 '>
                

                    <div className=' pl-5 lg:pl-20 text-white  mt-3' data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
                        <h3 className=' text-xl lg:text-7xl font-bold '>Hello <br /> I'm Md. Jannatun Nime</h3>
                        <p className='mt-1 lg:mt-5 mb-4 text-2xl lg:text-3xl'>MERN stack developer</p>
                    </div>

               
            </div>
        </div>
    );
};

export default Banner;