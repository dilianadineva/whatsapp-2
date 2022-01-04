import { collection, doc, getDoc, getDocs, query, orderBy } from 'firebase/firestore'
import Head from 'next/head'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import styled from 'styled-components'
import ChatScreen from '../../components/ChatScreen'
import Sidebar from '../../components/Sidebar'
import { auth, db } from '../../firebase'
import getRecipientEmail from '../../utils/getRecipientEmail'
import { useRouter } from 'next/router'

function Chat() { //{chat, serversideMessages}
    const [user] = useAuthState(auth)
    const [chat, setChat] = useState(null)
    const [messages, setMessages] = useState(null)
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        // console.log("aaa")
        getChats()
        getMessages()
    }, [id])

    const getChats = async () => {
        // console.log("chats getting")
        const chatRef = doc(db, "chats", id);
        const chatRes = await getDoc(chatRef)
            const chat = {
                id: chatRes.id,
                ...chatRes.data()
            }
            setChat(chat)
            // console.log("chat: ", chat)
            // console.log("chat users: ", chat.users)
    }

    const getMessages = async () => {
        console.log("messages getting")
        const chatSnaphot = doc(db, "chats", id);
        const messagesRef = collection(chatSnaphot, "messages")
        const messagesQuery = query(messagesRef, orderBy("timestamp", "asc"));
        const messages = await getDocs(messagesQuery)

        const messagesArray = []
        if(messages){
            messages.forEach(message => {
                messagesArray.push(message.data())
            })
            console.log("messages: ", messagesArray)
        }
        setMessages(messagesArray)
    }

    return (
        <Container>
            <Head>
               
                    {chat && ( <title> Chat with {getRecipientEmail(chat.users, user)}</title>)}
                    
               
            </Head>
            <Sidebar />
            <ChatContainer>
            {chat && messages && ( <ChatScreen chat={chat} messages={messages} /> )}
            </ChatContainer>
        </Container>
    )
}

export default Chat

// export async function getServerSideProps(context){ //context allows to get params of the url
    //all of this is happening on the server
    // const chatRef = doc(db, "chats", context.query.id);
    // const chatRes = await getDoc(chatRef)
    // const chatSnaphot = doc(db, "chats", context.query.id);
    // const messagesRef = collection(chatSnaphot, "messages")
    // const messagesQuery = query(messagesRef, orderBy("timestamp", "asc"));
    // const messages = await getDocs(messagesQuery)

    // const messagesArray = []
    // if(messages){
    //     messages.forEach(message => {
    //         messagesArray.push(message.data())
    //     })
    //     console.log("server side messagesArray: ", messagesArray)
    // }

//     const chat = {
//         id:  chatRes.id,
//         ...chatRes.data()
//     }
//     return { props: { serversideMessages: JSON.stringify(messagesArray), chat: chat} }

// }

const Container= styled.div`
    display: flex;
`
const ChatContainer= styled.div`
    flex: 1;
    overflow: scroll;
    height: 100vh;
    /* Hide scrollbar for Chrome, Safari and Opera */
    ::-webkit-scrollbar {
    display: none;
    }
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
`
