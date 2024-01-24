import "./Item.css"

export default function Item({img, time, mission, button}){
    return(
        <div className="item" style={{backgroundImage: `url(${img})`}}>
            <div className="container">
                <h3>{time}</h3>
                <h1>{mission}</h1>
                <button>{button}</button>
            </div>
        </div>
    )
}