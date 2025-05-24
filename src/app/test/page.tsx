export default function Page() {
  return (
    <div className="p-12 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Tailwind Grid 테스트
      </h2>

      <div className="grid grid-cols-3 gap-4 bg-green-100 p-4">
        <div className="bg-red-400 h-24 flex items-center justify-center text-white text-xl">
          1
        </div>
        <div className="bg-blue-400 h-24 flex items-center justify-center text-white text-xl">
          2
        </div>
        <div className="bg-yellow-400 h-24 flex items-center justify-center text-white text-xl">
          3
        </div>
        <div className="bg-purple-400 h-24 flex items-center justify-center text-white text-xl">
          4
        </div>
        <div className="bg-pink-400 h-24 flex items-center justify-center text-white text-xl">
          5
        </div>
        <div className="bg-orange-400 h-24 flex items-center justify-center text-white text-xl">
          6
        </div>
      </div>
    </div>
  );
}
