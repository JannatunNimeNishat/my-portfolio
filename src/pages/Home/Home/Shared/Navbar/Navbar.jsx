

const Navbar = () => {

    const navItems = <>
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Education</a></li>
      
        <li><a>Projects</a></li>
        <li><a>Contact</a></li>
        

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
            <div className="navbar-end">
                <a className="btn">Resume</a>
            </div>
        </div>
    );
};

export default Navbar;