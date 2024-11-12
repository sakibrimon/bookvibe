import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="navbar bg-base-100 p-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost xl:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><NavLink className={({ isActive }) => isActive ? 'btn btn-outline text-prime' : 'btn btn-ghost'} to='/'>Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'btn btn-outline text-prime' : 'btn btn-ghost'} to='/lists'>Listed Books</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'btn btn-outline text-prime' : 'btn btn-ghost'} to='/pages-read'>Pages Read</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'btn btn-outline text-prime' : 'btn btn-ghost'} to='/testimonials'>Book Lovers&apos; Testimony</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'btn btn-outline text-prime' : 'btn btn-ghost'} to='/help'>Help Center</NavLink></li>
                    </ul>
                </div>
                <div className='hidden sm:inline'>
                    <Link to='/' className="btn btn-ghost text-[28px] font-bold">Book Vibe</Link>
                </div>
            </div>
            <div className="navbar-center hidden xl:flex">
                <ul className="menu menu-horizontal px-1# gap-1">
                    <li><NavLink className={({ isActive }) => isActive ? 'btn btn-outline text-prime' : 'btn btn-ghost'} to='/'>Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'btn btn-outline text-prime' : 'btn btn-ghost'} to='/lists'>Listed Books</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'btn btn-outline text-prime' : 'btn btn-ghost'} to='/pages-read'>Pages Read</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'btn btn-outline text-prime' : 'btn btn-ghost'} to='/testimonials'>Book Lovers&apos; Testimony</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'btn btn-outline text-prime' : 'btn btn-ghost'} to='/help'>Help Center</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-prime text-white">Sign In</a>
                <a className="ml-4 btn bg-sec text-white">Sign Up</a>
            </div>
        </div>
    );
};

export default Nav;