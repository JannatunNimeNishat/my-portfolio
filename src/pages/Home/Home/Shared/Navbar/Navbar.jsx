import Button from "../../../../../components/Button/Button";


const Navbar = () => {

    const navItems = <>

        <li className=" hover:bg-white"><a  href="#banner">Home</a></li>
        <li className=" hover:bg-white"><a href="#about">About</a></li>
        <li className=" hover:bg-white"><a href="#education" >Education</a></li>
        <li className=" hover:bg-white"><a href="#skill" >Skill</a></li>
        <li className=" hover:bg-white"><a href="#projects" >Projects</a></li>
        <li className=" hover:bg-white"><a href="#contact" >Contact</a></li>
        

    </>



    return (
        <div className="navbar   bg-black text-white  mx-auto  fixed z-10     bg-opacity-30  ">
            <div className="navbar-start">
                <div className="dropdown ">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow   rounded-box w-52">
                        {navItems}
                     
                    </ul>
                </div>
                <a className="btn btn-ghost pt-2 hidden lg:inline-block   text-xl capitalize">Jannatun Nime Nishat</a>
                <a className="btn btn-ghost  lg:hidden   text-xl capitalize">Jannatun </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">
                        {navItems}
                </ul>
            </div>
            <div className="navbar-end "  onClick={() => {window.open("https://drive.google.com/file/d/1m4-imPm8TCPHA2D8_Xn8LotlZeYCXgug/view", "_blank");}}>
                <Button btn_text='Resume'></Button>
            </div>
            {/* <a className="btn ">Resume</a> */}
        </div>
    );
};

export default Navbar;