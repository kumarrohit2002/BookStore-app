import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card } from './Card';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import '../App.css'


export const FreeBooks = () => {

    const [book,setBook]=useState([]);

    useEffect(()=>{
    const getBook= async ()=>{
      try{
        const res=await axios.get("http://localhost:4000/api/v1/getbooks");
        // console.log("Response is:",res.data.Books);
        setBook(res.data.Books);
      }catch(error){
        console.log("Error in getBook: ",error.message);
      }
    }
    getBook();  
  },[])

    const FilterData = book.filter((data) => data.category === "Free");

    var settings = {
        dots: true,
        infinite: false,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1450,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
            <div className="">
                <h1 className="text-2xl font-semibold">Free Offered Books</h1>
                <p className="text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium veritatis alias pariatur ad dolor repudiandae eligendi corporis nulla non suscipit, iure neque
                    earum?
                </p>
            </div>
            <div className="slider-container ">
                <Slider {...settings}>
                        {FilterData.length>0?(
                            FilterData.map((data)=>(
                                <Card data={data} key={data._id}/>
                            ))
                        ):(<div>Data Is Not Available</div>)}
                </Slider>
            </div>
        </div>
    )
}

export default FreeBooks;