import "./intro.scss"
import { TypeAnimation } from 'react-type-animation';
export default function Intro() {
 

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imagecontainer">
          <img src="assests/man.jpeg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm </h2>
          <h1>Divyansh Chauhan</h1>
          <h3>CS Student <TypeAnimation
              sequence={[
                'Developer', 500, 
                'Coder', 500,
                      ]}
          style={{ fontSize:'30px' }}
          repeat={Infinity}
          speed={15}
          />
       </h3>
       <h4>
       </h4>
       <h5>
       I'm currently a 3rd year engineering student from Jaypee University of Information Technology.
       Currently pursuing BTech in Computer Science and Engineering with Proficiency in Cloud Computing 
       from Jaypee University of Information Technology.
        </h5>
        </div>
        <a href="#portfolio">
          <img src="assests/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
