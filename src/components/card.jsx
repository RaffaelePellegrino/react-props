import './cardstyle.css'
function Card(){
    return(
        <div className="card">
            <div className="a60">
                <img src="https://images.unsplash.com/photo-1524889777220-eae0b973ec80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
            <div className="a40">
                <h2>Titolo del Post</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo temporibus, dolorum minima ratione vitae molestiae explicabo natus magnam vel perferendis.</p>
                <button>Leggi di più</button>
            </div>
        </div>
    )
}

export default Card