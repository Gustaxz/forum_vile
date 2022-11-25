import Head from "next/head"
import Image from "next/image"

import { Select } from "@chakra-ui/react"

import { BiSearchAlt } from "react-icons/bi"
import { IoIosArrowDropdownCircle } from "react-icons/io"

export default function Home() {
	return (
		<div className="w-screen h-screen font-roboto">
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header className="h-1/6 bg-green-pallete-200 flex-1 grid grid-cols-3">
				<div className="flex justify-start items-center">
					<Image alt="logo do fórum" src="/logos/icon.png" width={112} height={112} />
				</div>
				<div className="m-auto h-12 w-full bg-gray-100 rounded-xl flex justify-start items-center">
					<BiSearchAlt size={32} className="ml-2" />
				</div>
				<div className="flex justify-end items-center pr-6">
					<div className="h-12 w-12 rounded-full bg-gray-300 flex justify-center items-center border-2 border-stone-500">
						<p className="text-3xl">J</p>
					</div>
				</div>
			</header>
			<main className="h-5/6 bg-[url('/backgrounds/posts.svg')] bg-cover bg-no-repeat">
				<p className="text-green-pallete-300 pt-4 pl-10">Ciência da Computação / PCA</p>
				<div className="mt-20 grid grid-cols-3 px-10">
					<div className="col-span-2">
						<Select
							icon={<IoIosArrowDropdownCircle />}
							placeholder="Ecolha um filtro"
							width="25%"
							background="#F1F1F1"
							border="1px"
							borderColor="#588157"
							color="#588157"
							outline="none"
						>
							<option value="likes">Com mais likes</option>
							<option value="comment">Com mais comentários</option>
							<option value="perfilLevel">Perfil com maior nível</option>
						</Select>
					</div>
					<div className="flex flex-col gap-5 items-end">
						<button className="px-8 py-2 text-white font-bold bg-blue-pallete-500 rounded-xl hover:opacity-90">Criar nova discussão</button>
					</div>
				</div>
			</main>
		</div>
	)
}
