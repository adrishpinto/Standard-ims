import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from './../../assets/1.webp'
import img2 from './../../assets/2.webp'
import img3 from './../../assets/3.webp'
import img4 from './../../assets/4.webp'
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}
const MySlider = () => {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div
        style={{
          backgroundColor: "#ddd",
          borderRadius: "10px",
          padding: "10px"
          
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className='size-4 rounded-2xl bg-gray-500 hover:bg-slate-600 focus:bg-red-300 '>
        
      </div>
    )
  };
 

  const len = [img1,img2,img3,img4];

  return (
    <Slider {...settings}>
    {len.map((item)=>{
      return(<div>
      <img src={`${item}`} className='w-full'></img>
      </div>
      )
    })}
  </Slider>
  );
}

export default MySlider;
