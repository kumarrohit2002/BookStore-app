import { useEffect, useState } from 'react';
import { Card } from './Card';
import axios from "axios"

const Course = () => {
  const [book,setBook]=useState([]);

  useEffect(()=>{
    const getBook= async ()=>{
      try{
        const res=await axios.get("http://localhost:4000/api/v1/getbooks");
        console.log("Response is:",res.data.Books);
        setBook(res.data.Books);
      }catch(error){
        console.log("Error in getBook: ",error.message);
      }
    }
    getBook();  
  },[])


  return (
    <div className="max-w-screen-2xl container mx-auto  md:px-20 mr-3 my-10 ">
     <div>
      <h1 className="text-2xl font-semibold mt-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore aut tenetur sapiente velit, earum quia.</h1>
      <button className="btn bg-pink-500 mx-10 my-5"><a href="/">Back</a></button>
     </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4">
        {
          book.map((data)=>(
            <Card data={data} key={data.id}/>
          ))
        }
      </div>
    </div>
  )
}

export default Course;