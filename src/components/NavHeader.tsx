import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Rocket, Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function NavHeader() {

  const menuItems = [
    { label: "Features", href: "features", disabled: false },
    { label: "Case Studies", href: "case-studies", disabled: true },
    { label: "Documentation", href: "documentation", disabled: false },
    { label: "Pricing", href: "pricing", disabled: true },
    { label: "Contact", href: "contact", disabled: false },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-eerie/80 border-b border-alabaster/10">
      <div className="mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo section */}
          <div className="flex items-center space-x-4">
            <Rocket className="h-6 w-6 text-xanthous border-alabaster"/>
            <Link href="/" className="text-2xl font-bold text-xanthous">
              antoine.dev
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {menuItems.map((item) => (
              <Button 
                key={item.label}
                size="lg" 
                variant="ghost" 
                disabled={item.disabled}
                className={item.disabled ? "opacity-50 cursor-not-allowed" : ""}
                asChild={!item.disabled}
              >
                {item.disabled ? (
                  item.label
                ) : (
                  <Link href={item.href}>{item.label}</Link>
                )}
              </Button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[300px] sm:w-[400px] bg-eerie border-l border-alabaster/10">
                <div className="flex justify-end mb-2">
                  <SheetTrigger />
                </div>
                <div className="flex flex-col space-y-4">
                  {menuItems.map((item) => (
                    <Button
                      key={item.label}
                      size="lg"
                      variant="ghost"
                      disabled={item.disabled}
                      className={item.disabled ? "opacity-50 cursor-not-allowed" : ""}
                      asChild={!item.disabled}
                    >
                      {item.disabled ? (
                        item.label
                      ) : (
                        <Link href={item.href}>{item.label}</Link>
                      )}
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

