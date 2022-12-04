import Image from "next/image"
import { useState } from "react"

import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"

import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { cpf as validadeCpf } from "cpf-cnpj-validator"
import Head from "next/head"

interface IFormInputs {
	cpf: string
	password: string
}

const schema = yup
	.object({
		cpf: yup
			.string()
			.required("cpf é obrigatório")
			.test("test-invalid-cpf", "cpf inválido", (cpf) => {
				return validadeCpf.isValid(cpf!)
			}),
		password: yup.string().min(8, "mínimo de 8 caracteres").required("senha é obrigatória"),
	})
	.required()

export default function Login() {
	const [passwordVisible, setPasswordVisible] = useState(false)
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormInputs>({
		resolver: yupResolver(schema),
	})

	const onSubmit = (data: IFormInputs) => console.log(data)

	return (
		<>
			<Head>
				<title>Login</title>
			</Head>
			<div className="sm:grid grid-cols-2 h-screen flex sm:items-stretch justify-center items-center">
				<div className="bg-[url('/backgrounds/login.svg')] bg-no-repeat bg-contain sm:flex items=center justify-center hidden">
					<Image
						alt="garoto estudando"
						src="/assets/login.png"
						width={320}
						height={320}
						className="object-contain"
					/>
				</div>
				<div className="sm:flex flex-col justify-center items-center gap-8">
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
					<form onSubmit={handleSubmit(onSubmit)} className="sm:mt-2 mt-8">
						<div className="flex flex-col sm:gap-8 gap-12">
							<div className="flex flex-col gap-1">
								<input
									{...register("cpf")}
									type="text"
									placeholder="Seu cpf"
									className="border-b-2 border-gray-400 focus:border-green-pallete-400 outline-none p-1 transition-colors sm:w-[20vw]"
								/>
								<p className="h-1 text-red-400">{errors.cpf?.message}</p>
							</div>
							<div className="flex gap-2 sm:w-[23vw] items-center">
								<div className="flex flex-col gap-1 flex-1">
									<input
										{...register("password")}
										type={passwordVisible ? "text" : "password"}
										placeholder="Sua senha"
										className="outline-none p-1 transition-colors flex-1 border-b-2 border-gray-400 focus:border-green-pallete-400"
									/>
									<p className="h-1 text-red-400">{errors.password?.message}</p>
								</div>
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
						<button
							className="bg-green-pallete-300 hover:opacity-90 rounded-lg sm:w-[10vw] h-12 text-white font-semibold mt-8 w-full"
							type="submit"
						>
							Logar
						</button>
					</form>
				</div>
			</div>
		</>
	)
}
