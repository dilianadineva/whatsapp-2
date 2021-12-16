import styled from 'styled-components'
import Avatar from '@mui/material/Avatar';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import * as EmailValidator from 'email-validator'

function Sidebar() {

    const createChat = () => {
        const input = prompt('Enter an email for the user you want to chat with')

        if(!input) return null; //if there was no input

        if(EmailValidator.validate(input)){
            //add chat into the database 'chats' collection
        }
    }

    return (
        <Container>
            <Header>
                <UserAvatar />
                <IconsContainer>
                    <IconButton>
                    <ChatIcon />
                    </IconButton>
                    <IconButton>
                    <MoreVertIcon />
                    </IconButton>
                </IconsContainer>
            </Header>
            <Search>
                <SearchIcon />
                <SearchInput/>
                <SidebarButton onClick={createChat}>Start a new chat</SidebarButton>

                {/* List of chats */}
            </Search>


        </Container>
    )
}

export default Sidebar

const Container = styled.div``

const Header = styled.div`
    display: flex;
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 1;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    height: 80px;
    border-bottom: 1px solid whitesmoke;
`

const IconsContainer = styled.div``
const Search = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 2px;
`
const SearchInput = styled.input`
outline-width: 0;
border: none;
flex: 1;
`

const SidebarButton = styled(Button)`
    width: 100%;
    &&& {
        border-top: 1px solid whitesmoke;
        border-bottom: 1px solid whitesmoke;
    }
`

const UserAvatar = styled(Avatar)`
cursor: pointer;

:hover{
    opacity: 0.8
}
`

