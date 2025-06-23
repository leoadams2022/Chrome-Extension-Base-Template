import React from "react";

export default function Content({ minimizeExtension }) {
  return (
    <div className="text-3xl text-slate-50 bg-slate-950">
      Content
      <button onClick={minimizeExtension}>Minimize</button>
    </div>
  );
}
