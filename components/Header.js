import { Icon, Header, Image } from "semantic-ui-react";
import styles from "../styles/Home.module.css";
export default function Title() {
  return (
    <div className={styles.header}>
      <Header as="h1" color="yellow" size="massive">
        <Image src="/Images/Set3/tftpenguin.png" />
        Team Fight Tactics Calculator
        <Image src="/Images/Set3/tftpenguin.png" />
      </Header>
    </div>
  );
}
