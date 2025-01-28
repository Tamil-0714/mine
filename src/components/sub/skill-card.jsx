import { Laptop } from "lucide-react"

export default function DeveloperCard() {
  return (
    <div className="relative max-w-md h-[455px] p-8 bg-white rounded-lg shadow-lg" style={{color:"black"}}>
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

        <p className="text-sm">I take pride in crafting well-structured code and developing impactful solutions.</p>

        <div className="space-y-2">
          <h3 className="font-mono font-bold">I CAN CODE IN</h3>
          <p className="text-sm">Javascript, NodeJs, ReactJs,  Java, C, C++, Python, MySQL, GraphQL & MongoDB </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-mono font-bold">TOOLS</h3>
          <ul className="text-sm list-disc list-inside">
            <li>Jupyter</li>
            <li>Eclipse</li>
            <li>Pycharm</li>
            <li>Anaconda</li>
            <li>VIM</li>
          </ul>
        </div>
        
      </div>
    </div>
  )
}

