import { Grid, Menu, Icon, Dropdown } from "semantic-ui-react";
import Link from "next/link";
const RNav = () => {
  const navlinks = [
    { title: "Fates", href: "/set4" },
    { title: "Galaxies", href: "/set3" },

    { title: "About", href: "/about" },
  ];
  const handleOpen = () => {};
  return (
    <div className="wrapper">
      <Grid container centered textAlign="center" doubling>
        <Grid.Column width={7} centered>
          <Link href="/">
            <a className="logo">TFT Calc </a>
          </Link>
        </Grid.Column>
        <Grid.Column only="computer" width={5}>
          <ul>
            {navlinks.map((link) => {
              return (
                <li key={link.title}>
                  <Link href={link.href}>
                    <a>{link.title}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Grid.Column>
        <Grid.Column only="tablet mobile" width={1}>
          {/* <div className="container" onClick={handleOpen}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div> */}
          <Menu vertical compact secondary>
            <Dropdown icon="bars" color="yellow">
              <Dropdown.Menu>
                {navlinks.map((link) => {
                  return (
                    <Link href={link.href} key={link.title}>
                      <Dropdown.Item>
                        <a className="hamlink">{link.title}</a>
                      </Dropdown.Item>
                    </Link>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </Menu>
        </Grid.Column>
      </Grid>
      <style jsx>{`
        .wrapper {
          padding-top: 1em;
        }
        .container {
          display: inline-block;
          cursor: pointer;
        }
        .hamlink {
          color: black;
        }
        .bar1,
        .bar2,
        .bar3 {
          width: 28px;
          height: 3px;
          background-color: white;
          margin: 5px 0;
        }
        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          //   overflow: hidden;
        }
        li {
          display: inline;
          text-align: center;
          padding: 14px 16px;
          text-decoration: none;
        }
        .logo {
          color: white;
          font-size: 28px;
          text-shadow: white 0px 0px 10px;
          cursor: pinter;
        }
        a {
          color: white;
          font-size: 16px;
        }
        li,
        a:hover {
          color: silver;
        }
      `}</style>
    </div>
  );
};
export default RNav;
