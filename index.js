#!/usr/bin/env node
import chalk, { backgroundColorNames } from "chalk"
import boxen from "boxen"

const boxOptions ={
    padding:1,
    margin:1,
    borderStyle:"round",
    borderColor: "cyan",
    backgroundColor:"black",
     textAlign: "center"
}
const resume = (`
                ${chalk.bold.cyan("Pooja Gujwar           ")}
                ${chalk.yellow("Full Stack MERN Developer      ")}
   
    ${chalk.green("📧 Email:")} poojagujwar01@gmail.com
    ${chalk.green("🌐 Linkedin:")} https://www.linkedin.com/in/poojagujwar
    ${chalk.green("📍 location:")} Ujjain, India

    ${chalk.magenta.bold("Skills:")}
    - Frontend: HTML, CSS, Javascript, React, Redux, Bootstrap
    - Backend: Node.js, Express, MongoDB, Basic Python, PostgreSQL
    - Tools: Git, GitHub, npm, VS Code
    
    ${chalk.magenta.bold("Projects:")}
    1. Portfolio Website
       - React + Tailwind
       - Showcases personal projects & skills
    2. Data Visualization Dashboard
       - Python + MongoDB + Frontend charts
       - Interactive filters & graphs
       
    ${chalk.magenta.bold("Education:")}
         - B.Tech in Computer Science, MIT Ujjain (2023)
            
    ${chalk.magenta.bold("Experience:")}
         - Internship / Projects in Full Stack MERN Development
         
    ${chalk.green.bold("Thank you for checking my resume!")}
  
    `)

    console.log(boxen(resume, boxOptions))