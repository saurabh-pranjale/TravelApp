import { useState } from "react"

function Cards({ id, name, info, image, price, Remove }) {
    const [read, setRead] = useState(false)
    const desc = read ? info : info.substring(0, 100) + "..."
    return (
        <section id="Card">
            <img src={image} alt="tour_img" />
            <div style={{width:'96%',margin:'auto'}}>
            <h4 className="title">{name}</h4>
            <p className="price">₹ {price}</p>
            <p className="information">{desc} {read ? <span onClick={()=>{setRead(false)}} style={{cursor:'pointer',color:'#0984e3'}}>Read Less</span> : <span onClick={()=>{setRead(true)}} style={{cursor:'pointer',color:'#0984e3'}}>Read More</span> } </p>
            
            </div>
            <button className="card_button" onClick={() => { Remove(id) }}>Delete</button>
        </section>
    )
}

export default Cards