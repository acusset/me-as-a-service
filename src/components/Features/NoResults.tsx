import Link from 'next/link'

export default function NoResults() {
  return (
    <div className="text-center py-12">
      <h3 className="text-2xl font-semibold mb-4">No matching skills found, but this SaaS learns quickly!</h3>
      <p className="mb-6">Don&apos;t worry, I&apos;m always expanding my skillset. Let&apos;s discuss your specific needs.</p>
      <Link href="/contact" className="bg-[#D2A850] text-[#161616] px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
        Contact Us
      </Link>
    </div>
  )
}

