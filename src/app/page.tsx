import Image from "next/image";

export default function Home() {
    return (
        <main>
          <div className="navbar">
            <div className="container">
              <a href="/"><h1> &lt;IL&gt; </h1></a>
              <div className="nav-options">
              <p>Home</p>
              <p>About</p>
              <p>Skills</p>
              <p>Projects</p>
              <p>Contact</p>
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
          <br></br>
          <div className="about-me">

            <h1>About Me</h1>
            <p>Hi, I'm Ian Lohan, a Front-End Developer from Pernambuco, Brazil. I have a passion for web development and love to create web applications with a focus on user experience. I am a self-taught developer and I am always looking for new challenges and learning new technologies.</p>
          </div>
            <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={100}
                height={24}
                priority
            />
        </main>
    );
}
