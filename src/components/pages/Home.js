import React from 'react';
import Avatar from '../../assets/Avatar.png'

function About() {

    const AboutPage = {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        backgroundColor: '#d8e1ff'
    }
    // const PictureStyle = {
    //     height: '250px', 
    //     width: '250px',  
    //     borderRadius: '5px',
    //     padding: '20px',
    //     display: 'flex',
    //     marginLeft: 'auto',
    //     marginRight: 'auto',
    // }
    const Pstyle = {
         display: 'flex', 
         textAlign: 'center', 
         fontSize: '20px', 
         padding: '90px'
    }
    const h1 = {
        fontSize: '50px',
        marginTop: '20px'
    }
    
    return (   
        <section style={AboutPage}>
            <h1 style={h1}>About Me</h1>
        <div className="container-content">
                <img src={Avatar} id="Avatar"></img>
            <p style={Pstyle}>
                My name is Cindy, a passionate full-stack developer with a background in various programming languages and frameworks. 
                Specialized in JavaScript, jQuery, React, CSS, HTML5, Node.js, Express.js, SQL, NoSQL(MongoDB) and React.
                Staying on top of your game in a fast moving industry of web development means 
                you never stop learning and you are constantly improving and learning from others. 
                Being able to work both in collaborating groups and independantly is very important 
                in any field, but even more when working with other developers.
                <br/>
                <br/>
                I seek a career in which I can apply the skills I've learned in my study of 
                full-stack web development and to become an asset to the company in which 
                I will collaborate with and continue to grow. 
            </p>    
        </div>
        </section>
    )
}

export default About;