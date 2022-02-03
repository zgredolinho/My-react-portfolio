import "./about.css";
import aboutTwo from '../../img/aboutOne.svg';


const About = () => {
    return (
        <div className="a">
           <div className="a-left">
               <div className="a-card">
                   <img src={aboutTwo} alt="about1" className="a-img" />
               </div>
           </div>
           <div className="a-right">
               <h1 className="a-title">About me</h1>
               <p className="a-sub">
               As a front-end developer I develop my projects using programming languages such as: HTML, CSS, JavaScript
               </p>
               <p className="a-desc">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis viverra suscipit. Proin blandit justo ut ultrices bibendum. Duis tristique dapibus nulla, ac pretium
               </p>
           </div>
        </div>
    )
}

export default About;
