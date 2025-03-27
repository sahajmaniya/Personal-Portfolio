import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import hackimg1 from "../assets/img/cvmuhackathon.png";
import hackimg2 from "../assets/img/sihhackathon.jpg";
import hackimg3 from "../assets/img/hackathon.jpg";
import hackimg4 from "../assets/img/cvmuhackathon.png";
import hackimg5 from "../assets/img/codeunnatimarathon.png";
import calendarimg from "../assets/img/calander.png";

const cardData = [
  {
    id: 1,
    imgSrc: hackimg1,
    title: "CVMU Hackathon 1.0",
    location: "ADIT, Anand",
    chipLabel: "Details",
    time: "Mar 2023",
    hackathonlink: "https://www.cvmu.edu.in/cvmuhackathon",
  },
  {
    id: 2,
    imgSrc: hackimg3,
    title: "Police Hackathon",
    location: "Vadodara, Gujarat",
    chipLabel: "Details",
    time: "Aug 2023",
    hackathonlink: "https://www.instagram.com/pierc_pu/p/Cvi9rjtSBEl",
  },
  {
    id: 3,
    imgSrc: hackimg2,
    title: "SIH Hackathon",
    location: "Bangalore, India",
    chipLabel: "Details",
    time: "Dec 2023",
    hackathonlink: "https://www.sih.gov.in/sih2023",
  },
  {
    id: 4,
    imgSrc: hackimg4,
    title: "CVMU Hackathon 2.0",
    location: "ADIT, Anand",
    chipLabel: "Details",
    time: "March 2024",
    hackathonlink: "https://www.cvmu.edu.in/cvmuhackathon",
  },
  {
    id: 5,
    imgSrc: hackimg5,
    title: "Code Unnati Marathon",
    location: "GTU, Ahmedabad",
    chipLabel: "Details",
    time: "March 2024",
    hackathonlink: "https://cu-innovation.edunetfoundation.com/",
  },
];

function HackathonCard({ data }) {
  return (
    <Card
      variant="outlined"
      orientation="horizontal"
      color="primary"
      sx={{
        "&:hover": { backgroundColor: "#252525" },
        backgroundColor: "black",
        borderRadius: 10,
        width: 320,
        margin: "0 10px",
      }}
    >
      <AspectRatio ratio="1" sx={{ width: 90, my: 1 }}>
        <img
          className="hackimg"
          style={{ objectFit: "cover" }}
          src={data.imgSrc}
          loading="lazy"
          alt="hackathonimg"
        />
      </AspectRatio>
      <CardContent sx={{ ml: 1 }}>
        <Typography
          level="title-lg"
          id="card-description"
          sx={{ color: "white", fontSize: 16 }}
        >
          {data.title}
        </Typography>
        <Typography
          level="body-sm"
          aria-describedby="card-description"
          mb={1}
          sx={{ color: "#6f7077" }}
        >
          {data.location}
        </Typography>
        <Typography
          level="body-sm"
          aria-describedby="card-description"
          mb={1}
          sx={{ color: "#6f7077", display: "flex" }}
        >
          <img className="calendarimg" src={calendarimg} alt="calendar" />
          {data.time}
        </Typography>
        <a target="_blank" href={data.hackathonlink} rel="noreferrer">
          <Chip
            variant="soft"
            color="primary"
            size="sm"
            sx={{ pointerEvents: "none" }}
          >
            {data.chipLabel}
          </Chip>
        </a>
      </CardContent>
    </Card>
  );
}



export default function HackathonCardSlider() {
  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <Slider {...settings}>
        {cardData.map((card) => (
          <div key={card.id}>
            <HackathonCard data={card} />
          </div>
        ))}
      </Slider>
    </div>
  );
}