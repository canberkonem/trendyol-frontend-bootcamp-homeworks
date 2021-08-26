import React from 'react'
import banner from "../../assets/banner.jpeg"
import styles from "./header.module.css"

function Header() {
    return (
        <div className={styles.banner}>
            <div className={styles.bannerImg}>
                <img src={banner} alt="banner"/>
            </div>
        </div>
    )
}

export default Header
