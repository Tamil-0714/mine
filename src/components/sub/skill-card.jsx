import { Laptop } from "lucide-react"

export default function DeveloperCard() {
  return (
    <div className="relative max-w-md h-[440px] p-8 bg-white rounded-lg shadow-lg" style={{color:"black"}}>
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-gray-900"
              style={{
                width: "1px",
                height: "1px",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 space-y-6">
        <div className="flex items-center gap-3">
          <Laptop className="w-6 h-6" />
          <div>
            <h1 className="text-xl font-mono">Software</h1>
            <h2 className="text-xl font-mono">Developer</h2>
          </div>
        </div>

        <p className="text-sm">I enjoy writing clean code and creating useful products.</p>

        <div className="space-y-2">
          <h3 className="font-mono font-bold">I LIKE TO CODE IN</h3>
          <p className="text-sm">Python, Java, Javascript, Node, MySQL, GraphQL, Spring, C, C++, MongoDB & Dart</p>
        </div>

        <div className="space-y-2">
          <h3 className="font-mono font-bold">TOOLS</h3>
          <ul className="text-sm list-disc list-inside">
            <li>Anaconda</li>
            <li>Eclipse</li>
            <li>Jupyter</li>
            <li>Pycharm</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

