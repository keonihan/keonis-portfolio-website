import experienceProjectData from '../../json/experience.json'
import { useState } from 'react';
import type { Experience } from '../../types/experience';

function MobileExperience() {
    let experiences: Experience[] = experienceProjectData.experience

    const [activeId, setActiveId] = useState(null);

    // const toggleCard = (id : any) => {
    //     setActiveId(activeId === id ? activeId : id);
    // };

    return (
        <>

        <div className="fixed top-0 left-0 h-dvh w-dvw bg-black/70 -z-1 rounded-2xl"></div>
        <img src={`/img/Keoni-Hero.png`} className="-z-2 fixed top-0 h-dvh left-0 right-0 object-cover rounded-2xl">
        </img>

        <div className={`${activeId != null ? 'opacity-[1.0] pointer-events-auto' : ' opacity-0 pointer-events-none'} z-1 inset-0 bg-black/70 fixed top-0 bottom-0 left-0 right-0`}></div>
        {/* <div className={`${activeId != null ? 'opacity-[1.0] pointer-events-auto' : ' opacity-0 pointer-events-none'}  z-2 font-[Mazzard] ease-in-out drop-shadow-xl drop-shadow-[#000000] transition-opacity duration-435 fixed translate-x-1/2  rounded-xl  w-1/2 h-10/11 top-0  bg-black text-white`}>             
                            {activeId !== null && (
                            <>
                            <div id="homeCard" className='flex flex-col'>
                            <button onClick={() => {setActiveId(null);}} className="fixed leading-[0] right-0 z-7 align-middle m-5 rounded-4xl cursor-pointer focus:bg-black">
                                <FontAwesomeIcon className='p-0 m-0 text-4xl' icon={faWindowClose} />
                            </button>
                                {projects[activeId].video == null && (
                                    <>
                                        <div className="z-3 bg-gradient-to-t pointer-events-none from-black via-black/20 to-transparent h-[461px] rounded-2xl fixed top-0 bottom-100 left-0 right-0"></div>
                                        <img src={`/img/${projects[activeId].title.replaceAll("/","")}.png`} className="sticky h-[460px] rounded-2xl top-0 object-cover w-full"></img>
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
        </div> */}
        

        <div className="flex flex-col justify-end mb-5">
            <div className="lg:mt-20 my-10 mx-auto lg:h-125 h-40 flex flex-col justify-end drop-shadow-lg drop-shadow-[#000000] ">
                <div className="text-white text-5xl font-[Mazzard] tracking-wide">
                    Experience
                </div>
            </div>

            {/* <div className="opacity-40 z-1 bg-gradient-to-b pointer-events-none from-black/50 via-black/10 to-transparent lg:h-[400px] h-[calc(60dvh)] w-full fixed bottom-0 left-0 right-0"></div> */}
            <div className=" px-8 w-full overflow-x-scroll [&::-webkit-scrollbar]:[width:1px] flex flex-col lg:h-[400px] h-[calc(60dvh)]">
                    <div className="drop-shadow-lg drop-shadow-[#000000] transition-transform duration-500 flex flex-col h-full min-w-full max-w-full flex-nowrap justify-start gap-2 ">
                    {experiences.map((experience, index) => {
                        const isActive = activeId === experience.id;
                        return (<>
                                {
                                    (() => {
                                        const isEven = index % 2 == 0
                                            return (
                                            <>
                                                <div className="text-white flex flex-row items-center mx-1/2">
                                                    <div className={`w-1/2 flex flex-col ${isEven ? 'justify-end pr-4' : 'justify-start pl-4'}`}>
                                                        {isEven && (
                                                            <>
                                                                <p className="font-[Mazzard] text-white/95 text-lg tracking-wide">{experience.company}</p>
                                                                <p className="font-[Mazzard-Light] text-white/95 text-sm">{experience.position}</p>
                                                                <p className="font-[Mazzard-Light] text-white/95 text-md">{experience.start_date} - {experience.end_date != null ? experience.end_date  : "Current"}</p>
                                                            </>
                                                            )} 
                                                    </div>
                                                    <div className="flex justify-center items-center z-10">
                                                        <svg height="40" width="40" xmlns="http://www.w3.org/2000/svg">
                                                            <circle r="10" cx="20" cy="20" fill="white" />
                                                        </svg>
                                                        {/* <svg className='-translate-x-5' height="40" width="40" >
                                                            <line x1="0" y1="20" x2="150" y2="20" 
                                                                className="stroke-white stroke-2 fill-none" 
                                                                stroke-linecap="round" />
                                                        </svg> */}
                                                    </div>
                                                    <div className={`w-1/2 flex flex-col ${!isEven ? 'justify-start pl-4' : 'justify-end pr-4'}`}>
                                                        {!isEven && (
                                                            <>
                                                                <p className="font-[Mazzard] text-white/95 text-lg tracking-wide">{experience.company}</p>
                                                                <p className="font-[Mazzard-Light] text-white/95 text-sm">{experience.position}</p>
                                                                <p className="font-[Mazzard-Light] text-white/95 text-md">{experience.start_date} - {experience.end_date != null ? experience.end_date  : "Current"}</p>
                                                            </>
                                                            )} 
                                                    </div>
                                                </div>      
                                            </>)
                                    })()
                                }
                        </>)
                    })}
                </div>
                </div>  
            </div>
        </>
    )
}

export default MobileExperience;