import { ReactElement, cloneElement } from "react"

import Image from "next/image"

import {
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverBody,
	PopoverArrow,
	PopoverCloseButton,
} from "@chakra-ui/react"

import "swiper/css"
import "swiper/css/pagination"

interface IPerfilCard {
	children: ReactElement
}

const PerfilCard = ({ children }: IPerfilCard) => {
	return (
		<>
			<Popover>
				<PopoverTrigger>{children}</PopoverTrigger>
				<PopoverContent width="xl">
					<PopoverBody
						className="bg-[url('/backgrounds/perfil-modal.svg')] bg-no-repeat bg-cover h-80"
						width="xl"
					>
						<PopoverArrow />
						<PopoverCloseButton />
						<div className="flex flex-col gap-12 pl-6 text-white">
							<div className="flex mt-6 items-center">
								<div className="h-16 w-16 bg-blue-pallete-400 rounded-full flex justify-center items-center absolute left-8 cursor-pointer">
									{cloneElement(children, { className: "absolute" })}
								</div>
								<p className=" font-bold text-2xl ml-20">João Gabriel Pinho</p>
							</div>
							<div className="grid grid-cols-2 gap-8">
								<div className="flex flex-col gap-3 ml-1">
									<div className="flex flex-col gap-1">
										<p className="font-bold text-xl">Perfil</p>
										<div className="h-[0.15rem] w-[35%] bg-white rounded-lg"></div>
									</div>
									<div className="flex gap-2 items-center">
										<Image
											alt="prêmios do perfil"
											src="/insignias/silver-medal.png"
											width={24}
											height={24}
											className="object-contain"
										/>
										<p className="font-semibold">Perfil nível B</p>
									</div>
									<div className="flex gap-2 items-center">
										<Image
											alt="prêmios do perfil"
											src="/insignias/insignia.png"
											width={24}
											height={24}
											className="object-contain"
										/>
										<p className="font-semibold">3x Ótima pergunta</p>
									</div>
									<div className="flex gap-2 items-center">
										<Image
											alt="prêmios do perfil"
											src="/insignias/verify.png"
											width={24}
											height={24}
											className="object-contain"
										/>
										<p className="font-semibold">2x Verficado por professor</p>
									</div>
								</div>
                                <div className="flex flex-col gap-3 ml-1">
									<div className="flex flex-col gap-1">
										<p className="font-bold text-xl">XP e Coins</p>
										<div className="h-[0.15rem] w-[50%] bg-white rounded-lg"></div>
									</div>
									<div className="flex gap-2 items-center">
										<Image
											alt="prêmios do perfil"
											src="/assets/dollar.png"
											width={24}
											height={24}
											className="object-contain"
										/>
										<p className="font-semibold">143 Coins</p>
									</div>
									<div className="flex gap-2 items-center">
										<Image
											alt="prêmios do perfil"
											src="/assets/level-up.png"
											width={24}
											height={24}
											className="object-contain"
										/>
										<p className="font-semibold">500 XP</p>
									</div>
								</div>
							</div>
						</div>
					</PopoverBody>
				</PopoverContent>
			</Popover>
		</>
	)
}

export { PerfilCard }
