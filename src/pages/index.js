import React from "react"

import ContactBar from '../components/contactBar'
import NavigationHeader from '../components/NavigationHeader'

const IndexPage = () => (
  <main>
    <ContactBar />
    <NavigationHeader activeTab = 'Home' />
  </main>
)

export default IndexPage