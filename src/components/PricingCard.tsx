import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface PricingTier {
  name: string;
  description: string;
  price: string;
  features: string[];
  cta: string;
  recommended: boolean;
}

interface PricingCardProps {
  tier: PricingTier;
}

export function PricingCard({ tier }: PricingCardProps) {
  return (
    <Card
      className={cn(
        "bg-eerie transform transition-all duration-300 relative",
        "hover:scale-105 hover:bg-eerie/80 hover:shadow-xl hover:shadow-tekhelet/20 hover:z-10",
        tier.recommended
          ? "border-2 border-tekhelet"
          : "border-xanthous hover:border-tekhelet"
      )}
    >
      {tier.recommended && (
        <div className="absolute top-0 right-0">
          <div className="bg-tekhelet text-alabaster text-sm font-medium py-1 px-4 rounded-tr rounded-bl">
            Recommended
          </div>
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-xanthous">
          {tier.name}
        </CardTitle>
        <CardDescription className="mt-4 text-alabaster">
          {tier.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* <span className="text-4xl font-extrabold text-alabaster">
          {tier.price}
        </span> */}
        <ul className="mt-6 space-y-4">
          {tier.features.map((feature) => (
            <li key={feature} className="flex space-x-3 text-alabaster">
              <svg
                className="flex-shrink-0 h-5 w-5 text-tekhelet"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className={cn(
            "w-full text-alabaster",
            tier.recommended
              ? "bg-tekhelet hover:bg-tekhelet/90"
              : "bg-tekhelet/80 hover:bg-tekhelet"
          )}
        >
          {tier.cta}
        </Button>
      </CardFooter>
    </Card>
  );
}
