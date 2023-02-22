import { Card } from "react-bootstrap"

const CardJuz = (props) => {
    const openJuz = (id) => {
        window.location.href=`/juz/${id}`
      }
    return (
        <Card className="text-center p-2 juz mb-2 eff" onClick={() => openJuz(props.juz)}>
            <Card.Title >JUZ {props.juz}</Card.Title>
            <Card.Subtitle>{props.info}</Card.Subtitle>
        </Card>
    )
}

export default CardJuz