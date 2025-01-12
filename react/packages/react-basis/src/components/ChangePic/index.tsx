import { useEffect, useState } from "react"
import img1 from './assets/1.jpg'
import img2 from './assets/2.jpg'
import img3 from './assets/3.jpg'

function ChangePicContent({ srcs }: any) {
    const [index, setIndex] = useState(0)
    let timer: any = null
    function start() {
        stop();
        timer = setInterval(() => {
            setIndex((index + 1) % 3)
        }, 1000);
    }
    function stop() {
        clearInterval(timer);
    }
    useEffect(() => {
        start()
    }, [index])

    return (
        <div>
            <img src={srcs[index]} alt="" />
        </div>
    )
}
export default function ChangePic() {
    return <ChangePicContent srcs={[img1, img2, img3]} />
}
