import { Divider } from "@chakra-ui/react"
import Link from "next/link"
import { useRouter } from "next/router"

const SelectPostTag = () => {
    const { asPath } = useRouter()

	return (
		<div className="mt-5 flex flex-col items-center">
			<p className="text-blue-pallete-400">Categorias</p>
			<Divider
				color="blue.400"
				height="1px"
				backgroundColor="#028090"
				className="mt-2"
				width="170px"
			/>
			<div className="flex flex-col gap-3 mt-6">
				<Link className="flex gap-3 items-center" href={`${asPath}/atividades`}>
					<div className="h-4 w-4 rounded-full bg-random-pallete-200" />
					<p>Atividades</p>
				</Link>
				<Link className="flex gap-3 items-center" href={`${asPath}/duvidas`}>
					<div className="h-4 w-4 rounded-full bg-random-pallete-100" />
					<p>Dúvidas</p>
				</Link>
				<Link className="flex gap-3 items-center" href={`${asPath}/ideias`}>
					<div className="h-4 w-4 rounded-full bg-random-pallete-300" />
					<p>Ideias</p>
				</Link>
				<Link className="flex gap-3 items-center" href={`${asPath}/problemas`}>
					<div className="h-4 w-4 rounded-full bg-random-pallete-500" />
					<p>Problemas</p>
				</Link>
				<Link className="flex gap-3 items-center" href={`${asPath}/`}>
					<div className="h-4 w-4 rounded-full bg-white" />
					<p>Tudo</p>
				</Link>
			</div>
		</div>
	)
}

export { SelectPostTag }
