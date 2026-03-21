import experienceProjectData from '../../json/experience.json'
import { useState } from 'react';
import type { Experience } from '../../types/experience';

function MobileExperience() {
    let experiences: Experience[] = experienceProjectData.experience

    const [activeId, setActiveId] = useState(null);

    const toggleCard = (id : any) => {
        setActiveId(activeId === id ? activeId : id);
    };

    return (
        <>

        <div className={`${activeId != null ? 'opacity-[1.0] pointer-events-auto' : ' opacity-0 pointer-events-none'} rounded-2xl z-2 font-[Mazzard] ease-in-out transition-opacity duration-325 fixed top-0 h-dvh w-full bg-black/90 text-white`}>
                            {activeId !== null && (
                            <>
                            <div className='flex flex-col p-7 h-full overflow-y-auto outline-none'>
                            <button onClick={() => {setActiveId(null);}} className="fixed right-0 py-2 px-3 z-7 align-middle m-5 bg-black/80 rounded-4xl cursor-pointer focus:bg-black">X</button>
                                <div className="flex flex-col py-5 px-2 justify-end mt-10 ">
                                    <div className="text-2xl">{experiences[activeId].company}</div>
                                    <div className="text-md py-3 text-white/85">{experiences[activeId].position}</div>
                                    <div className="text-md py-1 text-white/85">
                                        {experiences[activeId].start_date} - {experiences[activeId].end_date && experiences[activeId].end_date} {!experiences[activeId].end_date && "Current"}
                                    </div>  
                                    



                                    <div className="flex flex-row mb-3 w-[100%] gap-1 ">
                                        <ul className='text-sm font-[Mazzard-Light]'>
                                       {experiences[activeId].tasks && experiences[activeId].tasks.map((task) => {
                                            return (<>
                                                    {
                                                        (() => {
                                                                return (
                                                                <>
                                                                <div className="">
                                                                        <li className='list-disc py-2'>
                                                                            {`${task}`}
                                                                        </li>
                                                                </div>
                                                                </>)
                                                        })()
                                                    }
                                            </>)
                                        })}
                                        </ul>
                                    </div>
                                    <div className="text-xs font-[Mazzard-Light]">{experiences[activeId].description}</div>
                                </div>
                            </div>
                            
                    </>
                )}
        </div>
        
    
        <div className="fixed top-0 left-0 h-dvh w-dvw bg-black/50 -z-1 rounded-2xl"></div>
        <img src={`/img/Keoni-Hero.webp`} className="-z-3 fixed top-0 h-dvh left-0 right-0 object-cover rounded-2xl" />

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
                        // const isActive = activeId === experience.id;
                        return (<>
                                {
                                    (() => {
                                        const isEven = index % 2 == 0
                                            return (
                                            <>
                                                <div className="text-white flex flex-row items-center mx-1/2">
                                                    <div className={`w-1/2 flex flex-col ${isEven ? 'justify-end pr-4' : 'justify-start pl-4'}  cursor-pointer`}  onClick={() => {
                                                            toggleCard(experience.id)
                                                        }}>
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
                                                    <div className={`w-1/2 flex flex-col ${!isEven ? 'justify-start pl-4' : 'justify-end pr-4'}  cursor-pointer`} onClick={() => {
                                                            toggleCard(experience.id)
                                                        }}>
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