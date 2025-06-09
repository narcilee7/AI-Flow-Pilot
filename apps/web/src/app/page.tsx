export default function Home() {
  type ShadeType = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  
  const shadeClasses: Record<ShadeType, string> = {
    50: 'bg-primary-50',
    100: 'bg-primary-100',
    200: 'bg-primary-200',
    300: 'bg-primary-300',
    400: 'bg-primary-400',
    500: 'bg-primary-500',
    600: 'bg-primary-600',
    700: 'bg-primary-700',
    800: 'bg-primary-800',
    900: 'bg-primary-900',
  };

  const textClasses: Record<ShadeType, string> = {
    50: 'text-gray-800',
    100: 'text-gray-800',
    200: 'text-gray-800',
    300: 'text-gray-800',
    400: 'text-gray-800',
    500: 'text-white',
    600: 'text-white',
    700: 'text-white',
    800: 'text-white',
    900: 'text-white',
  };

  const shades: ShadeType[] = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

  return (
    <main className="min-h-screen bg-gray-500">
      {/* 使用我們配置的主色調 */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary-600 mb-6">
          欢迎使用 Flow Pilot
        </h1>
        
        {/* 展示主色調的不同深淺 */}
        <div className="grid grid-cols-5 gap-4 mb-8">
          {shades.map((shade) => (
            <div
              key={shade}
              className={`h-20 rounded-lg ${shadeClasses[shade]} flex items-center justify-center`}
            >
              <span className={textClasses[shade]}>
                {shade}
              </span>
            </div>
          ))}
        </div>

        {/* 展示不同類型的卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">基本卡片</h2>
            <p className="text-primary-600">這是一個使用我們主題配置的基本卡片組件。</p>
          </div>

          <div className="bg-primary-50 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-primary-100">
            <h2 className="text-xl font-semibold text-primary-700 mb-2">主題卡片</h2>
            <p className="text-primary-600">使用主色調的卡片變體。</p>
          </div>

          <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-white mb-2">漸變卡片</h2>
            <p className="text-primary-100">使用漸變背景的卡片設計。</p>
          </div>
        </div>

        {/* 按鈕示例 */}
        <div className="mt-8 space-x-4">
          <button className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
            主要按鈕
          </button>
          <button className="px-4 py-2 bg-white text-primary-600 border border-primary-200 rounded-lg hover:bg-primary-50 transition-colors">
            次要按鈕
          </button>
        </div>
      </div>
    </main>
  )
} 