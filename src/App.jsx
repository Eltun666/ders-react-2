import React from 'react'
import "./App.scss"
import HeaderOne from './assets/Components/Header/HeaderOne/HeaderOne'
import HeaderTwo from './assets/Components/Header/HeaderTwo/HeaderTwo'
import SectionOne from './assets/Components/Main/SectionOne/SectionOne'
import SectionTwo from './assets/Components/Main/SectionTwo/SectionTwo'
import SecuionTheree from './assets/Components/Main/SectionTheree/SectionTheree'
import SectionFour from './assets/Components/Main/SectionFour/SectionFour'
import SectionFive from './assets/Components/Main/SectionFive/SectionFive'

const App = () => {
  return (
    <>
    <header>
    <HeaderOne/>
    <HeaderTwo/>
    </header>

    <main>
      <SectionOne/>
      <SectionTwo/>
      <SecuionTheree/>
      <SectionFour/>
      <SectionFive/>
    </main>

    <footer>
      <div className='footer-box'> 
        <span>Copyright © 2036 Tale SEO Agency. All rights reserved.
        Design: TemplateMo</span>
      </div>
    </footer>
    </>
  )
}

export default App
