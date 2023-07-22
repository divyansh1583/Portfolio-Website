import "./topbar.scss"
import { Person,Mail,Menu} from "@material-ui/icons";
export default function Topbar({menuopen,setmenuopen}) {
  return (
    <div className={"topbar "+(menuopen && "active")}>
      <div className="text">
        <div className="left">
          <a href="#intro"className="logo">DC.</a>
          <div className="itemcontainer">
            <div>
            <Person className="icon"/>
            <span>+91 7876500078 </span>
            </div>
            <div>
              <Mail className="icon"/>
            <span>divyanshchauhan28@gmail.com</span>
            </div>
          </div>
        </div>
        
        <div className="right">
      
            <div className="threeline" onClick={()=>setmenuopen(!menuopen)}>
            <Menu className="menuicon"/>
            </div>
            
          </div>
        </div>
      </div>
  )
}
