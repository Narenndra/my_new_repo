/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Scalable Web Application Deployment with AWS 🎉",
    description:
      "For my inaugural project leveraging Amazon Web Services (AWS), I embarked on developing a scalable web application designed to handle high traffic and ensure reliability. The project involved setting up a robust cloud infrastructure utilizing various AWS services, including",
    url: "https://d18fw33zvmt3wn.cloudfront.net/",
  },
  {
    title: "Toda - Streamlined Task Management",
    description:
      "Toda is a task management web application designed to simplify and enhance productivity for individuals and teams. The goal of this project was to create an intuitive, user-friendly interface that allows users to easily organize, prioritize, and track their tasks.",
    url: "http://narentodoapp.ccbp.tech",
  },
  {
    title: "Enhanced Wikipedia Viewer",
    description:
      "The Enhanced Wikipedia Viewer project aims to improve the user experience of browsing and accessing Wikipedia content. By incorporating modern web development practices and user-centric design principles, this project seeks to make Wikipedia's vast repository of knowledge more accessible and engaging.",
    url: "http://wikipedia.naren3.s3-website.ap-south-1.amazonaws.com/",
  },
  {
    title: "Gen-AI - Intelligent Content Generation",
    description:
      "Gen-AI is an innovative project aimed at harnessing the power of artificial intelligence to generate high-quality, contextually relevant content. This project explores the capabilities of advanced machine learning models to assist with content creation, offering users a smart and efficient way to produce written material.",
    url: "http://narengenai.ccbp.tech",
  },
  {
    title: "Plan Your Trip - Personalized Travel Planning",
    description: "Plan Your Trip is a comprehensive web application designed to streamline and enhance the travel planning experience for users. This project aims to provide a one-stop solution for all travel-related needs, from itinerary creation to booking accommodations and activities.",
    url: "http://narentourisum.ccbp.tech",
  },
  {
    title: "Interactive Sales Dashboard with Power BI",
    description: "The Interactive Sales Dashboard project leverages the capabilities of Microsoft Power BI to create a dynamic and insightful visualization tool for sales data analysis. This project aims to provide stakeholders with real-time insights into sales performance, helping to drive informed decision-making and strategic planning",
    url: "https://drive.google.com/file/d/1UUyYunAcFr8L-wlywvIv9tNZinxhx6Q3/view?usp=drive_link",
  },
  {
    title: "Country Population Finder",
    description: "The Country Population Finder project is a web application designed to provide users with quick and accurate population data for countries around the world. This project aims to make demographic information easily accessible through a user-friendly interface and reliable data sources",
    url: "http://findpopulation.naren2.s3-website.ap-south-1.amazonaws.com/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>My Projects</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src="https://res.cloudinary.com/dlowipiap/image/upload/v1705831555/WhatsApp_Image_2024-01-12_at_14.49.26_d7f8ce98_cz742i.jpg"
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" style={{backgroundColor:"pink"}} key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
