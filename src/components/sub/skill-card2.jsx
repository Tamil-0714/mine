import { Boxes } from "lucide-react";

export default function DeveloperCard({ style }) {
  return (
    <div
      className="relative max-w-md h-[455px] p-8 bg-white rounded-lg shadow-lg"
      style={{ ...style, color: "black" }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* <div className="absolute inset-0 opacity-100">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-gray-900"
              style={{
                width: "1px",
                height: "px",
                backgroundColor:"red" ,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 space-y-6">
        <div className="flex items-center gap-3">
          <Boxes className="w-6 h-6" />

          <div>
            <h1 className="text-xl font-mono">Front End</h1>
            <h2 className="text-xl font-mono">Developer</h2>
          </div>
        </div>

        <p className="text-sm">
          With my stunning front-end skills, I transform creativity into
          captivating designs with an exceptional user experience. .
        </p>
        <div className="space-y-2">
          <h3 className="font-mono font-bold">Skills</h3>
          <p className="text-sm">
            HTML, CSS, Javascript, EJS, Bootstrap, Tailwind, React, Shadcn/UI
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-mono font-bold">TOOLS</h3>
          <ul className="text-sm list-disc list-inside">
            <li>VS Code</li>
            <li>Figma</li>
            <li>Browser Dev tool</li>
            <li>GitHub</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
