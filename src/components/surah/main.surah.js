import React from "react"
import { Container } from "react-bootstrap"
import ListSurah from "./list.surah"



const MainSurah = () => {
    return (
        <React.Fragment>
            <Container >
                
                <center className="mt-4 mb-4">
                    <h3>Daftar Surah</h3>
                </center>
                
                <ListSurah/>
            </Container>
        </React.Fragment>
    )
}

export default MainSurah