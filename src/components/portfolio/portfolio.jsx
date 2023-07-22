import "./portfolio.scss"

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>My Projects</h1>
      
      <div className="container">
        <div className="item">
          <a href="https://drive.google.com/drive/folders/1VCkL4wiYY2MkCwrmhEY1w2--bJtsv_Qe?usp=sharing" 
          target="_blank" rel="noopener noreferrer">
          <img src="assests/sign.jpg" alt="" />
          </a>
          <h2>Sign Language Detection</h2>
          
        </div>
        
        <div className="item">
          <a href="https://drive.google.com/drive/folders/1TEE_L8TJ9kvbI8izjU2D3IlN3k9yi7fd?usp=sharing" target="_blank" rel="noopener noreferrer">
          <img src="assests/face.jpg" alt="" />
          </a>
          <h2>Face Mask Detection</h2>
        </div>
        
        <div className="item">
          <a href="https://drive.google.com/drive/folders/1R04aJP49k-Cc7nzuLdzLyjBZ3eP2HyUa?usp=sharing" target="_blank" rel="noopener noreferrer">
        <img src="assests/weather.jpg" alt="" />
          </a>
          <h2>API Based Weather App</h2>
        </div>
        
        <div className="item">
         <a href="https://drive.google.com/drive/folders/1bAXzUANsifkluvwmqV4tnutp6VL5xHdm?usp=sharing" target="_blank" rel="noopener noreferrer">
        <img src="assests/portfolio.jpg" alt="" />
         </a>
         <h2>React Portfolio Website</h2>
        </div>
      </div>
    </div>
  ) 
}
