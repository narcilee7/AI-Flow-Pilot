import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">FlowPilot</h1>
        <p className="text-xl mb-4">最好的招聘全链路服务AI平台</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">AI 简历优化</h2>
            <p>智能简历编辑和优化</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">面试准备</h2>
            <p>AI 驱动的面试模拟</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">求职管理</h2>
            <p>智能求职进度追踪</p>
          </div>
        </div>
      </div>
    </main>
  );
}
