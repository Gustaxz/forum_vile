import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

import { FcLike } from "react-icons/fc"
import { FaComments } from "react-icons/fa"

import { PostTag } from "../tags/PostTag"

const PostCard = () => {
    const { asPath } = useRouter()

	return (
		<Link className="bg-[#F1F1F1] h-32 w-[80%] flex gap-4 rounded-lg" href={`${asPath}/post/5fg94kut98w5`} /* hash do post, por enqaunto, aleatório */> 
			<div className="flex justify-center items-center ml-6">
				<div className="h-14 w-14 bg-blue-pallete-400 rounded-full flex justify-center items-center">
					<Image
						alt="imagem de perfil"
						src="/tmp/tony.jpg"
						width={35}
                        height={35}
						className="rounded-full object-contain"
					/>
				</div>
			</div>
			<div className="grid grid-rows-3 py-1">
				<div className="flex items-center text-xl gap-4">
					<p>Como usa funções em python?</p>
					<div className="flex gap-4">
						<PostTag
							backgroundColor="#F4E285"
							textColor="#949494"
							tagName="Atividades"
						/>
						<PostTag backgroundColor="#8CB369" textColor="white" tagName="Dúvidas" />
					</div>
				</div>
				<div className="flex items-center gap-3">
                    <Image src="/tmp/silver-medal.png" alt="prêmio do post" height={28} width={28} title='Perfil nível B'/>
                    <Image src="/tmp/insignia.png" alt="prêmio do post" height={28} width={28} title='Prêmio de "Ótima pergunta!"'/>
                </div>
				<div className="flex items-center gap-4">
					<div className="flex items-center gap-2">
						<FaComments size={24} />
						<p className="flex justify-center mt-[0.35rem] font-bold">2</p>
					</div>
					<div className="flex items-center gap-2">
						<FcLike size={24} />
						<p className="flex justify-center mt-[0.35rem] font-bold">2</p>
					</div>
				</div>
			</div>
		</Link>
	)
}

export { PostCard }
