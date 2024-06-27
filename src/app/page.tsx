"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import user_img from "../../public/images/prof.png";
import calc_ext from "../../public/images/calc.png";
import ImageComponent from "./imageComponent";
const parentContainer = [
    {
        name: "child1",
        column1: "Hi!, I'm Kelvin a frontend Engineer, writer and teacher",

        column2: "hello 3",
    },
    { name: "child2", column1: "content 1", column2: "content 2" },
    { name: "child3", column1: "text 1", column2: "text 2" },
];

const images = [
    {
        src: "/images/autochek.jpeg",
        alt: "Image 3",
        description: "Description for Image 3Description for Image 3",
    },
    {
        src: "/images/secapay.jpeg",
        alt: "Image 1",
        description: "Description for Image 1",
    },
    {
        src: "/images/requid.png",
        alt: "Image 2",
        description: "Description for Image 2",
    },
    {
        src: "/images/kidz.png",
        alt: "Image 2",
        description: "Description for Image 2",
    },
    {
        src: "/images/cert.jpeg",
        alt: "Image 2",
        description: "Description for Image 2",
    },
];

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);

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

    return (
        <>
            {/* <Image
                src={user_img}
                alt="great"
                className="pattern"
                width={2340}
            /> */}
            <div className={styles.parentContainer}>
                <div className={styles.childContainer}>
                    <div className={`${styles.column} ${styles.column1}`}>
                        <Image
                            src={user_img}
                            alt="great"
                            className="image-user"
                            width={100}
                        />

                        <h2 className="head-text">
                            {parentContainer[currentIndex].column1}
                        </h2>

                        <p className="description mg-top-30">
                            with Six Years of Experience Leading Frontend
                            Projects at Early Stage and Series A Companies.
                        </p>

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
                        <Image
                            src={calc_ext}
                            alt="calculator extension"
                            className="mg-top-30"
                            // width={500}
                            // height={300}
                            layout="responsive"
                        />
                    </div>
                </div>
                <div
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
                </div>
            </div>
        </>
    );
}
