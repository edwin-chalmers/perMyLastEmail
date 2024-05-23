import { StyledLanding } from "./Landing.styled";
import { Link } from 'react-router-dom'

export default function Landing() {

    return (
        <StyledLanding className="landing">
            <h1>Welcome to PERMYLASTEMAIL</h1>
            <div>
                <p>
                PERMYLASTEMAIL is your smart solution for professional communication.
                </p>
                <p>
                Our AI-powered chatbot seamlessly transforms casual, unprofessional, or kurt messages into polished, corporate-appropriate language. Whether you’re navigating sensitive workplace conversations or simply seeking to enhance your email etiquette, PERMYLASTEMAIL ensures your messages are always clear, respectful, and professional. 
                </p>
                <p>
                Elevate your communication, enhance your professionalism, and make every email count with PERMYLASTEMAIL.
                </p>
            </div>
            <Link id='stepForward' to='/home'>Professionaize!</Link>
        </StyledLanding>
    )
}