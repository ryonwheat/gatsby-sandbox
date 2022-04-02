import React from 'react';
import {
    FiCodepen,
    FiFacebook,
    FiGithub,
    FiInstagram,
    FiLinkedin,
  } from "react-icons/fi"

const Icon = ({name}) => {
    switch (name) {
        case 'Codepen':
            return <FiCodepen />;
        case 'Facebook':
            return <FiFacebook />;
        case 'Github':
            return <FiGithub />;
        case 'Instagram':
            return <FiInstagram />;
        case 'Linkedin':
            return <FiLinkedin />;
    }
};

export default Icon;