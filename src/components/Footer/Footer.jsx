import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer class="copy">
                    <div class="container">
                        <div className="text-center">
                            <Link to="https://www.smarteyeapps.com/">{currentYear} &copy; All Rights Reserved | Designed and Developed by Deborah Oladipo</Link>
                        </div>
                    </div>
            </footer>
        </>
    )
}

export default Footer;