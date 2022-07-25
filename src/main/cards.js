

const Cards=({url,name,about})=>(
    
        <div className="card">
            <img src ={url} alt="textimage" ></img>
             <div className="card-about">
             <h3>{name}</h3>
             <p>{about}</p>
             <button>Go Somewhere</button>
             </div>

        </div>

)
export default Cards;