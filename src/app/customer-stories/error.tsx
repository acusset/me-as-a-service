'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-semibold">Something went wrong!</h2>
        <p className="text-gray-400">
          We encountered an error while loading the case studies.
        </p>
        <button
          onClick={reset}
          className="px-4 py-2 bg-alabaster/10 rounded-lg hover:bg-alabaster/20 transition-colors"
        >
          Try again
        </button>
      </div>
    </main>
  )
} 