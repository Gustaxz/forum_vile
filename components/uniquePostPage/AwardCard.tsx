import Image from "next/image"

interface IAwardCard {
	color: string
	title: string
	imageSrc: string
}

const AwardCard = ({ color, title, imageSrc }: IAwardCard) => {
	return (
		<div className="flex flex-col gap-2 items-center">
			<div
				className="h-24 w-28 rounded-lg flex flex-col items-center justify-center gap-3 border-2 cursor-pointer group"
				style={{ backgroundColor: `${color}83` , borderColor: color }}
			>
				<Image
					alt="Imagem do prêmio"
					src={imageSrc}
					width={42}
					height={42}
					className="object-contain group-hover:animate-pulse-fast"
				/>
				<div className="flex gap-1 items-center">
					<Image
						alt="Imagem do prêmio"
						src="/assets/dollar.png"
						width={16}
						height={16}
						className="object-contain"
					/>
                    <p className="font-bold">50</p>
				</div>
			</div>
			<p className="font-semibold select-none text-center">{title}</p>
		</div>
	)
}

export { AwardCard }
