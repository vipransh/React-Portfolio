import React,{useState, useEffect} from 'react'
import { reactProjects, fullStackProjects, uiProjects } from '../ProjectData/Projects'



function ProjectsSection(ref) {
  const [projects,setProjects]=useState([]);
  const [projectType,setProjectType]=useState("U");
 
  

  useEffect(()=>{
    setProjects(uiProjects);
  },[])




const selectProjects=(key)=>{
   if(key==="R"){
    setProjects(reactProjects)
    setProjectType("R")
   }
   if(key==="F"){
    setProjects(fullStackProjects)
    setProjectType("F")
   }
   if(key==="U"){
    setProjects(uiProjects)
    setProjectType("U")
   }
}


  return (
    <section id="projects">
        <div className='dark:bg-[#212121]'>
            <div>
            <h1 className="text-center font-bold text-4xl dark:text-white">
          Projects
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
            </div>
            <div className='w-full flex items-center gap-4 justify-center mt-10 px-1'>
              <button className={`text-xs md:text-sm px-4 py-2 mr-2 mt-2  rounded font-semibold ${projectType==="U" ? "bg-teal-600 text-white" : "bg-gray-200 text-gray-500" }`} onClick={()=>selectProjects("U")}  >UI Projects(Html+CSS)</button>
              <button className={`text-xs md:text-sm px-4 py-2 mr-2 mt-2  rounded font-semibold ${projectType==="R" ? "bg-teal-600 text-white" : "bg-gray-200 text-gray-500" }`} onClick={()=>selectProjects("R")}  >React Projects</button>
              <button className={`text-xs md:text-sm px-4 py-2 mr-2 mt-2  rounded font-semibold  ${projectType==="F" ? "bg-teal-600 text-white" : "bg-gray-200 text-gray-500" }`} onClick={()=>selectProjects("F")}  >FullStack Projects</button>
            </div>
            <div className='flex flex-col md:flex-row  gap-10 flex-wrap  items-center justify-center  mt-10 py-10 px-2'>
              {
                projects && projects.map((data,index)=>(
                  <div key={index} className='border border-black-100 rounded-md shadow-xl dark:bg-white'>
                  <div className='py-2'>
                    <h1 className='font-bold text-center'>{data.name}</h1>
                    </div>
                    <img className='w-96 ' src={data.image} alt='project-img'/>
                    <div className='flex items-center justify-between py-2 px-1'>
                      <a target='blank' className='bg-teal-600 text-white  px-2 rounded-xl' href={data.githubLink}>Github</a>
                      {data.liveLink && <a target='blank' className='bg-teal-600 text-white  px-2 rounded-xl' href={data.liveLink}>Live Link</a>}
                    </div>
                  </div>
                ))
              }
            </div>
            <div className='flex items-center justify-center mt-10'>
              <a target='blank' className='bg-teal-600 text-white py-1  px-3 rounded-xl' href='https://github.com/vipransh?tab=repositories'>View All Projects</a>
            </div>
        </div>
    </section>
  )
}

export default ProjectsSection