import { Spinner } from "react-bootstrap"

const Loading = () => {
    return (
        <div className="d-flex align-items-center justify-content-center" style={{minHeight:"100vh"}}>
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
        </div>
    )
}

export default Loading