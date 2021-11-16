import React from 'react'
import './Footer.css'

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <div>
            {/* Footer */}
            <footer class="footer">
                <div className="footer__copyright">
                    <p>Copyright &copy; 2021</p>
                </div>
                <div className="footer__social-media">
                    <FacebookIcon />
                    <TwitterIcon />
                    <LinkedInIcon />
                </div>
            </footer>
        </div>
    )
}

export default Footer
