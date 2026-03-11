import { useState } from "react";
import type { Project } from "../types/project";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void
}

function ProjectModal({ project, onClose } : ProjectModalProps) {
    const [visible, setVisible] = useState(true)

    return(<>
        <div className={`${visible ? 'opacity-100' : ''} z-5  transition-all duration-5000 fixed h-full w-full bg-white text-black`}>
            <button onClick={() => {
                onClose();
                setVisible(false);
            }} className="w-25 h-25">
                X
            </button>
            {project?.description}
        </div>
    
    </>)
}
export default ProjectModal;