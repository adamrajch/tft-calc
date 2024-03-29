import Link from "next/link";
import Router, { useRouter } from "next/router";
import Header from "../components/Header";
import Head from "next/head";
const Nav = (props) => {
  const navlinks = [
    { title: "Fates", href: "/set4" },
    // { title: "Galaxies", href: "/set3" },

    { title: "The Math", href: "/about" },
  ];
  return (
    <>
      <nav className="nav">
        <Head>
          <title>TFT Calc</title>
        </Head>
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
          // font-size:30px;
        }
        .navlinks {
          width: 20%;
          display: flex;
          list-style-type: none;
          justify-content: flex-end;
     font-family: 'Play', sans-serif;
        }
     
        a {
            color: white;
            text-shadow: white 0px 0px 10px;
          margin-right:1em;
          font-size:20px;
           font-family: 'Play', sans-serif;
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
