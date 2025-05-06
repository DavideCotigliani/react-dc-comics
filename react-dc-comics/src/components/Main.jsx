import firstImagine from '../assets/img/buy-comics-digital-comics.png'
import secondImagine from '../assets/img/buy-comics-merchandise.png'
import thirdImagine from '../assets/img/buy-comics-subscriptions.png'
import fourthImagine from '../assets/img/buy-comics-shop-locator.png'
import fifthImagine from '../assets/img/buy-dc-power-visa.svg'
import ListComics from './ListComics'
const Main = () => {
    return (
        <>
            <div className="blackContainer">
                <div className="firstLine">
                    <ListComics />
                </div>
            </div>
            <div className="blueContainer">
                <div className="secondLine">
                    <div className="littleImages">
                        <img src={firstImagine} alt="" />
                        <div className="didascalies">
                            <span>DIGITAL COMICS</span>
                        </div>
                        <img src={secondImagine} alt="" />
                        <div className="didascalies">
                            <span>MERCHANDISE</span>
                        </div>
                        <img src={thirdImagine} alt="" />
                        <div className="didascalies">
                            <span>SUBSCRIPTIONS</span>
                        </div>
                        <img src={fourthImagine} alt="" />
                        <div className="didascalies">
                            <span>POWERSHOP LOCATOR</span>
                        </div>
                        <img src={fifthImagine} alt="" />
                        <div className="didascalies">
                            <span>DC POWER VISA</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main
