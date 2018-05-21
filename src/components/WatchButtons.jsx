var WatchButtons = (props) => {
    {
        if (props.homeWatchedStatus === 'watched') {
            console.log(1)
            return (
                <div className="watch-tab">
                    <button className="selected" onClick={props.handleHomeWatchedClick}>Watched</button>
                    <button onClick={props.handleToWatchClick}>To Watch</button>
                </div>
            )
        } else if (props.homeWatchedStatus === 'toWatch') {
            console.log(2)
            return (
                <div className="watch-tab">
                    <button onClick={props.handleHomeWatchedClick}>Watched</button>
                    <button className="selected" onClick={props.handleToWatchClick}>To Watch</button>
                </div>
            )
        } else if (props.homeWatchedStatus === 'neutral') {
            console.log(3)
            return (
                <div className="watch-tab">
                    <button onClick={props.handleHomeWatchedClick}>Watched</button>
                    <button onClick={props.handleToWatchClick}>To Watch</button>
                </div>
            )
        }
    }
}