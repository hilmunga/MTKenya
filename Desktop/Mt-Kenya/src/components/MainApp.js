import React from "react";
import './style.css'
import Card from "./Card";
import Header from "./Header";
import ContactContainer from "./ContactContainer";
export default function MainApp() {
  return(
        <div id='body'>
            <Header/>
            <Card 
                className='section'
                img='./Capture1.PNG'
                title='About the Company' 
                description='Mount Kenya Groups Community Development Empowerment (COMDEV).'
            />

            <Card 
                className='section bg-grey'
                img='./Capture3.PNG' 
                title='•	Inclusivity
                •	Integrity
                •	Collaboration
                •	Innovation
                •	Empowerment
                '
                description='For Guranteed Social Work Protection .'
            />

            <Card 
                className='section'
                img='./Capture1.PNG' 
                title='COMDEV' 
                description=''
            />
            <ContactContainer/>
        </div>
    );
}

