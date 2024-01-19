import Center from "../components/center";
import Left from "../components/left";
import Player from "../components/player";
import Right from "../components/right";
import "../styles/main.css";

function MainPage() {
    // const username = " ", password= " ";
    // render();
        return(
            // <LoginPage>
            <div className="wrapper">
                <div className="top">
                    <Left/>
                    <Center/>
                    <Right/>
                </div>
                
                <Player/>
            </div>
            // </LoginPage>
        );
    };


export default MainPage;