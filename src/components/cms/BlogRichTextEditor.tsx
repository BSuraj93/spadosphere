"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import { useEffect } from "react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function BlogRichTextEditor({ value, onChange }: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
      }),
    ],
    content: value || "",
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "cms-rich-editor-input",
      },
    },
  });

  useEffect(() => {
    if (!editor) return;
    const current = editor.getHTML();
    if (value !== current) {
      editor.commands.setContent(value || "", { emitUpdate: false });
    }
  }, [value, editor]);

  if (!editor) return null;

  return (
    <div className="cms-rich-editor">
      <div className="cms-rich-toolbar">
        <button type="button" onClick={() => editor.chain().focus().toggleBold().run()}>
          Bold
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()}>
          Italic
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()}>
          Bullets
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleOrderedList().run()}>
          Numbered
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleBlockquote().run()}>
          Quote
        </button>
        <button
          type="button"
          onClick={() => {
            const url = window.prompt("Enter link URL");
            if (!url) return;
            editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
          }}
        >
          Link
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().unsetLink().run()}
        >
          Remove link
        </button>
      </div>

      <EditorContent editor={editor} />
    </div>
  );
}