import { ReactElement } from "react"

import {
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverBody,
	PopoverArrow,
	PopoverCloseButton,
} from "@chakra-ui/react"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper"

import "swiper/css"
import "swiper/css/pagination"
import { AwardCard } from "./AwardCard"

interface IAwardsModal {
	children: ReactElement
}

const AwardsModal = ({ children }: IAwardsModal) => {
	return (
		<>
			<Popover>
				<PopoverTrigger>{children}</PopoverTrigger>
				<PopoverContent width="xl">
					<PopoverBody
						className="bg-[url('/backgrounds/awards.svg')] bg-no-repeat bg-cover h-80"
						width="xl"
					>
						<PopoverArrow />
						<PopoverCloseButton />
						<div className="flex flex-col pl-3 pr-8">
							<div className="flex justify-between pt-2">
								<p className="text-2xl font-bold max-w-[50%]">
									Dê um prêmio por este post!
								</p>
								<div className="flex flex-col gap-3 font-bold">
									<p>Nível da conta: B</p>
									<p>Coins: 3</p>
								</div>
							</div>
							<p className="font-semibold mt-5">Prêmios disponíveis:</p>
							<Swiper
                                centeredSlides={true}
								spaceBetween={30}
								pagination={{
									clickable: true,
								}}
								modules={[Pagination]}
								className="w-[80%] h-48 mt-3 bg-[]"
								slidesPerView={3}
							>
								<SwiperSlide>
									<AwardCard
										title="Verficado por professor"
										color="#45f557"
										imageSrc="/insignias/verify.png"
									/>
								</SwiperSlide>
								<SwiperSlide>
									<AwardCard
										title="Ótima pergunta!"
										color="#FF7AF2"
										imageSrc="/insignias/insignia.png"
									/>
								</SwiperSlide>
                                
							</Swiper>
						</div>
					</PopoverBody>
				</PopoverContent>
			</Popover>
		</>
	)
}

export { AwardsModal }
