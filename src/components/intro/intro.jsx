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
       I'm a flutter deveolper and currently pursuing my BTech in Computer Science and Engineering from Jaypee University of Information Technology, Solan.
       Below is some sneek peek into my recent projects. Feel free to explore them and leave a message for any query.
        </h5>
        </div>
        <a href="#portfolio">
          <img src="assests/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
