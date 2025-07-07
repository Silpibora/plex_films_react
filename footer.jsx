export default function Footer() {

    let styles = {
        backgroundColor: " rgb(46, 46, 47)",
        height: "20rem",
        width: "100%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        color:"white",
        
    }

    return (
        <div className="footer" style={styles}>
            <div style={{margin:"1rem"}}>
            <i style={{margin:"1rem",fontSize:"20px"}} className="fa-brands fa-square-facebook"></i>
            <i style={{margin:"1rem",fontSize:"20px"}} className="fa-brands fa-instagram"></i>
            <i style={{margin:"1rem",fontSize:"20px"}} className="fa-brands fa-linkedin"></i>
            </div>
            <div style={{margin:"1rem"}}>
            <p style={{margin:"1rem"}}>&copy; Plex Pvt. Limited</p>
            </div>
            <div style={{margin:"1rem"}}>
            <a style={{margin:"1rem",textDecoration:"none",color:"white"}} href="/privacy">privacy</a>
            <a style={{margin:"1rem",textDecoration:"none",color:"white"}} href="/terms">terms</a>
            </div>
        </div>
    );
}