import React from 'react'
import About from '../components/About/About'
import Projects from '../components/Projects/Projects'
import Talks from '../components/Talks/Talks'
import Layout from '../components/layout'



const IndexPage = () => (
  <Layout>
    <div className="ct" id="t1">
      <div className="ct" id="t2">
        <div className="ct" id="t3">
          <div className="ct" id="t4">
            <div className="ct" id="t5">
              <ul id="menu">
                <a href="#t1"><li className="icon" id="uno">About</li></a>
                <a href="#t2"><li className="icon" id="dos">Projects</li></a>
                <a href="#t3"><li className="icon" id="tres">Talks</li></a>
              </ul>
              <About></About>
              <Projects></Projects>
              <Talks></Talks>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
