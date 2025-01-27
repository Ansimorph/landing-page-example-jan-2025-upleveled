import React from "react";
import styles from "./ExplainerList.module.css";

export default function ExplainerList() {
  return  (
  <ol className={styles.root}>
    <li>
        <h3>Scan the QR code</h3>
        <p>When it’s time to swap info, have your new contact scan your QR code with their phone camera.</p>
    </li>
    <li>
        <h3>Send a message</h3>
        <p>Your QR code is linked to a custom message you’ve created. So all they have to do is hit Send.</p>
    </li>
    <li>
        <h3>Follow-up from your inbox</h3>
        <p>At the end of the event, you can quickly scan your inbox and reply to everyone you met.</p>
    </li>
</ol>);
};

