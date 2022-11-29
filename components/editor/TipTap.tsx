import {forwardRef, useImperativeHandle } from 'react';

import { useEditor, EditorContent } from "@tiptap/react"

import StarterKit from "@tiptap/starter-kit"
import Heading from "@tiptap/extension-heading"
import OrderedList from "@tiptap/extension-ordered-list"
import Paragraph from "@tiptap/extension-paragraph"
import TextAlign from "@tiptap/extension-text-align"
import { Color } from "@tiptap/extension-color"
import TextStyle from "@tiptap/extension-text-style"

import { BsTypeBold, BsTypeItalic, BsTypeStrikethrough, BsCode, BsListOl } from "react-icons/bs"
import { BiHeading, BiAlignJustify, BiAlignLeft, BiAlignRight, BiAlignMiddle } from "react-icons/bi"



// eslint-disable-next-line react/display-name
const Tiptap = forwardRef((props, ref) => {
	const editor = useEditor({
		extensions: [
			StarterKit,
			Heading.configure({
				levels: [1],
				HTMLAttributes: {
					class: "text-2xl font-bold",
				},
			}),
			OrderedList.configure({
				HTMLAttributes: {
					class: "list-decimal list-inside",
				},
			}),
			Paragraph.configure({
				HTMLAttributes: {
					class: "",
				},
			}),
			TextAlign.configure({
				types: ["heading", "paragraph"],
			}),
			TextStyle,
			Color,
		],
		content: "<p>Coloque aqui o corpo do post 🚀</p>",
		editorProps: {
			attributes: {
				class: "bg-white rounded-lg p-2 max-h-32 overflow-y-scroll outline-none scrollbar-thin scrollbar-thumb-blue-pallete-200 scrollbar-thumb-rounded-lg",
			},
		},
	})

	useImperativeHandle(ref, () => ({
		returnHTML() {
		  const html = editor?.getHTML()

		  return html
		}
	  }));

	return (
		<>
			{editor ? (
				<div className="flex justify-center items-center gap-3">
					<BsTypeBold
						size={32}
						onClick={() => editor.chain().focus().toggleBold().run()}
						className={`cursor-pointer p-1 bg-white border border-blue-pallete-400 rounded-lg hover:opacity-90 ${
							editor.isActive("bold")
								? "text-blue-pallete-300 font-bold shadow-md shadow-slate-400 border-2"
								: "text-black"
						}`}
					/>
					<BsTypeItalic
						size={32}
						onClick={() => editor.chain().focus().toggleItalic().run()}
						className={`cursor-pointer p-1 bg-white border border-blue-pallete-400 rounded-lg hover:opacity-90 ${
							editor.isActive("italic")
								? "text-blue-pallete-300 font-bold shadow-md shadow-slate-400 border-2"
								: "text-black"
						}`}
					/>
					<BsTypeStrikethrough
						size={32}
						onClick={() => editor.chain().focus().toggleStrike().run()}
						className={`cursor-pointer p-1 bg-white border border-blue-pallete-400 rounded-lg hover:opacity-90 ${
							editor.isActive("strike")
								? "text-blue-pallete-300 font-bold shadow-md shadow-slate-400 border-2"
								: "text-black"
						}`}
					/>
					<BsCode
						size={32}
						onClick={() => editor.chain().focus().toggleCode().run()}
						className={`cursor-pointer p-1 bg-white border border-blue-pallete-400 rounded-lg hover:opacity-90 ${
							editor.isActive("code")
								? "text-blue-pallete-300 font-bold shadow-md shadow-slate-400 border-2"
								: "text-black"
						}`}
					/>
					<BiHeading
						size={32}
						onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
						className={`cursor-pointer p-1 bg-white border border-blue-pallete-400 rounded-lg hover:opacity-90 ${
							editor.isActive("heading", { level: 1 })
								? "text-blue-pallete-300 font-bold shadow-md shadow-slate-400 border-2"
								: "text-black"
						}`}
					/>
					<BsListOl
						size={32}
						onClick={() => editor.chain().focus().toggleOrderedList().run()}
						className={`cursor-pointer p-1 bg-white border border-blue-pallete-400 rounded-lg hover:opacity-90 ${
							editor.isActive("orderedList")
								? "text-blue-pallete-300 font-bold shadow-md shadow-slate-400 border-2"
								: "text-black"
						}`}
					/>
					<BiAlignLeft
						size={32}
						onClick={() => editor.chain().focus().setTextAlign("left").run()}
						className={`cursor-pointer p-1 bg-white border border-blue-pallete-400 rounded-lg hover:opacity-90 ${
							editor.isActive({ textAlign: "left" })
								? "text-blue-pallete-300 font-bold shadow-md shadow-slate-400 border-2"
								: "text-black"
						}`}
					/>
					<BiAlignMiddle
						size={32}
						onClick={() => editor.chain().focus().setTextAlign("center").run()}
						className={`cursor-pointer p-1 bg-white border border-blue-pallete-400 rounded-lg hover:opacity-90 ${
							editor.isActive({ textAlign: "center" })
								? "text-blue-pallete-300 font-bold shadow-md shadow-slate-400 border-2"
								: "text-black"
						}`}
					/>
					<BiAlignRight
						size={32}
						onClick={() => editor.chain().focus().setTextAlign("right").run()}
						className={`cursor-pointer p-1 bg-white border border-blue-pallete-400 rounded-lg hover:opacity-90 ${
							editor.isActive({ textAlign: "right" })
								? "text-blue-pallete-300 font-bold shadow-md shadow-slate-400 border-2"
								: "text-black"
						}`}
					/>
					<BiAlignJustify
						size={32}
						onClick={() => editor.chain().focus().setTextAlign("justify").run()}
						className={`cursor-pointer p-1 bg-white border border-blue-pallete-400 rounded-lg hover:opacity-90 ${
							editor.isActive({ textAlign: "justify" })
								? "text-blue-pallete-300 font-bold shadow-md shadow-slate-400 border-2"
								: "text-black"
						}`}
					/>
					<input
						type="color"
						onInput={(event: any) =>
							editor.chain().focus().setColor(event.target.value).run()
						}
						className="p-1 rounded-lg border border-blue-pallete-400 cursor-pointer hover:opacity-90"
						value={editor.getAttributes("textStyle").color}
					/>
				</div>
			) : null}
			<EditorContent editor={editor} />
		</>
	)
})

export { Tiptap }
