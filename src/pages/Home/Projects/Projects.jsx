
import p1 from '../../../assets/projects/p1.png'
import p2 from '../../../assets/projects/p2.png'
import p3 from '../../../assets/projects/p3.png'
import { FaGithub } from "react-icons/fa";
import { VscLiveShare } from "react-icons/vsc";
import { FiFolder } from "react-icons/fi";
const Projects = () => {

    return (
        <div className="bg-[#313741] text-white py-12  " id='projects'>
            <div className=" px-5 lg:px-20 py-8 lg:py-16">

                <h3 className="text-5xl capitalize my-text">Projects</h3>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16'>
                    {/* 1st */}
                    <div className='bg-[#22252c] py-7 px-7 rounded-lg '>
                        <div>
                            <img className='' src={p1} alt="" />
                        </div>

                        <div className=''>
                            <h3 className='mt-8 text-2xl font-bold'>Language Care</h3>
                            <p className='mt-3'>Language Care is a summer camp online language learning platform. It allows students to enroll and learn specific languages they want to learn. It is a role bases website. There are three types of roles available student, instructor, and admin. </p>


                            <div className='flex gap-5 mt-4 justify-start'>
                                <a target="_blank" rel="noreferrer" href="https://github.com/JannatunNimeNishat/language-care-client" ><FaGithub className='w-6 h-6' /></a>
                                <a target="_blank" rel="noreferrer" href="https://language-care.web.app/" ><VscLiveShare className='w-6 h-6' /></a>
                            </div>

                            <p className='font-semibold mt-5 '>React, Express, MonogoDB, Stripe, Firebase</p>

                        </div>

                    </div>
                    {/* 2nd */}
                    <div className='bg-[#22252c] py-7 px-7 rounded-lg'>
                        <div>
                            <img className='' src={p2} alt="" />
                        </div>

                        <div>
                            <h3 className='mt-8 text-2xl font-bold'>Bricks Universe </h3>
                            <p className='mt-3'>Bricks Universe is an online lego shop. Where we just not sell lego, we are trying to give a medium so that childing can enhance their creative mind. An authentication system is implemented along with social login. Search, Cart, and other necessary system is implemented. </p>


                            <div className='flex gap-5 mt-4 justify-start'>
                                <a target="_blank" rel="noreferrer" href="https://github.com/JannatunNimeNishat/bricks-universe-client" ><FaGithub className='w-6 h-6' /></a>
                                <a target="_blank" rel="noreferrer" href="https://bricks-universe.web.app/" ><VscLiveShare className='w-6 h-6' /></a>
                            </div>
                            <p className='font-semibold mt-5'>React, Express, MonogoDB, Firebase</p>

                        </div>

                    </div>
                    {/* 3rd */}
                    <div className='bg-[#22252c] py-7 px-7 rounded-lg'>
                        <div>
                            <img className='' src={p3} alt="" />
                        </div>

                        <div>
                            <h3 className='mt-8 text-2xl font-bold'>Italian-Delicacy </h3>
                            <p className='mt-3'>Italian-Delicacy is a food Italian food recipe website. It shows best quality italian food recipes, which are traditionally made and presented with care. It has a authentication system, chafe wise recipes, add liked system etc. </p>


                            <div className='flex gap-5 mt-4 justify-start'>
                                <a target="_blank" rel="noreferrer" href="https://github.com/JannatunNimeNishat/italian-delicacy-client" ><FaGithub className='w-6 h-6' /></a>
                                <a target="_blank" rel="noreferrer" href="https://italian-delicacy.web.app/" ><VscLiveShare className='w-6 h-6' /></a>
                            </div>
                            <p className='font-semibold mt-5'>React, Express, Firebase, JWT</p>

                        </div>

                    </div>


                </div>



                <h3 className="text-4xl capitalize my-text text-center mt-36">Other Noteworthy Projects</h3>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16'>
                    {/* 1st */}
                    <div className='bg-[#22252c] py-7 px-7 rounded-lg'>
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
                    <div className='bg-[#22252c] py-7 px-7 rounded-lg'>
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
                    <div className='bg-[#22252c] py-7 px-7 rounded-lg'>
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