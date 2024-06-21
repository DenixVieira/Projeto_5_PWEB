import { createContext,useState } from "react"

import Message from "../Layout/Message"

export const MessageContext = createContext()

export const MessageProvider = ({children}) => {

    const [showMessage, setShowMessage] = useState(false)
    const [message, setMessage] = useState({})

    const inform = (msg, type) => {
        setMessage({
            message: msg,
            type: type
        })
        setShowMessage(true)
        setTimeout(() => {
            setShowMessage(false)
        }, 3000);        
    }

    return(
        <MessageContext.Provider value={inform}>
            {showMessage && <Message msg={message.message} type={message.type} /> }
            {children}
        </MessageContext.Provider>
    )
}

