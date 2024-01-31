import styles from "./index.module.scss";

export default function Copyright() {
  return (
    <div className={styles.body}>
      <div className={styles.CopyrightWrapper}>
        <div className={styles.Copyright}>
          <h1>Copyright</h1>
          <h3>Libri e libroni</h3>
          <h3>© [Year of Creation] - [Current Year]</h3>
          <p>All rights reserved.</p>
        </div>

        <div className={styles.Content}>
          <h1>Site Content</h1>
          <p>
            The content of this site, including text, images, graphics, sounds,
            digital downloads, and other materials, is owned by [Your Website
            Name] and is protected by international copyright laws. Unauthorized
            reproduction or distribution of any part of the site without the
            written consent of [Your Website Name] is strictly prohibited.
          </p>
        </div>

        <div className={styles.Permissions}>
          <h1>Permissions</h1>
          <p>
            For permission requests related to reproductions or distributions,
            please contact [Your Email Address].
          </p>
        </div>

        <div className={styles.Trademarks}>
          <h1>Trademarks</h1>
          <p>
            All trademarks, logos, and trade names on this site are the property
            of their respective owners and are used for illustrative purposes
            only. The use of these trademarks without the written permission of
            the owner is prohibited.
          </p>
        </div>

        <div className={styles.SiteUsage}>
          <h1>Site Usage</h1>
          <p>
            Accessing and using this site is subject to the following
            conditions:
          </p>
          <ol>
            <li>
              The user agrees to use this site only for lawful purposes and in
              accordance with applicable laws and regulations.
            </li>

            <li>
              The user agrees not to use this site in a way that interferes with
              its normal operation or compromises its security.
            </li>

            <li>
              The user agrees not to copy, reproduce, distribute, transmit,
              display, sell, license, or otherwise exploit the content of this
              site without the written consent of [Your Website Name].
            </li>
          </ol>
        </div>

        <div className={styles.ChangesAndUpdates}>
          <h1>Changes and Updates</h1>
          <p>
            We reserve the right to make changes to this copyright page at any
            time without notice. The user agrees to be bound by the most recent
            versions of this page.
          </p>
        </div>
      </div>
    </div>
  );
}
