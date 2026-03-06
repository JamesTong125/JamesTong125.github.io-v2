import { Code,Toolbox,User } from "lucide-react";

export const AboutSection = () => {
    return(
        <section id="about" className = "py-24 px-4 relative"> 

            <div className = "container max-w-5xl mx-auto">

                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" >
                    About <span className = "text-primary"> Me </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    
                    <div className="space-y-6">

                        <h3>Passionate Web Developer and Cybersecurity</h3>

                        <p className = "text-muted-foreground">

                            Hello! I'm James Tong, a dedicated web developer and cybersecurity enthusiast with a passion for creating engaging digital experiences and securing online environments. With a strong foundation in front-end development, I specialize in crafting responsive and user-friendly websites using modern technologies like React, Tailwind CSS, and JavaScript.

                        </p>

                        <p className = "text-muted-foreground">

                            I'm passionate about cybersecurity and continuously learning about the latest threats and defense mechanisms. I enjoy exploring ethical hacking techniques and implementing robust security measures to protect web applications from vulnerabilities.
                            
                        </p>

                        <div className = "flex flex-col sm:flex-row gap-4 pt-4 justify-center">

                            <a href="#contact" className = "cosmic-button">
                                Get in Touch
                            </a>

                            <a href="Resume" className = "px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                My Resume
                            </a>

                        </div>

                    </div>

                    <div className = "grid grid-cols-1 gap-6">
                        
                        <div className= "gradient-border p-6 card-hover">
                            <div className = "flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className = "h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className = "font-semibold text-lg">Web Development</h4>
                                    <p className = "text-muted-foreground">Creating responsive and aesthetic websites</p>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div className= "gradient-border p-6 card-hover">
                            <div className = "flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className = "h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className = "font-semibold text-lg">UI/UX Design</h4>
                                    <p className = "text-muted-foreground">Designing user interfaces and user experiences</p>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div className= "gradient-border p-6 card-hover">
                            <div className = "flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Toolbox className = "h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className = "font-semibold text-lg">Projects</h4>
                                    <p className = "text-muted-foreground">Creating and Designing mechanical projects to solve physcial problems</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        
        
        </section>
    )
}