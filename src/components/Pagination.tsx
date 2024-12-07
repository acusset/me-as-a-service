import Link from 'next/link'
import { cn } from '@/lib/utils'

interface PaginationProps {
  currentPage: number
  totalPages: number
  basePath: string
}

export default function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className="flex justify-center items-center space-x-2 mt-12">
      <Link
        href={`${basePath}?page=${currentPage - 1}`}
        className={cn(
          "px-4 py-2 rounded-lg border",
          currentPage === 1 ? "pointer-events-none opacity-50" : "hover:bg-gray-100"
        )}
      >
        Previous
      </Link>

      {pages.map((page) => (
        <Link
          key={page}
          href={`${basePath}?page=${page}`}
          className={cn(
            "px-4 py-2 rounded-lg border",
            currentPage === page 
              ? "bg-blue-600 text-white"
              : "hover:bg-gray-100"
          )}
        >
          {page}
        </Link>
      ))}

      <Link
        href={`${basePath}?page=${currentPage + 1}`}
        className={cn(
          "px-4 py-2 rounded-lg border",
          currentPage === totalPages ? "pointer-events-none opacity-50" : "hover:bg-gray-100"
        )}
      >
        Next
      </Link>
    </div>
  )
} 