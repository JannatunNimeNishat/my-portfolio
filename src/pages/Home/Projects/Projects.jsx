
import p1 from '../../../assets/projects/p1.png'
import p2 from '../../../assets/projects/p2.png'
import p3 from '../../../assets/projects/p3.png'
import { FaGithub } from "react-icons/fa";
import { VscLiveShare } from "react-icons/vsc";
import { FiFolder } from "react-icons/fi";
const Projects = () => {
    return (
        <div className="bg-black text-white pt-10 ">
            <div className="px-20 py-16">
                <h3 className="text-5xl capitalize my-text">Projects</h3>
                {/* 1st */}
                <div className="mt-10 ">
                    <div className='grid grid-cols-6 gap-5  text-right'>
                        <div className='col-span-4'>
                            <img src={p1} alt="" />
                        </div>
                        <div className='col-span-2'>
                            <h4 className='my-text text-2xl font-semibold'>Full-Stack Project</h4>
                            <h3 className='text-2xl font-bold mt-4'>Language Learning Website</h3>
                            <p className='bg-[#313741] mt-5 p-5 -ml-28 rounded '>
                                Language Care is a summer camp online language learning platform. It allows students to enroll and learn specific languages they want to learn. It is a role bases website. There are three types of roles available student, instructor, and admin.
                            </p>
                            <p className='font-semibold mt-5'>React, Express, MonogoDB, Firebase, JWT</p>
                            <div className='flex gap-5 mt-4 justify-end'>
                                <FaGithub className='w-6 h-6' />
                                <VscLiveShare className='w-6 h-6' />
                            </div>
                        </div>
                    </div>
                </div>
                {/* 2nd */}
                <div className="mt-10 ">
                    <div className='grid grid-cols-6 gap-5  text-right'>
                        <div className='col-span-4'>
                            <img src={p2} alt="" />
                        </div>
                        <div className='col-span-2'>
                            <h4 className='my-text text-2xl font-semibold'>Full-Stack Project</h4>
                            <h3 className='text-2xl font-bold mt-4'>Bricks-Universe Toy MarketPlace</h3>
                            <p className='bg-[#313741] mt-5 p-5 -ml-28 rounded '>
                                Bricks Universe is an online lego shop. Where we just not sell lego, we are trying to give a medium so that childing can enhance their creative mind. An authentication system is implemented along with social login. Search, Cart, and other necessary system is implemented.
                            </p>
                            <p className='font-semibold mt-5'>React, React-route-dom, MongoDB, Express, Firebase, JWT, Formik, TailwindCSS</p>
                            <div className='flex gap-5 mt-4 justify-end'>
                                <a target="_blank" rel="noreferrer" href="https://github.com/JannatunNimeNishat/bricks-universe-client" ><FaGithub className='w-6 h-6' /></a>
                                <a target="_blank" rel="noreferrer" href="https://bricks-universe.web.app/" ><VscLiveShare className='w-6 h-6' /></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 3rd */}
                <div className="mt-10 ">
                    <div className='grid grid-cols-6 gap-5  text-right'>
                        <div className='col-span-4 border'>
                            <img src={p3} alt="" />
                        </div>
                        <div className='col-span-2'>
                            <h4 className='my-text text-2xl font-semibold'>Full-Stack Project</h4>
                            <h3 className='text-2xl font-bold mt-4'>Italian-Delicacy Food Recipe Website</h3>
                            <p className='bg-[#313741] mt-5 p-5 -ml-28 rounded '>
                                Italian-Delicacy is a food Italian food recipe website. It shows best quality italian food recipes, which are traditionally made and presented with care. It has a authentication system, chafe wise recipes, add liked system etc.
                            </p>
                            <p className='font-semibold mt-5'>React, React-route-dom, Express, Firebase, Formik, TailwindCSS</p>
                            <div className='flex gap-5 mt-4 justify-end'>
                                <a target="_blank" rel="noreferrer" href="https://github.com/JannatunNimeNishat/italian-delicacy-client" ><FaGithub className='w-6 h-6' /></a>
                                <a target="_blank" rel="noreferrer" href="https://italian-delicacy.web.app/" ><VscLiveShare className='w-6 h-6' /></a>
                            </div>
                        </div>
                    </div>
                </div>


                <h3 className="text-4xl capitalize my-text text-center mt-20">Other Projects</h3>
                <div className='grid grid-cols-3 gap-8 mt-16'>
                {/* 1st */}
                    <div className='bg-[#313741] py-7 px-7'>
                        <div className='flex gap-5 justify-between '>
                            <FiFolder className='w-8 h-8' />
                            <div className='flex gap-5 '>
                                <a target="_blank" rel="noreferrer" href="https://github.com/JannatunNimeNishat/bistro-boss-client" ><FaGithub className='w-6 h-6' /></a>
                                <a target="_blank" rel="noreferrer" href="https://bistro-boss-5cadd.web.app/" ><VscLiveShare className='w-6 h-6' /></a>
                            </div>
                        </div>
                        <h3 className='mt-8 text-2xl font-bold'>Bistor Boss</h3>
                        <p className='mt-3'>Bistor Boss is a full stack website. It has an authentication system, user can see featured menu, chef recommend foods, order food, pay his bill with stripe payment system, and many more </p>
                        <p className='mt-5'>React, React-route-dom,axios ,MongoDB, Express, Stripe ,Firebase, JWT, Formik, TailwindCSS</p>

                    </div>
                {/* 2nd */}
                    <div className='bg-[#313741] py-7 px-7'>
                        <div className='flex gap-5 justify-between '>
                            <FiFolder className='w-8 h-8' />
                            <div className='flex gap-5 '>
                                <a target="_blank" rel="noreferrer" href="https://github.com/JannatunNimeNishat/car-doctor-client" ><FaGithub className='w-6 h-6' /></a>
                                <a target="_blank" rel="noreferrer" href="https://cars-doctor-6e443.web.app/" ><VscLiveShare className='w-6 h-6' /></a>
                            </div>
                        </div>
                        <h3 className='mt-8 text-2xl font-bold'>Car Doctor</h3>
                        <p className='mt-3'>Car Doctor is a website. It has an authentication system, user can see all the available service, book a services, etc. </p>
                        <p className='mt-5'>React, React-route-dom,MongoDB ,Firebase, JWT, TailwindCSS</p>

                    </div>
                {/* 3rd */}
                    <div className='bg-[#313741] py-7 px-7'>
                        <div className='flex gap-5 justify-between '>
                            <FiFolder className='w-8 h-8' />
                            <div className='flex gap-5 '>
                                <a target="_blank" rel="noreferrer" href="https://github.com/JannatunNimeNishat/ni7-coffee-store-espresso-client" ><FaGithub className='w-6 h-6' /></a>
                                <a target="_blank" rel="noreferrer" href="https://espresso-emporium-62a6f.web.app/" ><VscLiveShare className='w-6 h-6' /></a>
                            </div>
                        </div>
                        <h3 className='mt-8 text-2xl font-bold'>Espresso Emporium</h3>
                        <p className='mt-3'>Espresso Emporium is a full stack website. It has an CRUD system using MongoDb, Express.js. User can add, edit, delete and update a coffee </p>
                        <p className=' mt-5'>React, React-route-dom, MongoDb ,Express, TailwindCSS</p>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Projects;