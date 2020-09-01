import { Icon, Header, Image } from "semantic-ui-react";
import styles from "../styles/Home.module.css";
export default function Title() {
  return (
    <span className={styles.header}>
      <Image src="/Images/Set3/tftpenguin.png" size="tiny" />
      <h1 className={styles.logo}>TFT Calculator</h1>
      <Image src="/Images/tftlogo.png" size="tiny" />
    </span>
  );
}
