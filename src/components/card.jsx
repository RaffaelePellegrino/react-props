import './cardstyle.css'
function Card({ title, image, content, tags }){
    return(
        <div className="card">
            <div className="a60">
                <img src={image}/>
            </div>
            <div className="a40">
                <h2>{title}</h2>
                <p>{content}</p>
                <div className='containerTags'>
                    {tags.map((tag, index) =>{
                        return(
                        <p key={index} className={tag}><strong>{tag} </strong></p>
                    )
                    })}
                </div>
                
            </div>
        </div>
    )
}

export default Card