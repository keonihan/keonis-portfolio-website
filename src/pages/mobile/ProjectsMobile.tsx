import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons';
import codingProjectData from '../../json/projects.json'
import graphicDesignProjectData from '../../json/graphic_design_projects.json'
import { useRef, useState } from 'react';
import type { Project } from '../../types/project';

function ProjectMobile() {
    let codingProjects: Project[] = codingProjectData.projects
    let graphicDesignProjects: Project[] = graphicDesignProjectData.projects
    let projects: Project[] = [...codingProjects, ...graphicDesignProjects]

    const [activeId, setActiveId] = useState(null);

    const toggleCard = (id : any) => {
        setActiveId(activeId === id ? activeId : id);
    };
    
    const videoRef = useRef<HTMLVideoElement>(null);

    return(<>

        

                <div className={`${activeId != null ? 'opacity-[1.0] pointer-events-auto' : ' opacity-0 pointer-events-none'} rounded-2xl z-2 font-[Mazzard] ease-in-out transition-opacity  duration-325 fixed top-0 bottom-0 w-full bg-black text-white`}>
                    {activeId !== null && (
                    <>
                    <div className='flex flex-col '>
                    <button onClick={() => {setActiveId(null);}} className="fixed right-0 py-2 px-3 z-7 align-middle m-5 bg-black/80 rounded-4xl cursor-pointer focus:bg-black">X</button>
                        {projects[activeId].video == null && (
                            <>
                                <div className="z-3 bg-gradient-to-t pointer-events-none from-black via-black/20 to-transparent h-[260px] w-full fixed top-0 bottom-0 left-0 right-0"></div>
                                <img src={`/img/${projects[activeId].title.replaceAll("/","")}.webp`} className="sticky h-[250px] top-0 object-cover w-full"></img>
                            </>
                        )}
                        {projects[activeId].video != null && (
                            <>
                                <div className="z-3 bg-gradient-to-t pointer-events-none from-black via-black/20 to-transparent h-[260px] w-full fixed top-0 bottom-0 left-0 right-0"></div>
                                <video key={projects[activeId].video} ref={videoRef} className="sticky h-[250px] w-full top-0 object-cover" autoPlay playsInline>
                                    <source src={`/video/${projects[activeId].video}.mp4`} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </>
                        )}
                        <div className="flex flex-col py-5 px-2 justify-end">
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
        <div className="flex flex-col w-full overflow-x-hidden  ">
            <div className="h-20 flex flex-col gap-1 pb-10 justify-end font-[Mazzard] text-white">
                {(
                    <>
                    <div className="fixed top-0 left-0 h-dvh w-dvw bg-black/60 -z-1 rounded-2xl"></div>
                     <img src={`/img/Keoni-Hero.webp`} className="-z-3 fixed top-0 h-dvh left-0 right-0 object-cover rounded-2xl" />
                    
                </>
                )}
                
            </div>
            
            <div className="ml-5 w-full flex flex-col">
                <div className="font-[Mazzard] text-white text-xl my-1">Coding Projects</div>
                    <div className={`${activeId == null ? 'overflow-x-scroll' : ''} transition-transform [&::-webkit-scrollbar]:[width:1px]  duration-500 h-[200px] py-2 flex flex-row min-w-full max-w-full flex-nowrap justify-start gap-2`}>
                    {codingProjects.map((project) => {
                        const isActive = activeId === project.id;
                        return (<>
                            <div className={`${isActive ? 'w-40 drop-shadow-2xl scale-[3] z-1' : ''} transition-transform duration-50 ease-in-out relative shrink-0 cursor-pointer overflow-hidden duration-500 ease-in-out w-30 px-3 py-1 rounded-lg flex flex-col justify-end `} 
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
                <div className="font-[Mazzard] text-white text-xl my-1">Graphic Design</div>
                <div className="transition-transform [&::-webkit-scrollbar]:[width:1px] overflow-x-scroll duration-500 h-[200px] py-2 flex flex-row min-w-full max-w-full flex-nowrap justify-start gap-2">
                    {graphicDesignProjects.map((project) => {
                        const isActive = activeId === project.id;
                        return (<>
                            <div className={`${isActive ? 'w-40 drop-shadow-2xl scale-[2] z-1' : ''} transition-transform duration-350 relative overflow-hidden shrink-0 cursor-pointer duration-500 ease-in-out w-30 px-3 py-1 rounded-lg flex flex-col justify-end`} 
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

export default ProjectMobile;