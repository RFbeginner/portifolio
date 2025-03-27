import React from 'react'
import { getImageUrl } from '../../utils'

export const Hero = () => {
  return <section>
    <div>
        <h1>Hi, I'm Ada</h1>
        <p>I'm a full-stack developer with 5 years of experience, using React and NodeJS. Reach out if you'd like to learn more

        </p>
        <a href="mailto:myemail@email.com">Contact Me</a>
    </div>
    <img src={getImageUrl("hero/heroImage.png")} alt="my image" />

  </section>
  
}


