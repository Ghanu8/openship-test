export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">🚀 Deployed via Openship</h1>
      <p className="text-lg text-gray-500">
        This demo was built, shipped, and TLS-secured automatically.
      </p>
      <p className="text-sm text-gray-400">
        Deployed: {new Date().toISOString()}
      </p>
    </main>
  );
}
