import React from "react";

const PaymentForm = () => {
	return (
		<form className="mt-6 lg:mt-[40px] mb-11 lg:flex flex-row-reverse items-end gap-x-10 xl:gap-x-20 lg:mb-10">
			<div className="shadow-[0_1px_8.4px_0_#0000001a] pt-4 pb-9 rounded-md w-full lg:pb-14 px-5 lg:p-10 h-full">
				<div className="flex justify-between">
					<div>
						<label
							htmlFor="discount"
							className="text-[#585858] font-medium text-sm lg:text-base mb-2 block"
						>
							Gift Card / Discount code
						</label>
						<input
							className="rounded-md bg-[#F9F9F9] border border-[#E3E3E3] text-sm px-2 py-2 text-[#585858] placeholder:text-[#585858]"
							type="text"
							name="discount"
							placeholder="Enter Discount Code"
						/>
					</div>
					<button
						type="button"
						className="border-[1.5px] border-[#625DF5] hover:bg-[#625DF5] text-[#625DF5] hover:text-white font-medium text-sm px-7 h-[36px] rounded-md self-end transition-all duration-200 ease-in"
					>
						Apply
					</button>
				</div>
				<div className="mt-7 lg:mt-10 grid gap-y-3 lg:gap-y-7">
					<div className="flex justify-between border-b-2 pb-2 border-[#EDEDED]">
						<span className="text-[#6C6C6C] font-medium">SubTotal</span>
						<span className="text-[#585858]">$54.000</span>
					</div>
					<div className="flex justify-between border-b-2 pb-2 border-[#EDEDED]">
						<span className="text-[#6C6C6C] font-medium">Sales tax (6.5%)</span>
						<span className="text-[#585858]">$0.000</span>
					</div>
					<div className="flex justify-between border-b-2 pb-2 border-[#EDEDED]">
						<span className="text-[#6C6C6C] font-medium">Total due</span>
						<span className="text-[#625DF5] font-medium">$54.000</span>
					</div>
				</div>
			</div>
			<div className="mt-11 w-full">
				<div className="text-[#868686]">
					<label
						htmlFor="card-number"
						className="px-2 leading-[19.6px] font-bold text-sm mb-2 block"
					>
						Card Number
					</label>
					<input
						type="text"
						className="bg-[#ECF1F4] rounded-md w-full px-3 py-3 text-black"
						name="card-number"
					/>
				</div>
				<div className="flex justify-between gap-x-6 mt-6">
					<div className="text-[#868686]">
						<label
							htmlFor="card-expiry"
							className="px-2 leading-[19.6px] font-bold text-sm mb-2 block"
						>
							Card Expiry
						</label>
						<input
							type="text"
							className="bg-[#ECF1F4] rounded-md w-full px-3 py-3 text-black"
							name="card-expiry"
						/>
					</div>
					<div className="text-[#868686]">
						<label
							htmlFor="cvv"
							className="px-2 leading-[19.6px] font-bold text-sm mb-2 block"
						>
							CVV
						</label>
						<input
							type="text"
							className="bg-[#ECF1F4] rounded-md w-full px-3 py-3 text-black"
							name="cvv"
						/>
					</div>
				</div>
				<div className="text-[#868686] mt-8">
					<label
						htmlFor="card-number"
						className="px-2 leading-[19.6px] font-bold text-sm mb-2 block"
					>
						Password
					</label>
					<input
						type="text"
						className="bg-[#ECF1F4] rounded-md w-full px-3 py-3 text-black"
						name="password"
					/>
				</div>
				<button
					type="button"
					className="w-full bg-[#524ECA] py-3 text-white rounded-md mt-14"
				>
					PAY
				</button>
			</div>
		</form>
	);
};

export default PaymentForm;
