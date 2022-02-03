import "./intro.css";
import Me from '../../img/Iam.svg';
import Mouse from '../../img/mouse.svg';



const Intro = () => {
    return (
        <div className="i">
           <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Jakub Ojcieszak</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Front-End Developer</div>
                            <div className="i-title-item">React developer</div>
                            <div className="i-title-item">UI/UX Designer</div>
                            <div className="i-title-item">Digital marketing specialist</div>
                        </div>
                    </div>
                    <p className="i-desc">
                    I am a student of Marketing Management and Innovative Brand Management who creates web applications. I am mainly interested in building relationships with customers, creating and positioning brands and communicating values.
                    </p>
                </div>
               <img src={Mouse} alt="mouse" className="i-scroll" />
           </div>

           <div className="i-right">
            <div className="i-bg"></div>
               <img src={Me} alt="I" className="i-img" />
           </div>
        </div>
    )
}

export default Intro;
