import { useEffect, useState, useSyncExternalStore } from "react"
import { getRandom } from '@handle-react/shared'
import './Ball.css'


function Ball({ left, top, xSpeed, ySpeed, bg }: any) {
    const [BallLeft, setBallLeft] = useState(left)
    const [BallTop, setBallTop] = useState(top)
    const [BallxSpeed, setXSpeed] = useState(xSpeed)
    const [BallySpeed, setYSpeed] = useState(ySpeed)
    const duration = 16;
    useEffect(() => {
        setTimeout(() => {
            const xDis = (BallxSpeed * duration) / 1000;
            const yDis = (BallySpeed * duration) / 1000;
            let newLeft = BallLeft + xDis
            let newTop = BallTop + yDis
            if (newLeft <= 0) {
                newLeft = 0
                setXSpeed(-BallxSpeed)
            } else if (newLeft >= document.documentElement.clientWidth - 100) {
                newLeft = document.documentElement.clientWidth - 100
                setXSpeed(-BallxSpeed)
            }
            if (newTop <= 0) {
                newTop = 0
                setYSpeed(-BallySpeed)
            } else if (newTop >= document.documentElement.clientHeight - 100) {
                newTop = document.documentElement.clientHeight - 100
                setYSpeed(-BallySpeed)
            }
            setBallLeft(newLeft)
            setBallTop(newTop)
        }, duration);
    }, [BallLeft, BallTop, BallxSpeed, BallySpeed])

    return <div
        className="ball"
        style={{
            left: BallLeft,
            top: BallTop,
            background: bg || '#f40'
        }}>

    </div>
}
export default function BallList() {
    const [ballInfoes, setBallInfoes] = useState<any>([])
    let timer: any = null
    useEffect(() => {
        timer = setTimeout(() => {
            if (ballInfoes.length === 10) {
                clearInterval(timer)
                return
            }
            var info = {
                left: getRandom(0, document.documentElement.clientWidth - 100),
                top: getRandom(0, document.documentElement.clientHeight - 100),
                xSpeed: getRandom(400, 700),
                ySpeed: getRandom(400, 700),
                bg: `rgb(${getRandom(0, 255)},${getRandom(0, 255)},${getRandom(
                    0,
                    255
                )})`,
            };
            setBallInfoes([...ballInfoes, info])
        }, 1000);
    }, [ballInfoes])
    return (
        <div>
            {ballInfoes.map((item: any, i: any) => {
                return <Ball {...item} key={i} />
            })}
        </div>
    )
}
