import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons';
import hobbiesData from '../../json/hobbies.json'
import { useRef, useState } from 'react';
import type { Hobby } from '../../types/hobby';

function HobbiesMobile() {
    let hobbies: Hobby[] = hobbiesData.hobbies
    let projects: Hobby[] = [...hobbies]

    const [activeId, setActiveId] = useState(null);

    const toggleCard = (id : any) => {
        setActiveId(activeId === id ? activeId : id);
    };
    
    const videoRef = useRef<HTMLVideoElement>(null);

    return(<><div className="fixed top-0 left-0 h-dvh w-dvw bg-black/50 -z-1 rounded-2xl"></div>
        <img src={`/img/Keoni-Hero.webp`} className="-z-3 fixed top-0 h-dvh left-0 right-0 object-cover rounded-2xl" />
            <div className="ml-5 w-full flex flex-col p-4">
                
                <div className="mt-25 font-[Mazzard] text-white text-xl my-1">Hobbies</div>
                    <div className={`${activeId == null ? 'overflow-x-scroll' : ''} transition-transform [&::-webkit-scrollbar]:[width:1px]  duration-500 py-2 grid grid-cols-2 gap-1 min-w-full max-w-full flex-nowrap justify-start gap-2`}>
                    {hobbies.map((hobby) => {
                        const isActive = activeId === hobby.id;
                        return (<>
                            <div className={`${isActive ? 'w-40 drop-shadow-2xl scale-[3] z-1' : ''}  transition-transform duration-50 ease-in-out relative shrink-0 cursor-pointer overflow-hidden duration-500 ease-in-out w-[85%] h-40 px-3 py-1 rounded-lg flex flex-col justify-end `} 
                                onClick={() => {
                                    toggleCard(hobby.id)
                                }}>
                                    <img className='object-cover blur-[1px] w-full h-full absolute left-0 top-0 bottom-0 inset-0 ' src={`/img/${hobby.name.replaceAll("/","")}.webp`}></img>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                                    <p className="font-[Mazzard] text-white text-sm absolute line-clamp-1">{hobby.name}</p>
                            </div>
                        </>)
                    })}
                </div>
            </div>
    </>)
}

export default HobbiesMobile;