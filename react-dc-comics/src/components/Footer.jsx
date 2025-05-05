import logoImmagine from '../assets/img/dc-logo-bg.png'
import primaIcona from '../assets/img/footer-facebook.png'
import secondaIcona from '../assets/img/footer-twitter.png'
import terzaIcona from '../assets/img/footer-youtube.png'
import quartaIcona from '../assets/img/footer-pinterest.png'
import quintaIcona from '../assets/img/footer-periscope.png'
const Footer = () => {
    return (
        <>
            <div className="dcBackground">
                <div className="container">
                    <div className="allLists">
                        <div className="firstList">
                            <ul>
                                <li><h2>DC COMICS</h2></li>
                                <li>Characters</li>
                                <li>Comics</li>
                                <li>Movies</li>
                                <li>TV</li>
                                <li>Games</li>
                                <li>Videos</li>
                                <li>News</li>
                            </ul>
                        </div>
                        <div className="secondList">
                            <ul><li><h2>DC</h2></li>
                                <li>Terms of Use</li>
                                <li>Privacy Policy (New)</li>
                                <li>Ad Choises</li>
                                <li>Advertising</li>
                                <li>Jobs</li>
                                <li>Subscriptions</li>
                                <li>Talent Workshops</li>
                                <li>CPSC Certificates</li>
                                <li>Ratings</li>
                                <li>Shop Help</li>
                                <li>Contact us</li>
                            </ul>
                        </div>
                        <div className="thirdList">
                            <ul><h2>SITES</h2>
                                <li>DC</li>
                                <li>MAD Magazines</li>
                                <li>DC Kids</li>
                                <li>DC Universe</li>
                                <li>DC PowerVisa</li>
                            </ul>
                        </div>
                        <div className="dcLogo">
                            <img src={logoImmagine} alt="" />
                        </div>
                    </div>
                    <div className="fourthList">
                        <ul>
                            <h2>SHOP</h2>
                            <li>Shop DC</li>
                            <li>Shop DC Collectibles</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="lightgrey">
                <div className="container">
                    <div className="lastFooter">
                        <div className="button">
                            <span>SIGN-UP NOW!</span>
                        </div>
                        <div className="signs">
                            <span>FOLLOW US</span>
                            <div className="icons">
                                <img src={primaIcona} alt="" />
                                <img src={secondaIcona} alt="" />
                                <img src={terzaIcona} alt="" />
                                <img src={quartaIcona} alt="" />
                                <img src={quintaIcona} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
