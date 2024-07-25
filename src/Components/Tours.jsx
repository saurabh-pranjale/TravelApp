import Cards from "./Cards"

function Tours ({data,Remove}) {
    console.log(data)
    return(
        <>

        <h1 className="heading">Plan With SP😎</h1>
        
        <div className="main">
        {
            data.map((items)=>{
                return(
                    <Cards key={items.id} {...items} Remove={Remove} />
                )
            })
        }
        </div>
        </>
    )
}

export default Tours