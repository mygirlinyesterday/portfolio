import React from 'react'
import PortfolioList from './PortfolioList'
import project1 from '../../assets/1.gif'
import project2 from '../../assets/website.gif'

const data = [
  {
    pro_name: 'Portfolio',
    pro_detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aliquid perspiciatis asperiores ducimus animi corrupti explicabo harum inventore excepturi unde quis saepe rem accusamus eum, voluptatibus sunt nam minus quos vel nesciunt cum eius facere. Reprehenderit explicabo enim ipsum corporis! Doloremque quis laudantium, maxime qui incidunt magni porro. Quod, eius!',
    pro_img: project1,
    pro_tech: ['SQLserver','Data Warehouse']
  },

  {
    pro_name: 'How to Sleep Well',
    pro_detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aliquid perspiciatis asperiores ducimus animi corrupti explicabo harum inventore excepturi unde quis saepe rem accusamus eum, voluptatibus sunt nam minus quos vel nesciunt cum eius facere. Reprehenderit explicabo enim ipsum corporis! Doloremque quis laudantium, maxime qui incidunt magni porro. Quod, eius!',
    pro_img: project2,
    pro_tech: ['หมอน','ผ้าห่ม']
  }
]

export default function Archive() {

  return (
    <>
        <PortfolioList portfolio={data}></PortfolioList>
    </>
  )
}
