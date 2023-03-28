import React from "react";

const FAQCard = ({ isOpen, setIsopen, faq, idx }) => {
	const handleClick = (id) => {
		console.log(id == idx);
		if (id == idx) setIsopen(!isOpen);
	};
	return (
		<div
			className='border-b-[#A1A1A1] border-b-[1px] mb-[5px] relative p-[1rem] w-[90%] sm:w-[500px] lg:w-[800px]'
			onClick={() => handleClick(idx)}>
			<h3 className='text-[14px] md:text-[20px] font-[700] mb-[5px]'>
				{faq.title}
			</h3>
			{isOpen ? (
				<p className='text-[10px] md:text-[14px] text-[#A1A1A1] mb-[5px]'>
					{faq.body}
				</p>
			) : (
				""
			)}
			<span
				className='absolute top-0 right-0'
				// onClick={() => setIsopen(!isOpen)}
			>
				{isOpen ? "+" : "-"}
			</span>
		</div>
	);
};

export default FAQCard;
