import React from "react";

const Search = () => {
	return (
		<div className='flex flex-row align-baseline mx-5 h-10 w-96'>
			<div className='flex flex-row justify-center items-center'>
				<p className='mr-4'>S</p>
				<input
					className='bg-white h-10 w-96 border-none'
					placeholder='Search'
				/>
			</div>
			<div className="flex flex-row">
				<div></div>
				<div>
					<div>i</div>
					<div>M</div>
				</div>
			</div>
		</div>
	);
};

export default Search;
