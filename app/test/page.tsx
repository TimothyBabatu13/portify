import GridOverlay from "../components/grid-overlay"

const page = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#f8fafc] overflow-hidden">
      {/* Our SVG grid background */}
      <GridOverlay />

      {/* Demo content */}
      <div className="z-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Grid Test Page</h1>
        <p className="text-gray-600 mt-2">If you can see the background grid, it works 🎉</p>
      </div>
    
    </div>
  )
}

export default page