'use client'

import { useEffect } from 'react'
import { AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[50vh] w-full flex items-center justify-center">
      <div className="rounded-lg p-8 text-center max-w-md">
        <AlertTriangle className="mx-auto h-12 w-12 text-xanthous" />
        <h2 className="mt-6 text-2xl font-semibold text-alabaster">
          Failed to load articles
        </h2>
        <p className="mt-4 text-base text-alabaster/80">
          There was an error loading the articles. Please try again or check back later.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button 
            onClick={reset}
            variant="ghost" 
            className="text-alabaster hover:text-xanthous"
          >
            Try again
          </Button>
        </div>
      </div>
    </div>
  )
} 