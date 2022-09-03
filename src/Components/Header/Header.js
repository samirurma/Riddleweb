import "./Header.css"
const Header=()=>{
    return (
        <div className="Header">
            <img id="img"src="images/img1.jpg" style={{height:"50px",width:"100px",borderRadius:"50%"}}/>
            <span style={{fontWeight:"bold",position:"relative",bottom:"20px",fontSize:"20px",color:"white"}}>Riddle</span>
        </div>
    )
}
export default Header;