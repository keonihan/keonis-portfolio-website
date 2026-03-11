import Header from '../components/header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin,  faYoutube } from '@fortawesome/free-brands-svg-icons';
import codingProjectData from '../../src/json/projects.json'
import graphicDesignProjectData from '../../src/json/graphic_design_projects.json'
import pikachuImage from '../img/pikachu.png';
import { useState } from 'react';
import type { Project } from '../types/project';

function DesktopHome() {
    let codingProjects: Project[] = codingProjectData.projects
    let graphicDesignProjects: Project[] = graphicDesignProjectData.projects
    // let projects: Project[] = [...codingProjects, ...graphicDesignProjects]

    const [activeId, setActiveId] = useState(null);

    const toggleCard = (id : any) => {
        setActiveId(activeId === id ? activeId : id);
    };
    
    // const videoRef = useRef<HTMLVideoElement>(null);
    // const scrollRef = useRef<HTMLDivElement>(null);
    // const [isMuted, setIsMuted] = useState(true);
    // const toggleMute = () => {
    //     if (videoRef.current) {
    //     videoRef.current.muted = !videoRef.current.muted; 
    //     setIsMuted(videoRef.current.muted); 
    //     }
    // };

    // const scrollLeft = () => {
    //     if(!scrollRef.current) {return}

    //     const style = window.getComputedStyle(scrollRef.current);
    //     const matrix = new DOMMatrix(style.transform);
    //     const currentX = matrix.m41;
    //     let newX = currentX - 200

    //     if (newX < 0) {
    //         newX = 0
    //     }
        

    //     scrollRef.current.style.transform = `translateX(${newX}px)`;
    // };

    // const scrollRight = () => {
    //     if(!scrollRef.current) {return}

    //     const style = window.getComputedStyle(scrollRef.current);
    //     const matrix = new DOMMatrix(style.transform);
    //     const currentX = matrix.m41;
    //     let newX = currentX - 400

    //     if (newX < -400) {
    //         newX = -400
    //     }

    //     console.log(newX)

    //     scrollRef.current.style.transform = `translateX(${newX}px)`;
    // };


    return (
        <>
        <div className="-z-1 bg-gradient-to-r from-black via-black/30 to-transparent fixed top-0 bottom-0 left-0 right-0"></div>
        
        {/* {projects[activeId].video != null && (
            <video key={projects[activeId].video} ref={videoRef} className="-z-2 h-full w-full fixed top-0 bottom-0 left-0 right-0 object-cover" muted={isMuted} autoPlay playsInline>
                <source src={`/video/${projects[activeId].video}.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        )} */}

            {/* // <img src={`/img/${projects[activeId].title.replaceAll("/","")}.png`} className="-z-2 h-full w-full fixed top-0 bottom-0 left-0 right-0 object-cover"></img> */}
        <img src={`/img/Keoni-Hero.png`} className="-z-2 w-full fixed -top-100 h-[160vh] left-0 right-0 object-cover"></img>

        <Header />
        <div className="flex flex-col justify-end mb-5">
            <div className="mt-20 px-16 w-1/2 h-125 flex flex-col justify-center">
                <div className="text-white text-7xl font-[Mazzard]">
                    Keoni Han
                </div>
                
                <div className="pb-5 text-white/90 text-2xl font-[Mazzard-Light]">Web & Software Developer</div>

                <div className="flex flex-row gap-3 justify-start items-start">
                    <a href="https://github.com/keonihan"  className='group' target='_blank'>
                        <button className="cursor-pointer text-black text-2xl rounded-xl bg-white p-4 flex-row flex font-[Mazzard] ">
                            <FontAwesomeIcon className='p-0 m-0 group-hover:text-[#8534F3] group-focus:bg-black' icon={faGithub} />
                        </button>
                    </a>
                    <a href="https://www.youtube.com/c/KeoniHan" className='group' target='_blank'>
                        <button className="cursor-pointer text-black text-2xl rounded-xl bg-white p-4 flex-row flex font-[Mazzard]  group-focus:bg-black">
                            <FontAwesomeIcon className='p-0 m-0 text-black group-hover:text-[#FF0000]' icon={faYoutube} />
                        </button>
                    </a>

                    <a href="linkedin.com/in/keonihan"  className='group' target='_blank'>
                        <button className="cursor-pointer text-black text-2xl rounded-xl bg-white p-4 flex-row flex font-[Mazzard] group-focus:bg-black">
                            <FontAwesomeIcon className='p-0 m-0 text-black group-hover:text-[#0A66C2]' icon={faLinkedin} />
                        </button>
                    </a>
                </div>

                
                
            </div>
            <div className="px-16 w-full overflow-x-hidden flex flex-col h-[400px]">
                <div className="text-white/85 text-xl font-[Mazzard-Light] font-extrabold">Coding Projects</div>

                    {/* <FontAwesomeIcon  className='cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 z-10 text-white text-2xl' icon={faArrowLeft} /> */}
                    <div className="transition-transform duration-500 flex flex-row h-full min-w-full max-w-full flex-nowrap justify-start gap-2">
                    {codingProjects.map((project) => {
                        const isActive = activeId === project.id;
                        return (<>
                            <div className={`${isActive ? 'w-135 drop-shadow-2xl' : ''} relative overflow-hidden hover:w-135 hover:h-full shrink-0 cursor-pointer duration-350 ease-in-out w-65 px-4 py-4 rounded-lg flex flex-col justify-end `} 
                                style={{ backgroundImage: `url(${pikachuImage})`}} 
                                onClick={() => {
                                    toggleCard(project.id)
                                }}>
                                    <img className='object-cover w-full h-full absolute left-0 top-0 bottom-0 ' src={`/img/${project.title.replaceAll("/","")}.png`}></img>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                                    <p className="font-[Mazzard] text-white text-lg absolute line-clamp-1">{project.title}</p>
                            </div>
                        </>)
                    })}
                </div>
            </div>
            <div className="px-16 w-full overflow-x-hidden flex flex-col h-[400px]">
                <div className="font-[Mazzard] text-white text-4xl">Graphic Design</div>
                <div className="flex flex-row h-full min-w-full max-w-full flex-nowrap no-scrollbar  justify-start gap-2">
                    {graphicDesignProjects.map((project) => {
                        const isActive = activeId === project.id;
                        return (<>
                            <div className={`${isActive ? 'w-135' : ''} relative  overflow-hidden hover:w-135  shrink-0 cursor-pointer duration-350 ease-in-out w-65 px-4 py-4 rounded-lg flex flex-col justify-end`} 
                                onClick={() => {
                                    toggleCard(project.id)
                                }}>
                                    <img className='object-cover w-full h-full absolute left-0 top-0 bottom-0' src={`/img/${project.title.replaceAll("/","")}.png`}></img>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                                    <p className="font-[Mazzard] text-white text-lg absolute line-clamp-1">{project.title}</p>
                            </div>
                        </>)
                    })}
                </div>
            </div>
           
            </div>
        </>
    )
}

export default DesktopHome;