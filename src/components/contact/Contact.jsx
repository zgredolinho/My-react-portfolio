import "./contact.css";
import Phone from '../../img/phone-icon.jpg';
import Email from '../../img/email-icon.png';
import Address from '../../img/address-icon.png';
import { useContext, useRef, useState } from "react";
import emailjs from 'emailjs-com';
import { ThemeContext } from "../context";



const Contact = () => {

    const  formRef = useRef();
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) =>{
        e.preventDefault();
        emailjs.sendForm(
        'service_tmuefwb',
         'template_kczjk28',
          formRef.current,
           'user_LFxwXyspTrPlZ0QYgwhCt'
        )
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });

    }

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's dicsuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon"/>
                            518 891 699
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon"/>
                            jakubojcieszak@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon"/>
                            63-000 Środa Wlkp.
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story?</b> Get in touch. If you want, contact with me, write!
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                    <input style= {{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
                    <input style = {{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
                    <input style = {{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
                    <textarea style = {{backgroundColor: darkMode && "#333"}} rows = "5" placeholder="Message"
                    name="message" />
                    <button>Submit</button>
                   {done && "Thank for your message..."} 

                    </form>
                </div>
            </div>
            
        </div>
    )
}
export default Contact;