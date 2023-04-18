import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface Props {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
}

const modules = {
  toolbar: {
    container: [
      ["bold", "italic", "underline"],
      [{ list: "bullet" }, { list: "ordered" }],
      ["link", "image"],
      [
        {
          document: {
            icon: "<h1>Document</h1>",
            tooltip: "Insert document",
          },
        },
      ],
    ],
  },
};

interface QuillContent {
  ops: any[];
}

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
];

const TextEditor = ({ content, setContent }: Props) => {
  const onChange = (text: string) => setContent(text);

  return (
    <>
      <ReactQuill
        theme="snow"
        value={content}
        onChange={onChange}
        modules={modules}
        formats={formats}
        style={{
          height: "249px",
          boxSizing: "border-box",
          border: "1px solid #616161",
          overflow: "hidden",
          borderRadius: "8px",
          outline: "none",
          background: "#fff",
          fontFamily: "Graphik",
          fontSize: "20px",
        }}
        className="my-editor"
        placeholder="What are your thoughts on..."
      />
    </>
  );
};

export default TextEditor;
