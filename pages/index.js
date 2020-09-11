import Head from "next/head";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";
import { Card, Image, Icon, Grid } from "semantic-ui-react";
import Link from "next/link";
export default function Home() {
  const items = [
    {
      header: "Project Report - April",
      description:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
      meta: "ROI: 30%",
    },
    {
      header: "Project Report - May",
      description:
        "Bring to the table win-win survival strategies to ensure proactive domination.",
      meta: "ROI: 34%",
    },
  ];
  return (
    <div className={styles.container}>
      <Head>
        <title>TFT Calc</title>
      </Head>

      <div className={styles.blur}>
        <Nav />
        <div className={styles.content}>
          <div className={styles.indexLogo}>TFT Probability Calculator</div>
          <div className={styles.heroSpacer}>
            <Grid
              centered
              columns={3}
              verticalAlign="middle"
              stackable
              // relaxed
              // padded="vertically"
            >
              <Grid.Row>
                {/* <div className={styles.hero}> */}
                <Grid.Column width={3}>
                  <h1 className={styles.text}>WIN MORE GAMES </h1>
                </Grid.Column>
                <Grid.Column width={3}>
                  {/* <Image src="/Images/Set4/hero.jpg" size="large" circular /> */}{" "}
                  <p className={styles.textPara}>
                    Team Fight Tactics is an auto battler type game created by
                    Riot Games. Decision making in this game revolves around
                    risk management and economy. Where one gold can snowball a
                    game, making informed decisions based on probability is
                    vital
                  </p>
                </Grid.Column>
                <Grid.Column width={3}></Grid.Column>
                {/* </div> */}
              </Grid.Row>
            </Grid>
          </div>
          <div className={styles.spacer}>
            <Grid centered columns={3} verticalAlign="middle" stackable relaxed>
              <Grid.Row>
                <h1 className={styles.calcFont}>Chose Calculator </h1>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <Link href="set4">
                    <a>
                      <div className={styles.card}>
                        <img
                          src="/Images/Set4/card.jpg"
                          className={styles.cardImage}
                        />
                        <div className={styles.textContainer}>
                          <h1 className={styles.noPad}>Set 4 : Fates</h1>
                          <p className={styles.patch}> Patch: 10.18 </p>
                        </div>
                      </div>
                    </a>
                  </Link>
                </Grid.Column>
                <Grid.Column>
                  <Link href="set3">
                    <a>
                      <div className={styles.card}>
                        <img
                          src="/Images/Set3/card.jpg"
                          className={styles.cardImage}
                        />
                        <div className={styles.textContainer}>
                          <h1 className={styles.noPad}>Set 3 : Galaxies</h1>
                          <p className={styles.patch}>Patch: 10.18</p>
                        </div>
                      </div>
                    </a>
                  </Link>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

// Home.getInitialProps = async () => {
//   //fetch data on server
//   const url = "http://localhost:3000/api/units";
//   const response = await axios.get(url);
//   //return response data as an object, merged with existing props
//   return { units: response.data };
// };
