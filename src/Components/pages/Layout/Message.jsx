import './Message.css'
import { useEffect, useState } from 'react'


const Message = ({type, msg}) => {

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if(!msg) {
            setVisible(false)
            return
        }
       setVisible(true)
       
       const timer = setTimeout(
        () => {setVisible(false)},3000
       )

    },[msg])

    return (
        <>
            {visible &&
            (
                <div className={`message ${type}`}>{msg}</div>
            )
            }
        </>
    )
}

export default Message
