interface IPostTag {
	backgroundColor: string
    textColor: string
	tagName: string
}

const PostTag = ({ tagName, backgroundColor, textColor }: IPostTag) => {
	return (
		<div className=" h-6 w-24 text-sm flex items-center justify-center rounded-xl" style={{ backgroundColor, color: textColor }}>
			{tagName}
		</div>
	)
}

export { PostTag }
