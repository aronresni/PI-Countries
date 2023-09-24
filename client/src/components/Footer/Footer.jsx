import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { AiOutlineGithub } from 'react-icons/ai';
import "./Footer.css"

const Footer = () => {
    return (
        <footer>
            <p>Proyecto PI para el Bootcamp de Henry</p>
            <p>Hecho por Aron Resnicoff</p>
            <div className="social-icons">
                <a
                    href="https://www.linkedin.com/in/aron-resnicoff-333b2a215/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <BsLinkedin size={30} />
                </a>
                <a
                    href="https://github.com/aronresni/PI-Countries"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <AiOutlineGithub size={30} />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
