const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">باران</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/18254632/pexels-photo-18254632/free-photo-of-portrait-of-brunette-woman-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
          alt=""
        />
        <span>مریم</span>
      </div>
      <button>خروج</button>
    </div>
  );
};

export default Navbar;
