import React, {useState}from 'react'
import styles from './filter.module.css'
import axios from "axios"


function Filter({filter}) {
    const [gender, setGender] = useState("")
    const [status, setStatus] = useState("")

    const filterData = () => {
        const genderUrl = gender ? `gender=${gender}&` : "";
        const statusUrl = status ? `status=${status}` : ""; 


        const axiosFilter = async () => {
            const res = await axios(`https://rickandmortyapi.com/api/character/?${genderUrl}${statusUrl}`)
            console.log(`https://rickandmortyapi.com/api/character/?${genderUrl}${statusUrl}`)
            filter(res.data.results)
        }
        axiosFilter();
    }


    const handleGenderChange = (event) => {
        setGender(event.target.value)
    }
 
    const handleStatusChange = (event) => {
        setStatus(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        filterData()
    }

    

    return (
      <div className={styles.filter}> 
        <div className={styles.filterContainer}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label className={styles.selectBox}>
                    Gender:
                        <select
                        className={styles.options}
                        value={gender}
                        name="gender"
                        onChange={handleGenderChange}
                        >
                            <option value="">All</option>
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                            <option value="genderless">Genderless</option>
                            <option value="unknown">unknown</option>
                        </select>
                </label>
                <label className={styles.selectBox}>
                    Status:
                        <select
                        className={styles.options}
                        value={status}
                        name="status"
                        onChange={handleStatusChange}
                        >
                            <option value="">All</option>
                            <option value="alive">Alive</option>
                            <option value="dead">Dead</option>
                            <option value="unknown">unknown</option>
                        </select>
                </label>
                <input className={styles.formBtn} type="submit" value="search" />
            </form>
        </div>
     </div>
    )
}

export default Filter
