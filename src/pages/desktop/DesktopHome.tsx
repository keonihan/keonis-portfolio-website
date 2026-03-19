import Header from '../../components/header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin,  faSpotify,  faYoutube } from '@fortawesome/free-brands-svg-icons';
import codingProjectData from '../../json/projects.json'
import graphicDesignProjectData from '../../json/graphic_design_projects.json'
import { useState } from 'react';
import type { Project } from '../../types/project';
import { faAngleLeft, faAngleRight, faWindowClose } from '@fortawesome/free-solid-svg-icons';

function DesktopHome() {
    let codingProjects: Project[] = codingProjectData.projects
    let graphicDesignProjects: Project[] = graphicDesignProjectData.projects
    let projects: Project[] = [...codingProjects, ...graphicDesignProjects]

    const [activeId, setActiveId] = useState(null);

    const toggleCard = (id : any) => {
        setActiveId(activeId === id ? activeId : id);
    };

    function scrollRow(rowId : string, distance : number) {
        const row = document.getElementById(rowId);
        if (row != null) {
            row.scrollBy({
                left: distance,
                behavior: 'smooth'
            });
        }
    }

    return (
        <>
                        <div className={`${activeId != null ? 'opacity-[1.0] pointer-events-auto' : ' opacity-0 pointer-events-none'} z-1 inset-0 bg-black/70 fixed top-0 bottom-0 left-0 right-0`}></div>
        <div className={`${activeId != null ? 'opacity-[1.0] pointer-events-auto' : ' opacity-0 pointer-events-none'}  z-2 font-[Mazzard] ease-in-out drop-shadow-xl drop-shadow-[#000000] transition-opacity duration-435 fixed translate-x-1/2  rounded-xl  w-1/2 h-10/11 top-0  bg-black text-white`}>
                           
                           
                            {activeId !== null && (
                            <>
                            <div id="homeCard" className='flex flex-col'>
                            <button onClick={() => {setActiveId(null);}} className="fixed leading-[0] right-0 z-7 align-middle m-5 rounded-4xl cursor-pointer focus:bg-black">
                                <FontAwesomeIcon className='p-0 m-0 text-4xl' icon={faWindowClose} />
                            </button>
                                {projects[activeId].video == null && (
                                    <>
                                        <div className="z-3 bg-gradient-to-t pointer-events-none from-black via-black/20 to-transparent h-[461px] rounded-2xl fixed top-0 bottom-100 left-0 right-0"></div>
                                        <img src={`/img/${projects[activeId].title.replaceAll("/","")}.webp`} className="sticky h-[460px] rounded-2xl top-0 object-cover w-full"></img>
                                    </>
                                )}
                                {projects[activeId].video != null && (
                                    <>
                                        <div className="z-3 bg-gradient-to-t pointer-events-none from-black via-black/10 to-transparent h-[460px] w-full fixed top-0 bottom-0 left-0 right-0"></div>
                                        <video key={projects[activeId].video} className="sticky h-[460px] w-full top-0 object-cover" autoPlay playsInline>
                                            <source src={`/video/${projects[activeId].video}.mp4`} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </>
                                )}
                                <div className="flex flex-col py-5 px-5 justify-end">
                                    <div className="text-2xl">{projects[activeId].title}</div>
                                    <div className="text-md py-3 text-white/85">{projects[activeId].date}</div>
                                    <div className="flex flex-row mb-3 w-[100%] gap-1">
                                        {(projects[activeId].github != null)  && (
                                            <a href={`${projects[activeId].github}`} target='_blank' className="cursor-pointer justify-center items-center w-[100%] text-black rounded-md bg-white p-2 flex-row flex font-[Mazzard]">
                                                    <FontAwesomeIcon className='p-0 m-0 text-xl' icon={faGithub} />
                                                    <span className='text-sm'>Github</span>
                                            </a>
                                        )}
                                        {(projects[activeId].youtube != null) && (
                                            <a href={`${projects[activeId].youtube}`} target='_blank' className="cursor-pointer justify-center items-center w-[100%] text-black rounded-md bg-white p-2 flex-row flex font-[Mazzard]">
                                                <FontAwesomeIcon className='p-0 m-0 text-[#FF0000] text-xl' icon={faYoutube} />
                                                <span className='text-sm'>Youtube</span>
                                            </a>
                                        )}
                    
                                        {(projects[activeId].spotify != null) && (
                                            <a href={`${projects[activeId].spotify}`} target='_blank' className="cursor-pointer justify-center items-center w-[100%] text-black rounded-md bg-white p-2 flex-row flex font-[Mazzard]">
                                                <FontAwesomeIcon className='p-0 m-0 text-[#1DB954] text-' icon={faSpotify} />
                                                <span className=' text-sm'>Spotify</span>
                                            </a>
                                        )}
                                    </div>
                                    <div className="text-xs font-[Mazzard-Light]">{projects[activeId].description}</div>
                                </div>
                            </div>
                            
                        </>
                    )}
        </div>
        
        <div className="-z-1 bg-gradient-to-r from-black via-black/30 to-transparent fixed top-0 bottom-0 left-0 right-0"></div>
        
        {/* {projects[activeId].video != null && (
            <video key={projects[activeId].video} ref={videoRef} className="-z-2 h-full w-full fixed top-0 bottom-0 left-0 right-0 object-cover" muted={isMuted} autoPlay playsInline>
                <source src={`/video/${projects[activeId].video}.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        )} */}

            {/* // <img src={`/img/${projects[activeId].title.replaceAll("/","")}.webp`} className="-z-2 h-full w-full fixed top-0 bottom-0 left-0 right-0 object-cover"></img> */}
        <img src={`/img/Keoni-Hero.webp`} className="-z-2 w-full fixed -top-100 lg:h-[160vh] h-[200vh] left-0 right-0 object-cover"></img>

        <Header />
        <div className="flex flex-col justify-end mb-5">
            <div className="lg:mt-20 my-10 px-16 w-1/2 lg:h-125 h-64 flex flex-col justify-center">
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
                <div className="px-16 text-white/85 text-xl font-[Mazzard-Light]">Coding Projects</div>
                    <div className="flex flex-row relative items-center">
                        <button className='hover:cursor-pointer text-white absolute left-6 z-20 p-3 bg-black rounded-xl' onClick={()=> {scrollRow('row1', -500)}}>
                            <FontAwesomeIcon className='p-0 m-0 text-white group-hover:text-[#0A66C2]' icon={faAngleLeft} />
                        </button>
                        <div id="row1" className=" px-16 w-full overflow-x-scroll [&::-webkit-scrollbar]:[width:1px] flex flex-col lg:h-[400px] h-70">

                            <div className="drop-shadow-lg drop-shadow-[#000000]  flex flex-row h-full min-w-full max-w-full flex-nowrap justify-start gap-2 ">
                            {codingProjects.map((project) => {
                                const isActive = activeId === project.id;
                                return (<>
                                    <div className={`${isActive ? 'w-135' : ''} relative overflow-hidden hover:w-135  hover:h-full shrink-0 cursor-pointer duration-350 ease-in-out w-65 px-4 py-4 rounded-lg flex flex-col justify-end `} 
                                        onClick={() => {
                                            toggleCard(project.id)
                                        }}>
                                            <img className='object-cover w-full h-full absolute left-0 top-0 bottom-0 ' src={`/img/${project.title.replaceAll("/","")}.webp`}></img>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                                            <p className="font-[Mazzard] text-white/95 text-lg absolute line-clamp-1">{project.title}</p>
                                    </div>
                                </>)
                            })}
                            </div>

                        </div>
                    <button className='hover:cursor-pointer text-white absolute right-6 z-20 p-3 bg-black rounded-xl' onClick={()=> {scrollRow('row1', 500)}}>
                        <FontAwesomeIcon className='p-0 m-0 text-white group-hover:text-[#0A66C2]' icon={faAngleRight} />
                    </button>
                </div>

                <div className="px-16 text-white text-xl font-[Mazzard-Light]">Graphic Design Projects</div>
                <div className="flex flex-row relative items-center">
                    <button className='hover:cursor-pointer text-white absolute left-6 z-20 p-3 bg-black rounded-xl' onClick={()=> {scrollRow('row2', -500)}}>
                        <FontAwesomeIcon className='p-0 m-0 text-white group-hover:text-[#0A66C2]' icon={faAngleLeft} />
                    </button>
                    <div id="row2" className="px-16 w-full overflow-x-scroll [&::-webkit-scrollbar]:[width:1px] flex flex-col lg:h-[400px] h-70">
                        <div className="drop-shadow-lg drop-shadow-[#000000] flex flex-row h-full min-w-full max-w-full flex-nowrap   justify-start gap-2">
                            {graphicDesignProjects.map((project) => {
                                const isActive = activeId === project.id;
                                return (<>
                                    <div className={`${isActive ? 'w-135' : ''} relative  overflow-hidden hover:w-135  shrink-0 cursor-pointer duration-350 ease-in-out w-65 px-4 py-4 rounded-lg flex flex-col justify-end`}
                                        onClick={() => {
                                            toggleCard(project.id)
                                        }}>
                                            <img className='object-cover w-full h-full absolute left-0 top-0 bottom-0' src={`/img/${project.title.replaceAll("/","")}.webp`}></img>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                                            <p className="font-[Mazzard] text-white/95 text-lg absolute line-clamp-1">{project.title}</p>
                                    </div>
                                </>)
                            })}
                        </div>
                    </div>
                    <button className='hover:cursor-pointer text-white right-6 absolute z-20 p-3 bg-black rounded-xl' onClick={()=> {scrollRow('row2', 500)}}>
                        <FontAwesomeIcon className='p-0 m-0 text-white group-hover:text-[#0A66C2]' icon={faAngleRight} />
                    </button>
                </div>
           
            </div>
        </>
    )
}

export default DesktopHome;