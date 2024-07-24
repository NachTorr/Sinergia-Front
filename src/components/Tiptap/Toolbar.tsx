"use client";

import React from "react";
import { type Editor } from "@tiptap/react";
import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  Heading2,
  Underline,
  Quote,
  Undo,
  Redo,
  Code,
} from "lucide-react";

type Props = {
  editor: Editor | null;
  content: string;
};

const Toolbar = ({ editor, content }: Props) => {
  if (!editor) {
    console.log("Editor not initialized");
    return null;
  }
  return (
    <div className="border rounded-t p-2">
      <div className="w-full flex gap-3 flex-wrap">
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log("Bold button clicked");
            editor.chain().focus().toggleBold().run();
          }}
          className={
            editor.isActive("bold")
              ? "bg-blue-900 text-white p-[2px] rounded-lg ml-2"
              : "text-blue-300 p-[2px] ml-2"
          }
        >
          <Bold className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log("Italic button clicked");
            editor.chain().focus().toggleItalic().run();
          }}
          className={
            editor.isActive("italic")
              ? "bg-blue-900 text-white p-[2px] rounded-lg"
              : "text-blue-300 p-[2px]"
          }
        >
          <Italic className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log("Underline button clicked");
            editor.chain().focus().toggleUnderline().run();
          }}
          className={
            editor.isActive("underline")
              ? "bg-blue-900 text-white p-[2px] rounded-lg"
              : "text-blue-300 p-[2px]"
          }
        >
          <Underline className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log("Strikethrough button clicked");
            editor.chain().focus().toggleStrike().run();
          }}
          className={
            editor.isActive("strike")
              ? "bg-blue-900 text-white p-[2px] rounded-lg"
              : "text-blue-300 p-[2px]"
          }
        >
          <Strikethrough className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log("BulletList button clicked");
            editor.chain().focus().toggleBulletList().run();
          }}
          className={
            editor.isActive("bulletList")
              ? "bg-blue-900 text-white p-[2px] rounded-lg"
              : "text-blue-300 p-[2px]"
          }
        >
          <List className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log("OrderedList button clicked");
            editor.chain().focus().toggleOrderedList().run();
          }}
          className={
            editor.isActive("orderedList")
              ? "bg-blue-900 text-white p-[2px] rounded-lg"
              : "text-blue-300 p-[2px]"
          }
        >
          <ListOrdered className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().setCode().run();
          }}
          className={
            editor.isActive("code")
              ? "bg-blue-900 text-white p-[2px] rounded-lg"
              : "text-blue-300 p-[2px]"
          }
        >
          <Code className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().undo().run();
          }}
          className={
            editor.isActive("undo")
              ? "bg-blue-900 text-white p-[2px] rounded-lg"
              : "text-blue-300 p-[2px]"
          }
        >
          <Undo className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().redo().run();
          }}
          className={
            editor.isActive("redo")
              ? "bg-blue-900 text-white p-[2px] rounded-lg"
              : "text-blue-300 p-[2px]"
          }
        >
          <Redo className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
