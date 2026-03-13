import { useState } from "react";
import { faBarsStaggered, faBriefcase, faClose, faDiagramProject, faHome, faPhone, faTools } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DesktopHome from "./desktop/DesktopHome";
import MobileHome from "./mobile/MobileHome";
import Experience from "./experience";
import { useWebHaptics } from "web-haptics/react";

function MobileViewer() {
    const [minimize, setMinimize] = useState(true);
    const [overflow, setOverflow] = useState(false);
    const [currentPage, setCurrentPage] = useState("home")
    const rootElement = document.getElementById('root');
    
    const { trigger } = useWebHaptics();

    const toggleOverflow = () => {
        if (overflow) {
            rootElement?.classList.remove("overflow-x-hidden");
            // document.body.classList.remove('overflow-y-hidden');
            setOverflow(!overflow)
        }
        else {
            rootElement?.classList.add("overflow-x-hidden");
            // document.body.classList.add('overflow-y-hidden');
            setOverflow(!overflow)
        }
    };

    return(<>
        <div className="md:hidden">
            <div className={`${!minimize ? 'opacity-100 ' : 'opacity-0 '}  transition-opacity duration-1000 scale-[0.85] overflow-hidden font-[Mazzard] text-4xl text-white gap-10 flex flex-col h-screen fixed left-[45%] w-[85%] -translate-x-1/2`}>
                        <button className="flex-row flex justify-end">
                            <FontAwesomeIcon className='p-8 m-0 text-4xl cursor-pointer' icon={faClose}  onClick={()=> {toggleOverflow(), setMinimize(!minimize)}} />
                        </button>
                        <button className="flex-row flex cursor-pointer" onClick={()=> {
                        trigger("success")
                        setCurrentPage("home"),
                        toggleOverflow(),
                        setMinimize(!minimize)
                        }}>
                            <FontAwesomeIcon className='p-0 m-0 text-4xl' icon={faHome} />
                            <p> &nbsp;&nbsp;&nbsp;Home</p>
                        </button>
                        <button className="flex-row flex cursor-pointer" onClick={()=> {
                        trigger("success")
                        setCurrentPage("experience")
                        toggleOverflow(),
                        setMinimize(!minimize)
                        }}>
                            <FontAwesomeIcon className='p-0 m-0 text-4xl' icon={faBriefcase} />
                            <p> &nbsp;&nbsp;&nbsp;Experience</p>
                        </button>
                        <button className="flex-row flex cursor-pointer">
                            <FontAwesomeIcon className='p-0 m-0 text-4xl' icon={faTools} />
                            <p> &nbsp;&nbsp;&nbsp;Skills</p>
                        </button>
                        <button className="flex-row flex cursor-pointer">
                            <FontAwesomeIcon className='p-0 m-0 text-4xl' icon={faDiagramProject} />
                            <p> &nbsp;&nbsp;&nbsp;Projects</p>
                        </button>
                        <button className="flex-row flex cursor-pointer">
                            <FontAwesomeIcon className='p-0 m-0 text-4xl' icon={faPhone} />
                            <p> &nbsp;&nbsp;&nbsp;Contact Me</p>
                        </button>
                    </div>
                    
                    <div className={`${minimize ? 'scale-[1.0] ' : 'scale-[0.85] translate-x-3/4 pointer-events-none '} relative bg-transparent transition-all duration-500 ease-in-out rounded-2xl drop-shadow-2xl`}>
                        <button className="text-white cursor-pointer fixed top-0 left-0 m-5 p-3 z-4 " onClick={() => {setMinimize(!minimize), toggleOverflow(),trigger("success")}}>
                            <FontAwesomeIcon className='p-0 m-0 text-4xl' icon={faBarsStaggered} />
                        </button>
                        
                        {
                            (() => {
                                switch(currentPage) {
                                case 'home':
                                    return <MobileHome />;
                                case 'experience':
                                    // return <Experience />;
                                case 'skills':
                                    // return <About />;
                                case 'projects':
                                    // return <About />;
                                case 'contact':
                                    // return <About />;
                                default:
                                    return <MobileHome />;
                                }
                            })() // These parentheses call the function immediately
                        }
                </div>
        </div>
        <div className="hidden lg:block">
            {
                (() => {
                    switch(currentPage) {
                    case 'home':
                        return <DesktopHome />;
                    case 'experience':
                        return <Experience />;
                    case 'skills':
                        // return <About />;
                    case 'projects':
                        // return <About />;
                    case 'contact':
                        // return <About />;
                    default:
                        return <DesktopHome />;
                    }
                })() // These parentheses call the function immediately
            }
        </div>
        <div className="">
            <img src={`/img/Keoni-Hero.png`} className={`${!minimize ? 'opacity-20 ' : 'opacity-0 '} -z-2 w-full fixed -top-100 h-[160vh] left-0 right-0 object-cover transition-opacity duration-780`}></img>
        </div>

    </>) 
}

export default MobileViewer;