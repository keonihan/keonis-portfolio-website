import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faVolumeXmark, faVolume} from '@fortawesome/free-solid-svg-icons';
import codingProjectData from '../../src/json/projects.json'
import graphicDesignProjectData from '../../src/json/graphic_design_projects.json'
import { useRef, useState } from 'react';
import type { Project } from '../types/project';

function MobileHome() {
    let codingProjects: Project[] = codingProjectData.projects
    let graphicDesignProjects: Project[] = graphicDesignProjectData.projects
    let projects: Project[] = [...codingProjects, ...graphicDesignProjects]

    const [activeId, setActiveId] = useState(0);

    const toggleCard = (id : any) => {
        setActiveId(activeId === id ? activeId : id);
    };
    
    const videoRef = useRef<HTMLVideoElement>(null);
    // const scrollRef = useRef<HTMLDivElement>(null);
    const [isMuted, setIsMuted] = useState(true);
    const toggleMute = () => {
        if (videoRef.current) {
        videoRef.current.muted = !videoRef.current.muted; 
        setIsMuted(videoRef.current.muted); 
        }
    };

    return(<>
        <div className="fixed min-h-screen bg-black top-0 bottom-0 right-0 left-0 -z-4"></div>
        <div className="flex flex-col w-full">
            <div className="h-125 flex flex-col gap-2 pb-10 justify-end font-[Mazzard] text-white">
                <div className="-z-1 bg-gradient-to-t from-black via-black/90 to-transparent h-full w-full fixed top-0 bottom-0 left-0 right-0"></div>
                {projects[activeId].video == null && (
                    <img src={`/img/${projects[activeId].title.replaceAll("/","")}.png`} className="-z-2 fixed  bottom-0 h-full w-full object-cover"></img>
                )}
                {projects[activeId].video != null && (
                    <video key={projects[activeId].video} ref={videoRef} className="-z-2 h-full w-full fixed top-0 bottom-0 left-0 right-0 object-cover" muted={isMuted} autoPlay playsInline>
                        <source src={`/video/${projects[activeId].video}.mp4`} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}

                <div className="flex flex-row justify-center text-4xl w-[75%] mx-auto text-center font-[Mazzard]">{projects[activeId].title}</div>
                {projects[activeId].video != null && 
                    (<button className='cursor-pointer flex flex-row mx-auto '  onClick={toggleMute} aria-label={isMuted ? "Unmute" : "Mute"}>
                        {isMuted ? <FontAwesomeIcon className='text-[#C4C4C4] hover:text-white text-xl align-middle' icon={faVolumeXmark} /> : <FontAwesomeIcon className='text-[#C4C4C4] hover:text-white text-xl' icon={faVolume} />}
                    </button>)
                    }
                <div className="flex flex-row justify-center font-[Mazzard-Light]">{projects[activeId].date}</div>
                <div className="flex flex-row justify-center text-xs text-center font-[Mazzard-Light] w-[85%] mx-auto">{projects[activeId].description}</div>
                <div className="flex flex-row justify-center text-xs text-center mx-auto">
                    {(projects[activeId].github != null)  && (
                    <a href={`${projects[activeId].github}`} target='_blank'>
                        <button className="cursor-pointer text-black text-2xl rounded-2xl bg-white p-3 flex-row flex font-[Mazzard]">
                            <FontAwesomeIcon className='p-0 m-0' icon={faGithub} />
                        </button>
                    </a>
                    )}
                    {(projects[activeId].youtube != null) && (
                    <a href={`${projects[activeId].youtube}`} target='_blank'>
                        <button className="cursor-pointer text-black text-2xl rounded-2xl bg-white p-3 flex-row flex font-[Mazzard]">
                            <FontAwesomeIcon className='p-0 m-0 text-[#FF0000]' icon={faYoutube} />
                        </button>
                    </a>
                    )}

                    {(projects[activeId].spotify != null) && (
                    <a href={`${projects[activeId].spotify}`} target='_blank'>
                        <button className="cursor-pointer text-black text-2xl rounded-2xl bg-white p-3 flex-row flex font-[Mazzard]">
                            <FontAwesomeIcon className='p-0 m-0 text-[#1DB954]' icon={faSpotify} />
                        </button>
                    </a>)}

                </div>
            </div>
            
            <div className="px-5 w-full overflow-x-hidden flex flex-col h-[300px]">
                <div className="font-[Mazzard] text-white text-2xl my-1">Coding Projects</div>
                    <div className="transition-transform duration-500 flex flex-row h-full min-w-full max-w-full flex-nowrap justify-start gap-2">
                    {codingProjects.map((project) => {
                        const isActive = activeId === project.id;
                        return (<>
                            <div className={`${isActive ? 'w-40 drop-shadow-2xl' : ''} border-white border-1 relative shrink-0 cursor-pointer overflow-hidden duration-500 ease-in-out w-40 px-4 py-4 rounded-2xl flex flex-col justify-end `} 
                                onClick={() => {
                                    toggleCard(project.id)
                                }}>
                                    <img className='object-cover w-full h-full absolute left-0 top-0 bottom-0' src={`/img/${project.title.replaceAll("/","")}.png`}></img>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                                    <p className="font-[Mazzard] text-white text-lg absolute">{project.title}</p>
                            </div>
                        </>)
                    })}
                </div>
            </div>
            
            <div className="px-6 w-full overflow-x-hidden flex flex-col h-[300px] my-10">
                <div className="font-[Mazzard] text-white text-2xl">Graphic Design</div>
                <div className="transition-transform duration-500 flex flex-row  h-full min-w-full max-w-full flex-nowrap justify-start gap-2">
                    {graphicDesignProjects.map((project) => {
                        const isActive = activeId === project.id;
                        return (<>
                            <div className={`${isActive ? 'w-40' : ''} border-white border-1 relative overflow-hidden  shrink-0 cursor-pointer duration-500 ease-in-out w-40 px-4 py-4 rounded-2xl flex flex-col justify-end`} 
                                onClick={() => {
                                    toggleCard(project.id)
                                }}>
                                    <img className='object-cover w-full h-full absolute left-0 top-0 bottom-0' src={`/img/${project.title.replaceAll("/","")}.png`}></img>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                                    <p className="font-[Mazzard] text-white text-lg absolute">{project.title}</p>
                            </div>
                        </>)
                    })}
                </div>
            </div>


            </div>
    </>)
}

export default MobileHome;