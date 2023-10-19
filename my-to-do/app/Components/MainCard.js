import { Card } from "react-bootstrap"
import TaskInput from "./TaskInput"

export default function MainCard() {
    
    return(
        <Card className="taskCard" style={{
            width: '30%',
            margin: 'auto'
        }}>
            <Card.Body>
                <Card.Text>
                    <TaskInput />
                </Card.Text>
            </Card.Body>
        </Card>
    )
    }