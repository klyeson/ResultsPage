import React from 'react'
import Styles from '@/styles/Home.module.css'
import { useState, FlatList, Table } from 'react'

const Results = () => {
  const data = [
    {
      category: "Reaction",
      score: "80 / 100",
      icon: "./assets/images/icon-reaction.svg"
    },
    {
      category: "Memory",
      score: "92 / 100",
      icon: "./assets/images/icon-memory.svg"
    },
    {
      category: "Verbal",
      score: "61 / 100",
      icon: "./assets/images/icon-verbal.svg"
    },
    {
      category: "Visual",
      score: "72 / 100",
      icon: "./assets/images/icon-visual.svg"
    }
  ];

  return (
    <div className={Styles.div}>
      <div className={Styles.innerDiv}>
        <h2>Your Result</h2>
        <div className={Styles.scoreDiv}>
          <li className={Styles.p1}>76</li>
          <li className={Styles.p2}>of 100</li>
        </div>
        <div className={Styles.lowerDiv}>
          <p className={Styles.lowerp1}>Great</p>
          <p className={Styles.lowerp2}>You scored higher than 65% of the people who have taken these tests.</p>
        </div>
      </div>
      <div className={Styles.outerDiv}>
        <h2>Summary</h2>
        <div className={Styles.resultsDiv}>
          {data.map((item) => (
            <>
              <div className={Styles.render}>
                <p>{item.category}</p>
                <p>{item.score}</p>
              </div>
            </>
          ))}
        </div>
        <button className={Styles.btn}>Continue</button>
      </div>
    </div>
  )
}

export default Results