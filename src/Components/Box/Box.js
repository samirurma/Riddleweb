import "./Box.css"
const Box=()=>{
    return(
        <>
        <div className="Box-container">
            <div class="container1">
            <input className="search"type="text" style={{height:"20px"}}/>
            <img src="images/img2.png" style={{height:"20px",width:"20px",position:"relative",left:"180px",top:"10px"}}/>
            </div>
        </div>
        <div className="Box-container2">
            <div class="container2">
            <input className="search"type="text" style={{height:"20px"}}/>
            <img src="images/img2.png" style={{height:"20px",width:"20px",position:"relative",left:"180px",top:"10px"}}/>
            </div>
        </div>
        </>
    )
}
export default Box;