import styles from './mainInfo.module.css'

export default function MainInfo() {
    return (
        <div className={styles.mainInfo}>
            <ul className={styles.musicList}>
                <li>
                    <p>1. One Dance</p>
                    <p className="sm-hide">Crake feat CatKid &amp; Cyla</p>
                    <p className="sm-text-right">2:54</p>
                    <p className="sm-hide"><span className="catty-cloud">CATTY CLOUD SYNC</span></p>
                </li>
                <li>
                    <p>2. Panda</p>
                    <p className="sm-hide">Cattee</p>
                    <p className="sm-text-right">4:06</p>
                    <p className="sm-hide"><span className="catty-cloud">CATTY CLOUD SYNC</span></p>
                </li>
                <li>
                    <p>3. Can't Stop the Feeling!</p>
                    <p className="sm-hide">Catin Cimberlake</p>
                    <p className="sm-text-right">3:56</p>
                    <p className="sm-hide"><span className="catty-cloud">CATTY CLOUD SYNC</span></p>
                </li>
                <li>
                    <p>4. Work From Home</p>
                    <p className="sm-hide">Cat Harmony feat Colla</p>
                    <p className="sm-text-right">3:34</p>
                    <p className="sm-hide"><span className="catty-cloud">CATTY CLOUD SYNC</span></p>
                </li>
            </ul>
        </div>
    )
}