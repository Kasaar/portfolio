import Link from 'next/link';

export const Projects = () => {
    return (
      <div className="section-1">
        <h1><Link href="https://github.com/Kasaar/KPress">KPress</Link></h1>
        <h1><Link href="https://github.com/Kasaar/ProveML">ProveML</Link></h1>
        <h1><Link href="https://github.com/Kasaar/zcrawler">zcrawler</Link></h1>
        <h1><Link href="https://hub.docker.com/r/zeller7/drone_sim">DroneSim</Link></h1>
      </div>
    )
  }
  
  export default Projects