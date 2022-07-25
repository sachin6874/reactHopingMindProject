
function Navbar() {
    return (
        <div>
          <div className="navbar">
            <div className="rightSide">
            <a className="logo" href="#">Navbar</a>
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Products</a>
            <a href="#" className="disabled">Meetings</a>
            </div>
            <div className="leftSide">
                <input  placeholder="Search" type="search" />
                <button >Search</button>
            </div>
          </div>
        </div>
    );
}
export default Navbar;
