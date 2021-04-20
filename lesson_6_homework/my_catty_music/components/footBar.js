import styles from "./footBar.module.css"
export default function FootBar(){
    return(

        <div className={styles.footBar}>
            <div className={styles.footInfo}>
                <img className={styles.footImage} src="https://i.imgur.com/xDSTaej.jpg"/>
                <div>
                    <p>If It Ain't Love</p>
                    <p>Catson Derulo</p>
                </div>
            </div>
            <div className={styles.controlBar}>
                <i className="fa fa-step-backward"/>
                <i className="fa fa-pause"/>
                <i className="fa fa-step-forward"/>
                <i className="fa fa-rotate-right sm-hide"/>
                <i className="fa fa-random sm-hide"/>
            </div>

        </div>
    )
}