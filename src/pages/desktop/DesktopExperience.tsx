import experienceProjectData from '../../json/experience.json'
import educationProjectData from '../../json/education.json'
import { useState } from 'react';
import type { Experience } from '../../types/experience';
import type { Education } from '../../types/education';

function DesktopExperience() {
    let experiences: Experience[] = experienceProjectData.experience
    let educations: Education[] = educationProjectData.education

    const [activeId, setActiveId] = useState(null);

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
        <img src={`/img/Keoni-Hero.webp`} className="-z-3 fixed top-0 h-dvh w-full object-cover rounded-2xl" />

        <div className="grid grid-cols-2">
            <div className="flex flex-col justify-end mb-5">
                <div className="my-10 mx-auto flex flex-col justify-end drop-shadow-lg drop-shadow-[#000000] ">
                    <div className="text-white text-5xl font-[Mazzard] tracking-wide">
                        Education
                    </div>
                </div>
                <div className=" px-8 w-full overflow-x-scroll [&::-webkit-scrollbar]:[width:1px] flex flex-col lg:h-full">
                        <div className="drop-shadow-lg drop-shadow-[#000000] transition-transform duration-500 flex flex-col gap-4 h-full min-w-full max-w-full flex-nowrap justify-start gap-2 ">
                        {educations.map((education, _) => {
                            // const isActive = activeId === experience.id;
                            return (<>
                                    <div className='bg-zinc-900/70 font-[Mazzard] backdrop-blur-md border border-white/10 rounded-xl p-6 text-white shadow-lg transition-all hover:border-white/40 hover:bg-zinc-900/80 flex flex-row justify-between items-end'>
                                        <div className="">
                                            <span className='text-xs font-semibold uppercase tracking-wider text-zinc-400'>{education.start_date} - {education.end_date}</span>
                                            <h3 className='text-xl font-bold text-white mt-1 tracking-wider'>{education.school}</h3>
                                        </div>
                                        <h3 className='text-lg font-bold text-white/80 tracking-wider'>{education.degree_type}</h3>
                                    </div>
                            </>)
                        })}
                    </div>
                </div>  
            </div>
            <div className="flex flex-col justify-end mb-5">
                <div className="my-10 mx-auto flex flex-col justify-end drop-shadow-lg drop-shadow-[#000000] ">
                    <div className="text-white text-5xl font-[Mazzard] tracking-wide">
                        Experience
                    </div>
                </div>
                <div className=" px-8 w-full overflow-x-scroll [&::-webkit-scrollbar]:[width:1px] flex flex-col lg:h-full">
                        <div className="drop-shadow-lg drop-shadow-[#000000] transition-transform duration-500 flex flex-col gap-4 h-full min-w-full max-w-full flex-nowrap justify-start gap-2 ">
                        {experiences.map((experience, _) => {
                            // const isActive = activeId === experience.id;
                            return (<>
                                    <div className='bg-zinc-900/70 font-[Mazzard] backdrop-blur-md border border-white/10 rounded-xl p-6 text-white shadow-lg transition-all hover:border-white/40 hover:bg-zinc-900/80'>
                                        <span className='text-xs font-semibold uppercase tracking-wider text-zinc-400'>{experience.start_date} - {experience.end_date ? experience.end_date : "Current"}</span>
                                        <h3 className='text-xl font-bold text-white mt-1 tracking-wider'>{experience.company}</h3>
                                        <h3 className='text-lg font-bold text-white/80 tracking-wider'>{experience.position}</h3>
                                        <ul className='list-disc pl-5 space-y-3 text-sm font-sans font-normal text-zinc-300 leading-relaxed mt-4'>
                                            {experience.tasks?.map((task, taskIndex) => (
                                            <li key={taskIndex}>{task}</li>
                                            ))}
                                        </ul>
                                    </div>
                            </>)
                        })}
                    </div>
                </div>  
            </div>
        
        </div>
        </>
    )
}

export default DesktopExperience;

