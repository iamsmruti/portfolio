import { Box } from '@mui/system'
import React from 'react'

const ScrollProgress = () => {
    if (typeof window !== "undefined") {
        window.onscroll = function () { myFunction() };

        function myFunction() {
            var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var scrolled = (winScroll / height) * 100;
            document.getElementById("myBar").style.height = scrolled + "%";
        }
    }
    return (
        <Box className="progress-container">
            <Box id="myBar" className="progress-bar"></Box>
        </Box>
    )
}

export default ScrollProgress