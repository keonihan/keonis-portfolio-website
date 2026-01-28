
function ExperienceContainer() {
    return(<>
        <div className="experience-container">
            <p className="section-header">
                Experience
            </p>  
            <div className="job-container hidden">
            <a href="https://www.hawaii.edu/" target="_blank">
                <p className="company-text">University of Hawai'i</p>
            </a>
                <p className="position-text">Fullstack Web Developer</p>
                <p className="date-text">November 202<span className="dash">5 - </span>Current</p>
                    <ul>
                        <li>Designed and developed responsive web interfaces using HTML, CSS, JavaScript, and Tailwind, ensuring compliance with ADA accessibility standards.</li>
                        <li>Created UI/UX mockups and wireframes in Figma to communicate design ideas and improve user experience.</li>
                        <li>Collaborated with stakeholders to translate business and functional requirements into clear, user-centered website designs.</li>
                        <li>Assisted with Cascade CMS page template design, content updates, and user documentation to support consistent branding and usability.</li>
                        <li>Utilized Git/GitHub for version control and project collaboration during front-end development and site maintenance.</li>
                    </ul>
            </div>
            <div className="job-container hidden">
            <a href="https://www.cpshawaii.net/" target="_blank">
                <p className="company-text">Controlpoint Surveying</p>
            </a>
                <p className="position-text">CAD Technician</p>
                <p className="date-text">Jun<span className="dash">e - </span>November 2025</p>
                    <ul>
                        <li>Point Cloud Processing: Perform QC and multi-station adjustments to align and optimize scan data for accuracy, ensuring consistency with control scans.</li>
                        <li>Data Registration: Merging and registering multiple scan stations to produce a unified, high-accuracy point cloud.</li>
                        <li>Linework Preparation: Identifying and labeling all stationary features (e.g., buildings, curbs, signs, utility infrastructure) to prepare data for CAD workflows.</li>
                        <li>Topographic Mapping: Creating accurate topographic maps by interpreting linework and integrating scan data to support design, planning, and engineering workflows.</li>
                        <li>Collaboration: Supporting survey teams and CAD technicians by delivering clean, precise point cloud data for use in mapping, modeling, and design.</li>
                    </ul>
            </div>
            <div className="job-container hidden">
            <a href="https://oceanit.com/" target="_blank">
                <p className="company-text">Oceanit</p>
            </a>
                <p className="position-text">Software Engineer Intern</p>
                <p className="date-text">Jun<span className="dash">e - </span>August 2024</p>
                    <ul>
                        <li>Created a hand gesture-based web application deployed on Proto Holo, enhancing user interaction and usability for 
                        immersive environments.</li>
                        <li>Utilizing Unity to design and develop a VR application for analyzing pipe coatings, integrating advanced 
                        visualization techniques for enhanced inspection and analysis capabilities.</li>
                        <li>Developed and pitched an innovative idea/product to Oceanit staff and simulated venture capitalists, honing 
                        presentation skills and gaining experience in conceptualizing ideas from inception to presentation</li>
                    </ul>
            </div>
            <div className="job-container hidden">
                <a href="https://www.accuityllp.com/" target="_blank">
                    <p className="company-text">Accuity LLP</p>
                </a>
                <div className="date-container">
                    <p className="position-text">IT Audit Intern <span style={{paddingRight: '10px'}}>&rarr;</span></p>
                    <p className="date-text">Jun<span className="dash">e - </span>August 2023</p>
                </div>
                <div className="date-container">
                    <p className="position-text">Part-Time IT Auditor</p>
                    <p className="date-text">August 202<span className="dash">3 - </span>April 2024</p>
                </div>
                    <ul>
                        <li>Gained hands-on experience in various aspects of IT auditing, including Mindbridge imports/analyses, General 
Ledger transformations using Microsoft Excel and PowerQuery, and ITGCs (Information Technology General 
Controls).</li>
                        <li>Actively contributed to optimizing the narrative process, and Standard of Procedures for an estimated 30% improved 
                        efficiency and effectiveness. </li>
                        <li>Experimented with using Chat GPT’s API to convert IT audit narratives into generated process flowcharts in 
                        Microsoft Visio. </li>
                    </ul>
            </div>
        </div>
    </>)
}


export default ExperienceContainer;
