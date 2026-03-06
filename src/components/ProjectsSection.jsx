import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Flappy Goose",
        description: "Fully functional flapping goose built using 3d printing and solidworks",
        image: "/projects/flappy-goose.jpg",
        tags: ["Solidworks", "3D Printing", "Mechanical Design"],
        demoURL: "#",
        githubURL: "#",
    },
    {
        id: 2,
        title: "Rubik's cube assitstive stand",
        description: "Functional rubik's cube stand which utilized 3d printing and basic electronics to assist amputees in solving a rubik's cube",
        image: "/projects/cubestand.jpg",
        tags: ["Solidworks", "3D Printing", "Mechanical Design", "Electronics"],
        demoURL: "#",
        githubURL: "#",
    },
    {
        id: 3,
        title: "Ethical hacking toolkit",
        description: "Toolkit built using ____ to assist in ethical hacking",
        image: "/projects/ethicalhacking.jpg",
        tags: ["[coding language]" , "Cybersecurity", "Networking"],
        demoURL: "#",
        githubURL: "#",
    },
]





export const ProjectsSection = () => {
    return(
        <section id = "projects" className = "py-24 px-4 relative">
            
            <div className = "container max-w-5xl mx-auto">
                <h2 className = "text-3xl md:text-3xl font-bold mb-4 text-center"> Featured <span className = "text-primary"> Projects </span> </h2>
        

                <p className = "text-center text-muted-foreground mb-12 max-2-2xl mx-auto">

                    Here are some of the projects I have been working on recently. I have a passion for mechanical design, UI/UX design, and cybersecurity

                </p>

                <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {projects.map((project,key) => (

                        <div 
                            key={key}
                            className = "group bg-card rounded-lg overflow-hidden shadow-xs card-hover-effect"
                        >

                            <div className = "h-48 overflow-hidden">
                                <img src ={project.image} alt={project.title} className = "w-full h-full object-cover transition-transfomr duration-500 group-hover:scale-110"/>
                            </div>

                            <div className = "p-6">
                                <div className = "flex flex-wrap gap-2 mb-4" >

                                    {project.tags.map((tag) => (
                                        <span className = "px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}

                                </div>

                            

                                <h3 className = "text-xl font-semibold mb-1"> {project.title} </h3>
                                <p className = "text-muted-foreground text-sm mb-4">{project.description}</p>


                                <div className = "flex justify-between items-center">
                                    <div className = "flex space-x-3">

                                        <a 
                                            href={project.demoURL} 
                                            className = "text-foreground/80 hover:text-primary transition-colors duration-300"
                                            target="_blank"
                                        >
                                            <ExternalLink size={20}/>
                                        </a>
                                        <a 
                                            href={project.githubURL} 
                                            className = "text-foreground/80 hover:text-primary transition-colors duration-300"
                                            target="_blank"
                                        >
                                            <Github size={20}/>
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}

                </div>

                    <div className = "mt-12 text-center">

                        <a 
                            href="https://github.com/jamestong125" 
                            className="cosmic-button w-fit flex items-center mx-auto gap-2"
                            target = "_blank"
                        >
                            Check my Github <ArrowRight size = {16}/>
                        </a>

                    </div>

            </div>

        </section>
    )
}