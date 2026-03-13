import { useLocation } from 'react-router-dom';

function Header() {

    const location = useLocation();
    const subpageName = location.pathname.split('/').pop(); // Gets the last part of the URL

    return (<>
        {/* Header */}
        <div className="hidden lg:block py-8 px-4 flex-row flex justify-between items-center tw-w-full sticky top-0">
            <div className="flex flex-row">
                <a className={`px-4 text-xl font-[Mazzard] cursor-pointer hover:text-white ${subpageName == "home" ? 'text-white' : 'text-white/60'}`} href="/home">Home</a>
                <a className={`px-4 text-xl  font-[Mazzard] cursor-pointer hover:text-white ${subpageName == "experience" ? 'text-white' : 'text-white/60'}`} href="/experience">Experience</a>
                <a className={`px-4 text-xl font-[Mazzard] cursor-pointer hover:text-white ${subpageName == "skills" ? 'text-white' : 'text-white/60'}`} href="/skills">Skills</a>
                <a className={`px-4 text-xl font-[Mazzard] cursor-pointer hover:text-white ${subpageName == "projects" ? 'text-white' : 'text-white/60'}`} href="/projects">Projects</a>
                <a className={`px-4 text-xl font-[Mazzard] cursor-pointer hover:text-white ${subpageName == "contact" ? 'text-white' : 'text-white/60'}`} href="/contact">Contact Me</a>
            </div>
            <div className="">
                <button className="px-4 text-lg text-white font-[Mazzard]">Recruiter</button>
            </div>
        </div>

    </>)
}

export default Header;