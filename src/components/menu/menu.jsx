import "./menu.scss"

export default function menu({menuopen,setmenuopen}) {
  return (
    <div className={"menu "+(menuopen &&"active")}>
        <ul className="titles">
            <li onClick={()=>setmenuopen(false)}>
              <a href="#intro">Home</a>  
            </li>
            <li onClick={()=>setmenuopen(false)}>
              <a href="#portfolio">Portfolio</a>  
            </li>
            <li onClick={()=>setmenuopen(false)}>
              <a href="#contact">Contact</a>  
            </li>
        </ul>
    </div>
  )
}
