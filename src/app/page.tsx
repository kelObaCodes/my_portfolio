"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import calc_ext from "../../public/images/calc.png";
import ImageComponent from "./imageComponent";
const parentContainer = [
    {
        name: "child1",
        column1: "Hi!, I'm Kelvin a frontend Engineer, writer and teacher.",

        column2: "hello 3",
    },
    { name: "child2", column1: "content 1", column2: "content 2" },
    { name: "child3", column1: "text 1", column2: "text 2" },
];

const images = [
    {
        src: "/images/autochek.jpeg",
        alt: "Image 3",
        description: "I was in charge of managing over a team of frontend developers in more than 4 African countries. A platform that helps you buy or get cars on loan",
    },
    {
      
        src: "/images/secapay.jpeg",
        alt: "Image 1",
        description: "Core Engineer that help build Secapay which offers a platform for secure buy and sell + payments. Easily buy and sell goods without hassle or worries with escrow payment options and more.",
    },
    {
        src: "/images/requid.png",
        alt: "Image 2",
        description: "Led the front end team that oversaw the development, and documentation procedures of reQuid web and mobile apps.",
    },
    {
        src: "/images/kidz.png",
        alt: "Image 2",
        description: "Built structural enrichment programs that caters for 53 millions children across the USA. Also Developed and optimized the admin, vendor and customer facing react/next js applications.",
    },
    {
        src: "/images/cert.jpeg",
        alt: "Image 2",
        description: "Developed and maintained the security and privacy protocols to ensure the protection of sensitive customer information for the electronic signature platform in Switzerland.",
    },
];

export default function Home(props:any) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showComopanies, setShowCompanies] = useState(false);

    const updateChildContainer = (index: number) => {
        setCurrentIndex(index);
    };

    const prevChild = () => {
        const newIndex =
            currentIndex > 0 ? currentIndex - 1 : parentContainer.length - 1;
        updateChildContainer(newIndex);
    };

    const nextChild = () => {
        const newIndex =
            currentIndex < parentContainer.length - 1 ? currentIndex + 1 : 0;
        updateChildContainer(newIndex);
    };

    useEffect(()=>{
if(props.searchParams.src === "chrome_calculator_extension" ){
  setShowCompanies(false)
}
    },[])

    return (
        <>

            <div className={styles.parentContainer}>
                <div className={styles.childContainer}>
                    <div className={`${styles.column} ${styles.column1}`}>
                    

                        <h2 className="head-text">
                            {parentContainer[currentIndex].column1}
                        </h2>

                        <p className="description mg-top-30">
                            with Six Years of Experience Leading Frontend
                            Projects at Early Stage and Series A Companies.
                        </p>

{
  showComopanies && 
  <div className="company-img">
  {images.map((image, index) => (
      <ImageComponent
          key={index}
          src={image.src}
          alt={image.alt}
          description={image.description}
      />
  ))}
</div>
}
                       

                        <div>
                            <a
                                href="mailto:kelvin.igbinoba01.com"
                                className="send-message"
                            >
                                Send a message
                            </a>
                        </div>
                    </div>

                    <div className={`${styles.column} ${styles.column2}`}>
                    <h2 >
                          MY DEV/PROJECTS SHOWROOM
                        </h2>

<p className="mg-top-30">Calculator/ Unit Conversion chrome extension:</p>
                        {/* <Image
                            src={calc_ext}
                            alt="calculator extension"
                            className="mg-top-30"
                            // width={500}
                            // height={300}
                            layout="responsive"
                        /> */}

                        <img src="/images/calc.png"
                          width={500}
                            height={300}
                            className="mg-top-30"
                        />
                    </div>
                </div>
                {/* <div
                    className={`${styles.arrow} ${styles.arrowLeft}`}
                    onClick={prevChild}
                >
                    &#8592;
                </div>
                <div
                    className={`${styles.arrow} ${styles.arrowRight}`}
                    onClick={nextChild}
                >
                    &#877a8b44;
                </div> */}
            </div>
        </>
    );
}
