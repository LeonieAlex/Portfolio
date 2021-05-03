import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'Contact'} span={'Contact'} />
            </div>
            <div className="ContactPage">
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+62 8967 2828 655'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'leonie.alexandra22@gmail.com'} title={'Email'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
