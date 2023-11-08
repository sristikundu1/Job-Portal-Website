import { Link, NavLink } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const NavBar = () => {
    const [isHovered, setIsHovered] = useState(false);

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then((result) => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })

    }

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const navLinks = <>
        <ul className="flex gap-2 text-lg font-semibold">
            <li>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#1F1717] bg-[#FFA33C] italic" : ''
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/alljob"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#1F1717] bg-[#FFA33C] italic" : ''
                    }
                >
                    All Jobs
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/block"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending " : isActive ? "text-[#1F1717] bg-[#FFA33C] italic" : ''
                    }
                >
                    Blogs
                </NavLink>
            </li>
            {
                user ? <>
                    <li>
                        <NavLink
                            to="/addjob"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending " : isActive ? "text-[#1F1717] bg-[#FFA33C] italic" : ''
                            }
                        >
                            Add A Job
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/myjob"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending " : isActive ? "text-[#1F1717] bg-[#FFA33C] italic" : ''
                            }
                        >
                            My Jobs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/appliedjob"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending " : isActive ? "text-[#1F1717] bg-[#FFA33C] italic" : ''
                            }
                        >
                            Applied Jobs
                        </NavLink>
                    </li>

                </>:
                <>
                <li></li>
                </>
            }
        </ul>
    </>


    return (
        <div className="max-w-6xl mx-auto py-4">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="flex">
                        <img className="w-12 " src="https://i.ibb.co/LNsTCdc/Logo1.jpg" alt="" />
                        <h2 className="btn btn-ghost normal-case text-xl font-love">DreamCatalyst</h2>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <BsPersonCircle className="text-5xl mr-4 text-[#1F1717]"></BsPersonCircle>
                    <Link to="/login">
                        <button className="btn bg-[#CE5A67] capitalize text-white">LogIn</button>
                    </Link> */}

                    {
                        user ? <>

                            {/* <p>{user?.displayName}</p> */}
                            <div>
                                <img className="w-12 mx-2 rounded-full" onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    src={user?.photoURL} alt="" />{isHovered && <div>{user?.displayName}</div>}
                            </div>

                            <button onClick={handleLogOut} className="bg-[#219C90]  border rounded-lg h-10 w-28 py-1 px-9 font-semibold text-white">LogOut</button>

                        </>
                            :
                            <>
                                <BsPersonCircle className="text-5xl mr-4 text-[#1F1717]"></BsPersonCircle>
                                <Link to="/login">
                                    <button className="btn bg-[#CE5A67] capitalize text-white">Login</button>
                                </Link>
                            </>
                    }

                </div>
            </div>

        </div>
    );
};

export default NavBar;