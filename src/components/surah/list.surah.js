import React, { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import axios from "axios"
import Loading from "../utils/loading"

const ListSurah = () => {
    const [datas, setDatas] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        let isCanceled = true
        if (isCanceled == true) {
            setLoading(true)
            axios({
                method: "GET",
                url: `${process.env.REACT_APP_BASEURL}/surah`
            }).then((result) => setDatas(result.data)).catch((err) => console.log(err)).finally(() => setLoading(false))
        }
        return () => {isCanceled = false}
    }, [])

    const openSurah = (id) => {
        window.location.href=`/surah/${id}`
    }

    if (loading) return (<Loading/>)

    return (
        <React.Fragment>
            <Table hover>
                <tbody>
                    {datas.data?.map((data, i) => {
                        return (
                            <tr key={i} onClick={() => openSurah(data.number)} className="list">
                                <td>{data.number}</td>
                                <td>{data.name.transliteration.id}</td>
                                <td className="arab-list align-middle" >{data.name.short}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </React.Fragment>
    )




}

export default ListSurah