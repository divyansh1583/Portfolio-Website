import "./portfolio.scss"

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>My Projects</h1>
      
      <div className="container">
        <div className="item">
          <a href="https://github.com/divyansh1583/UTCL_Canteen" 
          target="_blank" rel="noopener noreferrer">
          <img src="assests/canteen.jpg" alt="" />
          </a>
          <h2>UTCL Canteen App</h2>
          
        </div>
         
        <div className="item">
         <a href="https://github.com/divyansh1583/quiz_app">
        <img src="assests/quiz.jpg" alt="" />
         </a>
         <h2>Quiz App</h2>
        </div>
      </div>

        <div className="item">
          <a href="https://github.com/divyansh1583/Mausam">
        <img src="assests/weather.jpg" alt="" />
          </a>
          <h2>API Based Weather App</h2>
        </div>
    </div>
  ) 
}
