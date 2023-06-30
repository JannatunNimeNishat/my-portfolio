import { useState } from "react";

const Skills = () => {

    const [openTab, setOpenTab] = useState(1);


    return (
        <div className="bg-[#22252c] text-white py-20 h-[100vh]" id="">
            <div className="px-20 py-5">
                <h3 className="text-5xl capitalize my-text">Skills</h3>


                <>
                    <div className="flex flex-wrap mt-16">
                        <div className="w-full">
                            <ul
                                className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                                role="tablist"
                            >
                                <li className="-mb-px mr-2 last:mr-0 flex-auto text-left">
                                    <a
                                        className={
                                            "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                            (openTab === 1
                                                ? "my-text"
                                                : "text-" + "white" + "-600 ")
                                        }
                                        onClick={e => {
                                            e.preventDefault();
                                            setOpenTab(1);
                                        }}
                                        data-toggle="tab"
                                        href="#link1"
                                        role="tablist"
                                    >
                                        Frontend
                                    </a>
                                </li>
                                <li className="-mb-px mr-2 last:mr-0 flex-auto text-left">
                                    <a
                                        className={

                                            "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                            (openTab === 2
                                                ? "my-text"
                                                : "text-" + "white" + "-600 ")

                                        }
                                        onClick={e => {
                                            e.preventDefault();
                                            setOpenTab(2);
                                        }}
                                        data-toggle="tab"
                                        href="#link2"
                                        role="tablist"
                                    >
                                        Backend
                                    </a>
                                </li>
                                <li className="-mb-px mr-2 last:mr-0 flex-auto text-left">
                                    <a
                                        className={
                                            "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                            (openTab === 3
                                                ? "my-text"
                                                : "text-white ")
                                        }
                                        onClick={e => {
                                            e.preventDefault();
                                            setOpenTab(3);
                                        }}
                                        data-toggle="tab"
                                        href="#link3"
                                        role="tablist"
                                    >
                                        Others
                                    </a>
                                </li>
                            </ul>
                            <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded">
                                <div className="px-4 py-5 flex-auto">
                                    <div className="tab-content tab-space">


                                        <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                            <div className="grid grid-cols-2 gap-x-20 gap-y-5 mt-3">
                                                <div>
                                                    <h3>HTML 5</h3>
                                                    <progress className="progress progress-info bg-black  w-full" value={85} max="100"></progress>
                                                </div>
                                                <div>
                                                    <h3>CSS 3</h3>
                                                    <progress className="progress progress-info bg-black  w-full" value={80} max="100"></progress>
                                                </div>
                                                <div>
                                                    <h3>Bootstrap</h3>
                                                    <progress className="progress progress-info bg-black  w-full" value={75} max="100"></progress>
                                                </div>
                                                <div>
                                                    <h3>Tailwind</h3>
                                                    <progress className="progress progress-info bg-black  w-full" value={80} max="100"></progress>
                                                </div>
                                                <div>
                                                    <h3>ReactJS</h3>
                                                    <progress className="progress progress-info bg-black  w-full" value={85} max="100"></progress>
                                                </div>
                                            </div>
                                        </div>



                                        <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                            <div className="grid grid-cols-2 gap-x-20 gap-y-5 mt-3">
                                                <div>
                                                    <h3>NodeJs</h3>
                                                    <progress className="progress progress-info bg-black  w-full" value={75} max="100"></progress>
                                                </div>
                                                <div>
                                                    <h3>ExpressJS</h3>
                                                    <progress className="progress progress-info bg-black  w-full" value={80} max="100"></progress>
                                                </div>
                                                <div>
                                                    <h3>MongoDB</h3>
                                                    <progress className="progress progress-info bg-black  w-full" value={70} max="100"></progress>
                                                </div>

                                            </div>
                                        </div>
                                        <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                            <div className="grid grid-cols-2 gap-x-20 gap-y-5 mt-3">
                                                <div>
                                                    <h3>MySql</h3>
                                                    <progress className="progress progress-info bg-black  w-full" value={75} max="100"></progress>
                                                </div>
                                                <div>
                                                    <h3>Firebase</h3>
                                                    <progress className="progress progress-info bg-black  w-full" value={65} max="100"></progress>
                                                </div>
                                                <div>
                                                    <h3>JWT</h3>
                                                    <progress className="progress progress-info bg-black  w-full" value={65} max="100"></progress>
                                                </div>
                                                <div>
                                                    <h3>C</h3>
                                                    <progress className="progress progress-info bg-black  w-full" value={70} max="100"></progress>
                                                </div>
                                                <div>
                                                    <h3>C++</h3>
                                                    <progress className="progress progress-info bg-black  w-full" value={70} max="100"></progress>
                                                </div>
                                                <div>
                                                    <h3>JAVA</h3>
                                                    <progress className="progress progress-info bg-black  w-full" value={65} max="100"></progress>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>


               



            </div>
        </div>
    );
};

export default Skills;