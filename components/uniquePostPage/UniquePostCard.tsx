import { useState } from "react"

import Image from "next/image"

import { ImArrowDown, ImArrowUp } from "react-icons/im"
import { FaComments, FaAward } from "react-icons/fa"

import { PostTag } from "../tags/PostTag"
import { CreateResponseModal } from "./CreateResponseModal"
import { AwardsModal } from "./AwardsModal"

const UniquePostCard = () => {
	const likes = 11
	const dislikes = 1
	const [liked, setLiked] = useState<"like" | "dislike">()

	return (
		<>
			<div className="h-16 w-16 bg-blue-pallete-400 rounded-full flex justify-center items-center absolute left-8">
				<Image
					alt="imagem de perfil"
					src="/tmp/tony.jpg"
					width={42}
					height={42}
					className="rounded-full object-contain"
				/>
			</div>
			<div className="w-full bg-[#fcfcfc] rounded-lg mt-4 ml-2 grid grid-cols-7 pl-16">
				<div className="flex flex-col col-span-6">
					<div className="pt-4 flex flex-col gap-3">
						<div className="flex gap-3">
							<p className="text-3xl font-bold whitespace-nowrap max-w-[70%] text-ellipsis overflow-hidden">
								Como usa funções em python?
							</p>
							<Image
								alt="prêmio recebido"
								src="/insignias/verify.png"
								width={32}
								height={32}
								className="object-contain"
								title="Pergunta verificada por professor"
							/>
						</div>
						<div className="flex gap-4">
							<PostTag
								backgroundColor="#F4E285"
								textColor="#BA9E15"
								tagName="Atividades"
							/>
							<PostTag
								backgroundColor="#8CB369"
								textColor="#3C6C12"
								tagName="Dúvidas"
							/>
						</div>
					</div>
					<div className="flex flex-col gap-3 pt-6">
						<div className="font-semibold text-lg">
							Na atividade 9 da matéria de PCA, existem momentos que tenho que repetir
							muitos trechos de código e eu lembro do professor falando de algo sobre
							funções, talvez isso poderia solucionar meu problema. Alguém sabe como
							resolver?
						</div>
						<code className="p-3 bg-slate-200">
							{`
							<div className="flex gap-3">
								<p className="text-3xl font-bold whitespace-nowrap max-w-[70%] text-ellipsis overflow-hidden">
									Como usa funções em python?
								</p>
							</div>
                            <div className="flex gap-3">
								<p className="text-3xl font-bold whitespace-nowrap max-w-[70%] text-ellipsis overflow-hidden">
									Como usa funções em python?
								</p>
							</div>
                            <div className="flex gap-3">
								<p className="text-3xl font-bold whitespace-nowrap max-w-[70%] text-ellipsis overflow-hidden">
									Como usa funções em python?
								</p>
							</div>
                            <div className="flex gap-3">
								<p className="text-3xl font-bold whitespace-nowrap max-w-[70%] text-ellipsis overflow-hidden">
									Como usa funções em python?
								</p>
							</div>
							`}
						</code>
					</div>
					<div className="pb-3 pt-6 flex gap-4 items-center">
						<CreateResponseModal>
							<div className="flex gap-2 items-center cursor-pointer select-none">
								<FaComments size={24} />
								<p className="font-bold">Comentar</p>
							</div>
						</CreateResponseModal>
						<AwardsModal>
							<div className="flex gap-2 items-center cursor-pointer select-none">
								<FaAward size={24} />
								<p className="font-bold">Premiar</p>
							</div>
						</AwardsModal>
					</div>
				</div>
				<div className="px-4 py-6 flex justify-end">
					<div className="flex flex-col gap-3">
						<div className="flex gap-1 justify-end">
							<p className="font-bold select-none">
								{liked === "like" ? likes + 1 : likes}
							</p>
							<ImArrowUp
								size={24}
								className={`cursor-pointer text-[#6089F1] selection:text-red-100 ${
									liked === "like" ? "text-opacity-100" : "text-opacity-40"
								}`}
								onClick={() => {
									if (liked === "like") {
										setLiked(undefined)
									} else {
										setLiked("like")
									}
								}}
							/>
						</div>
						<div className="flex gap-1 justify-end">
							<p className="font-bold select-none">
								{liked === "dislike" ? dislikes + 1 : dislikes}
							</p>
							<ImArrowDown
								size={24}
								className={`cursor-pointer text-[#F1607B] selection:text-red-100 ${
									liked === "dislike" ? "text-opacity-100" : "text-opacity-40"
								}`}
								onClick={() => {
									if (liked === "dislike") {
										setLiked(undefined)
									} else {
										setLiked("dislike")
									}
								}}
							/>
						</div>
					</div>
				</div>
				<div></div>
			</div>
		</>
	)
}

export { UniquePostCard }
