import { Header } from "../../../../components/allPages/Header"
import { CreatePostModal } from "../../../../components/postsPage/CreatePostModal"
import { SelectPostTag } from "../../../../components/postsPage/SelectPostTag"
import { UniquePostCard } from "../../../../components/uniquePostPage/UniquePostCard"

export default function UniquePostPage() {
	return (
		<div className="h-screen font-roboto">
			<Header />
			<main className="min-h-[83%] bg-[url('/backgrounds/posts.svg')] bg-cover bg-repeat-y overflow-x-hidden">
				<div className="mt-20 grid grid-cols-3 px-10">
					<div className="col-span-2">
						<UniquePostCard />
						<p className="my-16 text-center text-gray-500 font-light">Não existem respostas ainda</p>
					</div>
					<div className="flex justify-end">
						<div className="flex flex-col gap-3 items-center">
							<CreatePostModal />
							<SelectPostTag />
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}
