import Image from "next/image";

export default function Home() {
    return (
        <main>
            <div className="to-top"></div>
            <div className="navbar">
                <div className="container">
                    <a href="/">
                        <h1> &lt;IL&gt; </h1>
                    </a>
                    <div className="nav-options">
                        <p>Home</p>
                        <p>About</p>
                        <p>Skills</p>
                        <p>Projects</p>
                        <p>Contact Me</p>
                    </div>
                </div>
            </div>
            <div className="home">
                <div className="hello-world">
                    <p class="hello">HELLO, WORLD!</p>
                    <p class="my-name">&lt;IAN LOHAN&gt;</p>
                    <p class="profession">Front-End Developer</p>
                </div>
            </div>
            <div className="sections">
                <div className="about-me">
                    <h1 class="section-header">About</h1>
                    <div className="section-content">
                        <img src="./photo.jpg" alt="My Photo" />
                        <p>
                            Hi , I'm Ian Lohan, a Front-End Developer from
                            Pernambuco, Brazil.
                            <br></br>
                            <br></br>I have a passion for web development and
                            love to create web applications with a focus on user
                            experience.
                            <br></br>
                            <br></br>
                            My programming journey started in 2020 when I first
                            got into college, I was introduced to a wide variety
                            of programming languages by my professors and
                            friends, and since then I've been constantly
                            learning new technologies and improving my skills as
                            a programmer.
                            <br></br>
                            <br></br>I am currently studying Computer Science at
                            UniFavip Wyden and taking multiple courses online,
                            such as CS50x, FreeCodeCamp and The Odin Project.
                            <br></br>
                            <br></br>
                            My goal is to become a Full-Stack Developer and
                            create all sorts of web applications to help people
                            in their daily lives.
                        </p>
                    </div>
                </div>
                <div className="skills">
                    <h1 class="section-header">Skills</h1>
                    <div className="section-content">
                        <img src="./html.png" alt="HTML" />
                        <img src="./css.png" alt="CSS" />
                        <img src="./javascript.png" alt="JavaScript" />
                        <img src="./typescript.png" alt="TypeScript" />
                        <img src="./react.png" alt="React" />
                        <img src="./node js.png" alt="Node JS" />
                        <img src="./sass.png" alt="Sass" />
                    </div>
                </div>
                <div className="projects">
                    <h1 class="section-header">Projects</h1>
                    <div className="section-content">
                        <div className="project">
                            <img src="./project1.png" alt="Project 1" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nullam auctor, lacus vitae
                                posuere.
                            </p>
                        </div>
                        <div className="project">
                            <img src="./project2.png" alt="Project 2" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nullam auctor, lacus vitae
                                posuere.
                            </p>
                        </div>
                        <div className="project">
                            <img src="./project3.png" alt="Project 3" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nullam auctor, lacus vitae
                                posuere.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="contact-me">
                    <h1 class="section-header">Contact Me</h1>
                    <div className="section-content">
                        <a href="https://github.com/Ian-Lohan">
                            <img src="./github.png" alt="github" />
                        </a>
                        <a href="https://www.linkedin.com/in/ian-lohan-9140ab24b/">
                            <img src="./linkedin.png" alt="linkedin" />
                        </a>
                        <a href="https://www.instagram.com/ianlohan.acc/">
                            <img src="./instagram.png" alt="instagram" />
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
