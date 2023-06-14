import Button from "../../../../../components/Button/Button";


const Navbar = () => {

    const navItems = <>
        <li><a href="#banner">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#education" >Education</a></li>
        <li><a href="#projects" >Projects</a></li>
        <li><a href="#contact" >Contact</a></li>
        

    </>



    return (
        <div className="navbar  w-full bg-black text-white fixed z-10 max-w-screen  bg-opacity-30  ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                        {navItems}
                     
                    </ul>
                </div>
                <a className="btn btn-ghost  text-xl capitalize">Md. Jannatun Nime Nishat</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                        {navItems}
                </ul>
            </div>
            <div className="navbar-end"  onClick={() => {window.open("https://drive.google.com/file/d/1m4-imPm8TCPHA2D8_Xn8LotlZeYCXgug/view", "_blank");}}>
                {/* <a className="btn ">Resume</a> */}
                <Button btn_text='Resume'></Button>
            </div>
        </div>
    );
};

export default Navbar;