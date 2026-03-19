import Header from '../../components/header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin,  faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';

function DesktopContact() {
    const [rowClass, setRowClass] = useState('opacity-0 translate-y-4');
    const [iconClass, setIconClass] = useState('opacity-0 -translate-x-20 justify-start');

    useEffect(() => {
        // 2. Trigger the change after the component mounts
        // A small timeout can help ensure the CSS transition registers
        const timer = setTimeout(() => {
            setRowClass('opacity-100 translate-y-0 transition-all duration-700');
            setIconClass('opacity-100 translate-x-0 justify-center transition-all duration-800');
        }, 100);

        return () => clearTimeout(timer); // Cleanup
    }, []);


    return (
        <>
        <div className="-z-1 bg-gradient-to-r from-black via-black/30 to-transparent fixed top-0 bottom-0 left-0 right-0"></div>
        <img src={`/img/Keoni-Hero.webp`} className="-z-2 w-full fixed -top-100 lg:h-[160vh] h-[200vh] left-0 right-0 object-cover"></img>
        <Header />
        <div className="flex flex-col justify-end mb-5">
            <div className={`lg:mt-20 my-10 px-16 w-full lg:h-125 h-64 flex flex-col justify-center ${rowClass}`}>
                <div className={`text-white text-7xl font-[Mazzard] text-center ${rowClass}`}>
                    Keoni Han
                </div>
                <div className={`pb-5 text-white/90 text-2xl font-[Mazzard-Light] text-center ${rowClass}`}>Web & Software Developer</div>

                <div className={`flex flex-row gap-3  ${iconClass} items-start`}>
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
           
            </div>
        </>
    )
}

export default DesktopContact;