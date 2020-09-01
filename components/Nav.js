import Link from "next/link";
import Router, { useRouter } from "next/router";
import Header from "../components/Header";
const Nav = (props) => {
  const navlinks = [
    { title: "Galaxies", href: "/set3" },
    { title: "Fates", href: "/set4" },
    { title: "About", href: "/about" },
  ];
  return (
    <>
      <nav className="nav">
        <span className="logo">
          <Link href="/">
            <a>
              <Header />
            </a>
          </Link>
        </span>

        <ul className="navlinks">
          {navlinks.map((link) => {
            return (
              <li className={link.title} key={link.title}>
                <Link href={link.href}>
                  <a>{link.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <style jsx>{`
        .nav {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 54px;
          min-width: 100%;
        }
        .navlinks {
          width: 20%;
          display: flex;
          list-style-type: none;
          justify-content: flex-end;
        }
        a {
            color: white;
            text-shadow: white 0px 0px 10px;
          margin-right:1em;
        }
        li:hover a:hover {
          color: white;
        }
        .logo {
          display: flex;
          justify-content: center;
          align-items: center;
        }
       
        }
      `}</style>
    </>
  );
};
export default Nav;
