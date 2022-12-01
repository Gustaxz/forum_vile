import Image from "next/image"

import { BiSearchAlt } from "react-icons/bi"

const Header = () => {

    return (
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
    )
}

export { Header }