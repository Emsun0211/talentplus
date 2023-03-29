import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Virtual, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { TestimonialCard } from "./TestimonialCard";
import Heading from "../Heading/Heading";
SwiperCore.use([Virtual, Navigation, Pagination]);

const cardItems = [
	{
		text: "High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
		user: "Bella Moon",
		role: "Product Designer",
	},
	{
		text: "High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
		user: "Bella Moon",
		role: "Product Designer",
	},
	{
		text: "High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
		user: "Bella Moon",
		role: "Product Designer",
	},
	{
		text: "High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
		user: "Bella Moon",
		role: "Product Designer",
	},
	// {
	// 	text: "High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
	// 	user: "Bella Moon",
	// 	role: "Product Designer",
	// },
	// {
	// 	text: "High-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world",
	// 	user: "Bella Moon",
	// 	role: "Product Designer",
	// },
];

const Testimonial = () => {
	return (
		<div className='bg-[#F8F9FC] pt-[5rem] pb-[2rem] overflow-x-hidden w-[100vw]'>
			<Heading title={"What Our Clients Are Saying"} />
			<Swiper
				breakpoints={{
					1024: { slidesPerView: 3 },
					768: { slidesPerView: 2 },
					480: { slidesPerView: 1 },
				}}
				slidesPerView='1'
				spaceBetween={50}
				centeredSlides={true}
				loop={true}
				pagination={{
					clickable: true,
				}}
				modules={[Navigation, Pagination]}>
				{cardItems.map((items, idx) => {
					return (
						<SwiperSlide className='grid grid-cols-1 gap-x-[2rem] mb-[3rem] '>
							<TestimonialCard items={items} />
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};

export default Testimonial;
