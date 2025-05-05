import immagine from '../assets/img/dc-logo.png'

const Header = () => {
    return (
        <div className="container">
            <header>
                <figure>
                    <img src={immagine} alt="" />
                </figure>
                <nav>
                    <ul>
                        <li><a href="#">Characters</a></li>
                        <li><a href="#" className='active'>Comics</a></li>
                        <li><a href="#">Movies</a></li>
                        <li><a href="#">TV</a></li>
                        <li><a href="#">Games</a></li>
                        <li><a href="#">Collectibles</a></li>
                        <li><a href="#">Videos</a></li>
                        <li><a href="#">Fans</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Shop</a></li>
                    </ul>
                </nav>
            </header>
        </div>

    )
}

export default Header
