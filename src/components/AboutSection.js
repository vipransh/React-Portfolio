import React from "react"
import geekBoy from '../resources/geeky-boy.png'
const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "React" },
  { skill: "Nodejs" },
  { skill: "Express" },
  { skill: "Mongodb" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16  md:px-20 px-4 dark:bg-[#212121]">
        <h1 className="text-center font-bold text-4xl dark:text-white">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left dark:text-white">
              Get to know me!
            </h1>
            <p className="dark:text-white">
              Hi, my name is Vipransh Verma and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> Frontend Developer
              based India.
            </p>
            <br />
            <p className="dark:text-white">
              I completed my postgraduation from Avadh University, Ayodhya, in 2021
              with a Master of Computer Application(M.C.A).
            </p>
            <br />
            <p className="dark:text-white">
              I have a wide range of hobbies and passions that keep me busy.
              From reading, playing sports, traveling.
              I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p>
            <br />
            <p className="dark:text-white">
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6 dark:text-white">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 text-xs md:text-sm px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <img className="w-44 hidden md:block md:relative  md:left-32 md:z-0" src={geekBoy} alt="geekBoy"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection