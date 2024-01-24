import "./Header.css"

export default function Header({logo, menu}){
    return(
        <section className="navbar">
            <img className="logo" src={logo} alt="logo" />
            <div className="nav-items">
                <a className="nav-item hover-underline-animation" href="/">FALCON 9</a>
                <a className="nav-item hover-underline-animation" href="/">DRAGON</a>
                <a className="nav-item hover-underline-animation" href="/">STARSHIP</a>
                <a className="nav-item hover-underline-animation" href="/">HUMAN SPACEFLIGHT</a>
                <a className="nav-item hover-underline-animation" href="/">RIDESHARE</a>
                <a className="nav-item hover-underline-animation" href="/">STARSHIELD</a>
                <a className="nav-item hover-underline-animation" href="/">STARSHIELD</a>
                <a className="nav-item hover-underline-animation" href="/">STARLINK</a>
            </div>
            <div className="shop">
                <div>
                <a className="nav-item hover-underline-animation" href="/">SHOP</a>
                </div>
                <div>
                <img className="menu" src={menu} alt="menu" />
                </div>
            </div>
            <div>
            
            </div>
        </section>
    )
}

 


 

 

 

 
