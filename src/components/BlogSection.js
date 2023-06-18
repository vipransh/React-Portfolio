import React,{useEffect,useState} from 'react'

function BlogSection() {
    const [blogs,setBlogs]=useState();
    const query = `
    {
      user(username: "Vipransh") {
        publication {
          posts{
            slug
            title
            brief
            coverImage
          }
        }
      }
    }
  `;

 

  useEffect(()=>{
    const fetchPosts = async () => {
        const response = await fetch('https://api.hashnode.com', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({ query }),
        })
        const ApiResponse = await response.json();
        setBlogs(ApiResponse.data.user.publication.posts);
        // console.log(ApiResponse.data.user.publication.posts); 
      };
    fetchPosts()
  },[query])

  return (
    <section className='py-20' id='blog'>
        <div>
            <div>
              <h1 className="text-center font-bold text-4xl dark:text-white">
                  Blogs
                 <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
              </h1>
            </div>
            <div className='flex flex-col-reverse items-center gap-8 mt-10'>
                {
                    blogs && blogs.map((data,index)=>(
                        <div key={index} className='flex flex-col md:flex-row  gap-5 p-2 w-[90%] md:w-4/5 border border-black-500 shadow-lg rounded-lg dark:bg-white'>
                            <img className='w-96 border border-black-400 rounded-lg' src={data.coverImage} alt='blog-img'/>
                            <div>
                                <h1 className='font-bold '>{data.title}</h1>
                                <p className='mt-4 mb-4 text-gray-600'>{data.brief}</p>
                                <a className=' bg-teal-600 text-white px-2 py-1 rounded-xl' target='blank' href={`https://vipranshverma.hashnode.dev/${data.slug}`}>View Post</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default BlogSection