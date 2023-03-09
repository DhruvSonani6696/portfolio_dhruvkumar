import React from 'react'
import Title from 'components/Title'
import Card from 'components/Card'

const About = () => {
  return (
    <div id="about" className='w-full md:h-screen py-6'>
        <div className='max-w-[1240px] m-auto md:grid'>
        <Title title="About Me" des="What I Do"/>
        <div className='grid grid-cols-3 gap-20 max-md:grid-cols-2 max-sm:grid-cols-1'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
        </div>
        
    </div>
  )
}

export default About


// @media (max-width: 640px)
// .sm\:grid-cols-1 {
//     grid-template-columns: repeat(1, minmax(0, 1fr));
// }