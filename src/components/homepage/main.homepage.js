import { Tabs, Tab, Container } from "react-bootstrap"
import { React, useState } from "react"
import Juz from "../juz/main.juz"
import MainSurah from "../surah/main.surah"



const Homepage = () => {
    const banner = require('../../assets/media/banner.jpg')
    return (
        <div >
            <Container>


                <div className="banner mb-4">
                    <img src={banner} className="img-banner" />
                </div>
                <Tabs
                    defaultActiveKey="juz"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="juz" title="Juz">
                        <Juz />
                    </Tab>
                    <Tab eventKey="surah" title="Surah">
                        <MainSurah />
                    </Tab>

                </Tabs>
            </Container>
        </div>
    )
}

export default Homepage