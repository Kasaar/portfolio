import Link from 'next/link';

const Home = () => {
  return (
    <section>
      <div className="grid-2">
        <div className="section-1">
          <i className="fas fa-code fa-5x white"></i>
          <h1 className="font-bold">Owen Zeller</h1>
          <p>Minneapolis, MN</p><br></br><br></br>
            <a href="https://www.linkedin.com/in/owen-zeller" target="_blank"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/Kasaar" target="_blank"><i className="fab fa-github"></i></a>
          </div>
        <div className="section-2">
          <h2><Link href="/about">About Me</Link></h2>
          <h2><Link href="/projects">Projects</Link></h2>
          <h2><Link href="/Owen_Zeller_Resume.pdf">Résumé</Link></h2>
        </div>
      </div>
    </section>
  )
}

export default Home
