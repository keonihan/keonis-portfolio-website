import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons';
import codingProjectData from '../../json/projects.json'
import graphicDesignProjectData from '../../json/graphic_design_projects.json'
import { useRef, useState } from 'react';
import type { Project } from '../../types/project';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

function DesktopProjects() {
    let codingProjects: Project[] = codingProjectData.projects
    let graphicDesignProjects: Project[] = graphicDesignProjectData.projects
    let projects: Project[] = [...codingProjects, ...graphicDesignProjects]

    const [activeId, setActiveId] = useState(null);

    const toggleCard = (id : any) => {
        setActiveId(activeId === id ? activeId : id);
    };
    
    const videoRef = useRef<HTMLVideoElement>(null);

    return(<>

        

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
        
        <div className="rounded-2xl fixed bg-black inset-0 top-0 bottom-0 right-0 left-0 -z-4"></div>
        <div className="flex flex-col w-full overflow-x-hidden pb-30 ">
            <div className="h-10 flex flex-col gap-1 pb-10 justify-end font-[Mazzard] text-white">
                {(
                    <>
                    <div className="fixed top-0 left-0 h-full w-dvw bg-black/60 -z-1 rounded-2xl"></div>
                     <img src={`/img/Keoni-Hero.webp`} className="-z-3 fixed top-0 h-full w-full object-cover rounded-2xl" />
                    
                </>
                )}
                
            </div>
            
            <div className="ml-5 w-full flex flex-col">
                <div className="font-[Mazzard] text-white text-5xl my-1 mx-auto">Coding Projects</div>
                    <div className={`${activeId == null ? 'overflow-x-scroll' : ''} transition-transform [&::-webkit-scrollbar]:[width:1px] mx-auto  duration-500 h-[500px]  py-2 grid grid-cols-3 w-[90%] flex-nowrap justify-center gap-2`}>
                    {codingProjects.map((project) => {
                        const isActive = activeId === project.id;
                        return (<>
                            <div className={`${isActive ? 'w-40 drop-shadow-2xl scale-[1] z-1' : ''} transition-transform duration-50 ease-in-out mx-auto relative shrink-0 cursor-pointer  overflow-hidden duration-500 ease-in-out w-full px-3 py-1 rounded-lg flex flex-col justify-end `} 
                                onClick={() => {
                                    toggleCard(project.id)
                                }}>
                                    <img className='object-cover w-full h-full absolute left-0 top-0 bottom-0 inset-0' src={`/img/${project.title.replaceAll("/","")}.webp`}></img>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                                    <p className="font-[Mazzard] text-white text-sm absolute line-clamp-1">{project.title}</p>
                            </div>
                        </>)
                    })}
                </div>
            </div>
            
            <div className="ml-5 w-full overflow-x-hidden flex flex-col">
                <div className="font-[Mazzard] text-white text-5xl my-1 mx-auto">Graphic Design</div>
                <div className="transition-transform [&::-webkit-scrollbar]:[width:1px] mx-auto  duration-500 h-[500px]  py-2 grid grid-cols-3 w-[90%] flex-nowrap justify-center gap-2">
                    {graphicDesignProjects.map((project) => {
                        const isActive = activeId === project.id;
                        return (<>
                            <div className={`${isActive ? 'w-40 drop-shadow-2xl scale-[1] z-1' : ''} transition-transform duration-50 ease-in-out mx-auto relative shrink-0 cursor-pointer  overflow-hidden duration-500 ease-in-out w-full px-3 py-1 rounded-lg flex flex-col justify-end `} 
                                onClick={() => {
                                    toggleCard(project.id)
                                }}>
                                    <img className='object-cover w-full h-full absolute left-0 top-0 bottom-0' src={`/img/${project.title.replaceAll("/","")}.webp`}></img>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                                    <p className="font-[Mazzard] text-white text-sm absolute line-clamp-1">{project.title}</p>
                            </div>
                        </>)
                    })}
                </div>
            </div>


            </div>
    </>)
}

export default DesktopProjects;

