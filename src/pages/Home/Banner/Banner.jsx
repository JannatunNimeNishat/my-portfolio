
// import b1 from '../../../assets/banner/b1.jpg'

const Banner = () => {
    return (
        // <div className='h-[100vh] border bg-cover bg-center' style={{ backgroundImage: `url("${b1}")` }}>
        <div className='min-h-[97vh] border bg-cover bg-center' >
            {/* <div className='absolute top-0 bottom-0 w-[1080px]  flex items-center  '> */}
            {/* <div className='absolute top-0 bottom-0 w-[1080px]  flex items-center  bg-gradient-to-r from-cyan-500 to-[rgba(21, 21, 21, 1)] '> */}
            <div className='absolute top-0 bottom-0 w-full flex items-center  bg-gradient-to-r from-cyan-500 to-[rgba(21, 21, 21, 1)] '>
                

                    <div className=' pl-5 lg:pl-20 text-white  mt-3'>
                        <h3 className=' text-xl lg:text-7xl font-bold '>Hello <br /> I'm Md. Jannatun Nime</h3>
                        <p className='mt-1 lg:mt-5 mb-4 text-3xl'>MERN stack developer</p>
                    </div>

               
            </div>
        </div>
    );
};

export default Banner;