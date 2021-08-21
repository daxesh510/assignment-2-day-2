import React from 'react'
import './index.css'


const Data = [
    {
        id: 1,
        imgsrc: 'https://miro.medium.com/max/2400/1*pE2fOVDikEUwiQJlh4ggzg.jpeg',
        title: 'Web Devlopment',
        subtitle: 'Learn easy with us',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, recusandae? '
    },
    {
        id: 2,
        imgsrc: 'https://www.androiddeveloper.co.in/blog/wp-content/uploads/2016/03/Android-App-Development-2-768x284.jpg',
        title: 'Android Devlopment',
        subtitle: 'learn Android',
        desc: 'Learn App devlopment in android and made it good for customer fell lucky.'
    },
    {
        id: 3,
        imgsrc: 'https://www.dotnek.com/Files/Blog/10091/Getting-started-with-iOS-development.jpg',
        title: 'iOS Devlopment',
        subtitle: 'Learn Apple App Devlopment',
        desc: 'using App or software we learn iOS devlopment course with me.'
    },
    {
        id: 4,
        imgsrc: 'https://securecdn.pymnts.com/wp-content/uploads/2017/11/cybersecurity-1000x600.jpg',
        title: 'Cyber securities',
        subtitle: 'Learn Cyber Attacks',
        desc: 'Learn Cyber Securities is easy with us. We have Best devloper.'
    },
    {
        id: 5,
        imgsrc: 'https://cdn.pixabay.com/photo/2014/05/02/21/49/laptop-336373_960_720.jpg',
        title: 'Learn Basic Of HTML,CSS',
        subtitle: 'Easy with HTML, CSS',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, recusandae? '
    },
]




function Card() {

    return (
        <>
            <h1 className='list-title'> Course List</h1>
            <div className='main'>
            {
                Data.map((currElm) => {
                    return (
                    <div className='container' key={currElm.id} >
                        <div className='card-1'>
                            <img src={currElm.imgsrc} alt='devlop' />
                        </div>
                        <div className='details'>
                            <h2 className='card-title'> {currElm.title} </h2>
                            <h3 className='subtitle'>{currElm.subtitle}</h3>
                            <p className='description'>{currElm.desc}</p>
                            <button className='button'> Watch Now</button>
                        </div>
                    </div>
                    )
                })
            }
            </div>
        </>
    )
}

export default Card