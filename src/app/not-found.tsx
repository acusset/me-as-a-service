import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="container mx-auto px-4 py-32">
      <div className="text-center space-y-8">
        <div className="relative">
          <h1 className="text-9xl font-bold text-alabaster/10">404</h1>
        </div>
        <p className="text-xl text-alabaster/80">
          Oops! Looks like you&apos;ve ventured into uncharted territory.
        </p>
        <div className="flex flex-col items-center gap-4">
          <p className="text-alabaster/60">
            Don&apos;t worry, let&apos;s get you back on track.
          </p>
          <Link 
            href="/"
            className="px-6 py-3 bg-xanthous/20 text-xanthous rounded-lg hover:bg-xanthous/30 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  )
}
