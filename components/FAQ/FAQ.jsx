import React, { useState } from "react";
import FAQCard from "./FAQCard";
import { faq } from "@/utils/faq";
import Heading from "../Heading/Heading";

const FAQ = () => {
	const [isOpen, setIsopen] = useState(false);
	return (
		<div className='pt-[2rem] lg:pt-[5rem] pb-[3rem]'>
			<Heading title={"Frequently Asked Questions"} />
			<div className='flex flex-col items-center justify-center  mx-auto'>
				{faq.map((faq, idx) => (
					<FAQCard
						isOpen={isOpen}
						setIsopen={setIsopen}
						key={idx}
						faq={faq}
						idx={idx}
					/>
				))}
			</div>
		</div>
	);
};

export default FAQ;
