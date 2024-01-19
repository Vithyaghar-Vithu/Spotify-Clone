import "../styles/tab.css";

function Tab(props) {
        return(
            <div className="tabButtons">
                <div className="icon">

                </div>
                <p>{ props.value }</p>
            </div>
        );
    };


export default Tab;