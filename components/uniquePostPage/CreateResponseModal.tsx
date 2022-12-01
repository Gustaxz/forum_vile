import { useState, useRef, ReactElement, cloneElement } from "react"

import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
} from "@chakra-ui/react"

import { AiOutlinePlus } from "react-icons/ai"

import { Tiptap } from "../editor/TipTap"

import { SubmitHandler, useForm } from "react-hook-form"

import { toast, ToastContainer, cssTransition } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "animate.css/animate.min.css"
import "react-toastify/dist/ReactToastify.css"

type IEditorRef = {
	returnHTML: () => string | undefined
}

type IInputs = {
	title: string
	"input-image": FileList
	"input-files": FileList
}

interface ICreateResponseModal {
	children: ReactElement
}

const CreateResponseModal = ({ children }: ICreateResponseModal) => {
	const { register, handleSubmit } = useForm<IInputs>()

	const { isOpen, onOpen, onClose } = useDisclosure()

	const editorRef = useRef<IEditorRef>()

	const [selectedImages, setSelectedImages] = useState<FileList>()
	const [selectedOtherFiles, setSelectedOtherFiles] = useState<FileList>()

	const flip = cssTransition({
		enter: "animate__animated animate__flipInX",
		exit: "animate__animated animate__flipOutX",
	})

	const onSubmit: SubmitHandler<IInputs> = (data) => {
		const html = editorRef.current?.returnHTML()

		if (!html || !data.title) {
			toast.warn("Preencha todos os campos necessários (arquivos não são obrigatórios)", {
				position: "top-left",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "colored",
				transition: flip,
			})

			return
		}

		toast("❤ Post criado!", {
			position: "top-left",
			autoClose: 4000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
			transition: flip,
		})
		onClose()
	}

	return (
		<>

			{ cloneElement( children, { onClick: onOpen } ) }

			<ToastContainer
				position="top-left"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
				transition={flip}
			/>

			<Modal isOpen={isOpen} onClose={onClose} size="6xl">
				<ModalOverlay />
				<ModalContent className="h-[75vh]">
					<ModalCloseButton />
					<ModalBody className="bg-[url('/backgrounds/create-post.svg')] bg-cover bg-no-repeat">
						<p className="text-white text-4xl font-semibold">Enviar uma resposta</p>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="mt-4 flex flex-col gap-4">
								<div className="flex flex-col gap-2 mt-3">
									<label htmlFor="input-title" className="font-semibold">
										Título
									</label>
									<input
										type="text"
										id="input-title"
										className="w-[75%] rounded-lg p-2 outline-none border-2 border-blue-pallete-200"
										{...register("title")}
										placeholder="Esse problema é um pouco complexo..."
									/>
								</div>
								<Tiptap ref={editorRef} />
								<div className="flex gap-3 items-center">
									<p className="font-semibold mb-1">Campo de imagens:</p>
									<label
										htmlFor="input-image"
										className="h-11 w-11 rounded-lg bg-white border-2 border-blue-pallete-200 flex items-center justify-center cursor-pointer"
									>
										<AiOutlinePlus
											size={24}
											className="text-blue-pallete-200"
										/>
									</label>
									<input
										multiple
										type="file"
										id="input-image"
										className="hidden"
										accept="image/*"
										onInput={(e: any) => setSelectedImages(e.target.files)}
										{...register("input-image")}
									/>
									<div className="flex gap-2 max-w-[70%]">
										{selectedImages
											? Array.from(selectedImages).map((e) => (
													<p
														title={e.name}
														key={e.size}
														className="text-ellipsis overflow-hidden whitespace-nowrap"
													>
														{e.name}
													</p>
											  ))
											: null}
									</div>
								</div>
								<div className="flex gap-3 items-center">
									<p className="font-semibold mb-1">
										Campo de arquivos (pdf, txt):
									</p>
									<label
										htmlFor="input-files"
										className="h-11 w-11 rounded-lg bg-white border-2 border-blue-pallete-200 flex items-center justify-center cursor-pointer"
									>
										<AiOutlinePlus
											size={24}
											className="text-blue-pallete-200"
										/>
									</label>
									<input
										multiple
										type="file"
										id="input-files"
										className="hidden"
										accept="application/pdf, .txt"
										onInput={(e: any) => setSelectedOtherFiles(e.target.files)}
										{...register("input-files")}
									/>
									<div className="flex gap-2 max-w-[70%]">
										{selectedOtherFiles
											? Array.from(selectedOtherFiles).map((e) => (
													<p
														title={e.name}
														key={e.size}
														className="text-ellipsis overflow-hidden whitespace-nowrap"
													>
														{e.name}
													</p>
											  ))
											: null}
									</div>
								</div>
								<button className="absolute bottom-4 w-[18%] hover:opacity-90 py-2 font-semibold rounded-lg bg-white border-2 border-blue-pallete-200 text-blue-pallete-200 flex items-center justify-center cursor-pointe">
									Enviar
								</button>
							</div>
						</form>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	)
}

export { CreateResponseModal }
