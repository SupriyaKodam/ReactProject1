import React from 'react'
import ButtonProject2 from './Buttonproject2'
import ChatIcon from '@mui/icons-material/Chat';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import './ContactForm.css';
import Textboxp from './Textboxp';

const ContactForm = () => {
  return (
    <section className='what'>
    <div className='who'>
    <div className='text'>
    <ButtonProject2 text="VIA SUPPORT CHAT" icon={<ChatIcon fontSize='24px'/>}/>
    <ButtonProject2 text="VIA CALL" icon={<CallOutlinedIcon fontSize='24px'/>}/>
    </div>
    <ButtonProject2
     isSecond={true}
     text="VIA EMAIL FORM" 
     icon={<MailRoundedIcon fontSize='24px'/>}/>
     <div className='box'>
    <Textboxp label='Name'/>
    <Textboxp label='E-Mail'/>
    <Textboxp label='TEXT'/>
    </div>
    </div>
    </section>
  )
}

export default ContactForm
