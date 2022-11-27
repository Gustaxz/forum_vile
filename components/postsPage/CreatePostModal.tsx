import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
} from "@chakra-ui/react"

import { AiOutlinePlus } from "react-icons/ai"

const CreatePostModal = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<>
			<button
				onClick={onOpen}
				className="bg-blue-pallete-500 text-white font-bold px-8 py-2 rounded-xl hover:opacity-90"
			>
				Criar nova discussão
			</button>

			<Modal isOpen={isOpen} onClose={onClose} size="6xl">
				<ModalOverlay />
				<ModalContent className="h-[85vh]">
					<ModalCloseButton />
					<ModalBody className="bg-[url('/backgrounds/create-post.svg')] bg-cover bg-no-repeat">
						<p className="text-white text-4xl font-semibold">Crie seu post</p>
						<div className="mt-4 flex flex-col gap-3">
							<div className="flex flex-col gap-2">
								<label htmlFor="input-title" className="font-semibold">
									Título
								</label>
								<input
									type="text"
									id="input-title"
									className="w-[75%] rounded-lg p-2 outline-none border-2 border-blue-pallete-200"
								/>
							</div>
							<div className="flex gap-3 items-center">
								<p className="font-semibold mb-1">Campo de imagens:</p>
								<label
									htmlFor="input-image"
									className="h-11 w-11 rounded-lg bg-white border-2 border-blue-pallete-200 flex items-center justify-center cursor-pointer"
								>
									<AiOutlinePlus size={24} className="text-blue-pallete-200" />
								</label>
								<input
									type="file"
									id="input-image"
									className="hidden"
									accept="image/*"
								/>
							</div>
							<div className="flex gap-3 items-center">
								<p className="font-semibold mb-1">Campo de arquivos (pdf, txt):</p>
								<label
									htmlFor="input-files"
									className="h-11 w-11 rounded-lg bg-white border-2 border-blue-pallete-200 flex items-center justify-center cursor-pointer"
								>
									<AiOutlinePlus size={24} className="text-blue-pallete-200" />
								</label>
								<input
									type="file"
									id="input-files"
									className="hidden"
									accept="application/pdf, .txt"
								/>
							</div>
						</div>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	)
}

export { CreatePostModal }
