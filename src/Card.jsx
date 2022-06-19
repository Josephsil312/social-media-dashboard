import './card.css'
import facebook from './images/icon-facebook.svg'
import instagram from './images/icon-instagram.svg'
import twitter from './images/icon-twitter.svg'
import youtube from './images/icon-youtube.svg'
const Card = () => {
    return (
        <div className="container-grid">
            <div className="headingcontents">
                <h1 className="heading">Social Media Dashboard</h1>
                <h3 className='subheading'>Total Followers: 23,004</h3>
            </div>


            <div className="card">
                <div className="mainContentsTop">
                    <img src={facebook} alt="" className="top_logo" />
                    <h1 className="followers_num">1987</h1>
                    <h4 className="followers">FOLLOWERS</h4>
                    <h4 className="stats">+12 Today</h4>
                </div>

            </div>
            <div className="card">
                <div className="mainContentsTop">
                    <img src={youtube} alt="" className="top_logo" />
                    <h1 className="followers_num">1044</h1>
                    <h4 className="followers">FOLLOWERS</h4>
                    <h4 className="stats">+99 Today</h4>
                </div>
            </div>
            <div className="card">
                <div className="mainContentsTop">
                    <img src={twitter} alt="" className="top_logo" />
                    <h1 className="followers_num">11k</h1>
                    <h4 className="followers">FOLLOWERS</h4>
                    <h4 className="stats">+1099 Today</h4>
                </div>
            </div>
            <div className="card">
                <div className="mainContentsTop">
                    <img src={instagram} alt="" className="top_logo" />
                    <h1 className="followers_num">8239</h1>
                    <h4 className="followers">FOLLOWERS</h4>
                    <h4 className="stats">-144 Today</h4>
                </div>
            </div>
            <div className="subcontent"><div >Over-view Today</div></div>
            
            <div className="card">
                <div className="mainContentsBottom">
                    <h4 className="pageviewers">Page Viewers</h4>
                    <h4 className="views">87</h4>
                    <img src={facebook} alt="" className="bottom_logo" />
                    <h4 className="stats_below">+3%</h4>
                </div>
            </div>
            <div className="card">
                <div className="mainContentsBottom">
                    <h4 className="pageviewers">Likes</h4>
                    <h4 className="views">87</h4>
                    <img src={twitter} alt="" className="bottom_logo" />
                    <h4 className="stats_below">+13%</h4>
                </div>
            </div>
            <div className="card">
                <div className="mainContentsBottom">
                    <h4 className="pageviewers">Likes</h4>
                    <h4 className="views">87</h4>
                    <img src={instagram} alt="" className="bottom_logo" />
                    <h4 className="stats_below">+233%</h4>
                </div>
            </div>
            <div className="card">
                <div className="mainContentsBottom">
                    <h4 className="pageviewers">Profile Viewers</h4>
                    <h4 className="views">87</h4>
                    <img src={youtube} alt="" className="bottom_logo" />
                    <h4 className="stats_below">+123%</h4>
                </div>
            </div>
            <div className="card">
                <div className="mainContentsBottom">
                    <h4 className="pageviewers">Page Viewers</h4>
                    <h4 className="views">117</h4>
                    <img src={twitter} alt="" className="bottom_logo" />
                    <h4 className="stats_below">+453%</h4>
                </div>
            </div>
            <div className="card">
                <div className="mainContentsBottom">
                    <h4 className="pageviewers">Likes</h4>
                    <h4 className="views">827</h4>
                    <img src={instagram} alt="" className="bottom_logo" />
                    <h4 className="stats_below">+3%</h4>
                </div>
            </div>
            <div className="card">
                <div className="mainContentsBottom">
                    <h4 className="pageviewers">Likes</h4>
                    <h4 className="views">187</h4>
                    <img src={facebook} alt="" className="bottom_logo" />
                    <h4 className="stats_below">+3%</h4>
                </div>
            </div>
            <div className="card">
                <div className="mainContentsBottom">
                    <h4 className="pageviewers">Total Viewers</h4>
                    <h4 className="views">1187</h4>
                    <img src={facebook} alt="" className="bottom_logo" />
                    <h4 className="stats_below">+3%</h4>
                </div>
            </div>
        </div>
    )
}

export default Card