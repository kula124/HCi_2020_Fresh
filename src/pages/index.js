import React from "react"

import Header from '../components/Header'
import SideBar from "../components/SideBar"
import StatusCard from "../components/StatusCard"

const IndexPage = () => (
  <main>
    <Header />
    <div style={{display: 'flex'}}>
      <SideBar activeTab='Početna' />
      <StatusCard />
    </div>
  </main>
)

export default IndexPage
