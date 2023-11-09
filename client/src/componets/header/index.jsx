import './style.scss'
import logo from '../../assets/img/icon/logo.svg'
import search from '../../assets/img/icon/search.svg'
import myshort from '../../assets/img/icon/myshort.svg'
import mycard from '../../assets/img/icon/mycard.svg'
import profpic from '../../assets/img/picture/prof-pic.svg'
import downicon from '../../assets/img/icon/down-icon.svg'


const Header = () => {
    return (
        <header>
            <div className="main-header">

                <div className="header-logo">

                    <img src={logo} alt="" />
                    <div className="logo-txt">
                        <h2>Groceyish</h2>
                        <h3>GROCERY</h3>
                    </div>

                </div>

                <div className="search-wrapper">

                    <div className="search-container">

                        <select name="" id="">
                            <option value="">All Categories</option>
                            <option value="">vegetables</option>
                            <option value="">friuts</option>
                        </select>

                        <div className="line"></div>

                        <input type="text" placeholder="Search for items..." />
                    </div>

                    <button>
                        <img src={search} alt="" />
                    </button>
                </div>


                <div className="my-counters">

                    <div className="counter-box">
                        <img src={mycard} alt="" />
                        <div className="txt-wrapper">
                            <p>Wishlist</p>
                        </div>
                    </div>

                    <div className="counter-box">
                        <img src={myshort} alt="" />
                        <div className="txt-wrapper">
                            <h3>My cart</h3>
                            <p>$21</p>
                        </div>
                    </div>

                    <div className="toggle-menu">
                        <img src={profpic} alt="" />
                        <h3>Ramzi Cherif</h3>
                        <img id='togglearow' src={downicon} alt="" />
                    </div>





                </div>

            </div>
            <div className="links-header"></div>
        </header>
    );
}

export default Header