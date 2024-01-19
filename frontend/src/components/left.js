import "../styles/left.css";
import PlaylistCard from "./playlistCard";
import Tab from "./tab";

function Left() {
    // const username = " ", password= " ";
    // render();
        return(
            <div className="left">
                <div className="leftTop">
                    <Tab value="Home" icon="" />
                    <Tab value="Search" icon="" />
                </div>
                <div className="leftBottom">
                    <div className="tabHeader">
                        <div className="headerIcon">

                        </div>
                        <h3>Your Playlist</h3>
                        <div className="addIcon">

                        </div>
                        <div className="showMoreIcon">

                        </div>
                    </div>

                    <div className="playlistDisplay">
                        <PlaylistCard/>
                    </div>
                </div>
            </div>
        );
    };


export default Left;