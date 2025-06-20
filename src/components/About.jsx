import React from 'react'
 
export default function About() {
  return (
    <div className="row mt-5 pt-5 col-10">
  <div className="col-4">
    <div id="list-example" class="list-group">
    </div>
  </div>
  <div className=" container col-6 text-center">
    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
      <h4 id="About Me">About Me</h4>

      <p>I'm a passionate software developer and a final-year engineering student with a strong foundation in computer science and a deep interest in building impactful software solutions. My journey in tech started with curiosity and grew into a commitment to continuous learning, clean code, and real-world problem solving.

I enjoy working across the full stack, with experience in technologies like React, Node.js, and Java, and a solid understanding of data structures, algorithms, and software design principles. I'm always excited to explore new technologies.

I thrive in collaborative environments and value writing code that's not just functional, but maintainable and scalable. I'm actively seeking opportunities to contribute to innovative projects, grow as a developer, and make a meaningful impact in the tech industry.
</p>   
    </div>
  </div>
</div>
  )
}