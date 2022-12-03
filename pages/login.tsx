import Image from "next/image"
import { useState } from "react"

import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"

export default function Login() {
	const [passwordVisible, setPasswordVisible] = useState(false) // adicionar validação de cpf com a lib cpf-cnpj-validator

	return (
		<div className="grid grid-cols-2 h-screen">
			<div className="bg-[url('/backgrounds/login.svg')] bg-no-repeat bg-contain flex items=center justify-center">
				<Image
					alt="garoto estudando"
					src="/assets/login.png"
					width={320}
					height={320}
					className="object-contain"
				/>
			</div>
			<div className="flex flex-col justify-center items-center gap-8">
				<div className="flex flex-col gap-4 items-center">
					<Image
						alt="ícone de um estudante"
						src="/assets/student.png"
						width={70}
						height={70}
						className="object-contain"
					/>
					<p className="font-bold text-3xl text-center">Bem vindo!</p>
				</div>
				<div className="flex flex-col gap-8 mt-2">
					<input
						type="text"
						placeholder="Seu cpf"
						className="border-b-2 border-gray-400 focus:border-green-pallete-400 outline-none p-1 transition-colors w-[20vw]"
					/>
					<div className="flex gap-2 w-[23vw] items-center">
						<input
							type={ passwordVisible ? "text" : "password" }
							placeholder="Sua senha"
							className="outline-none p-1 transition-colors flex-1 border-b-2 border-gray-400 focus:border-green-pallete-400"
						/>
						{passwordVisible ? (
							<AiFillEye
								onClick={() => setPasswordVisible(false)}
								className="cursor-pointer"
                                size={24}
							/>
						) : (
							<AiFillEyeInvisible
								onClick={() => setPasswordVisible(true)}
								className="cursor-pointer"
                                size={24}
							/>
						)}
					</div>
				</div>
				<button className="bg-green-pallete-300 hover:opacity-90 rounded-lg w-[10vw] h-12 text-white font-semibold">
					Logar
				</button>
			</div>
		</div>
	)
}
