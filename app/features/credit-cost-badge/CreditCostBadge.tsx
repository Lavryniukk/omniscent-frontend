import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function CreditCostBadge({
  cost,
  className,
}: {
  cost: number;
  className?: string;
}) {
  return (
    <Link href="pricing">
      <Badge variant={"secondary"} className={`   text-xs  ${className}`}>
        <span>Cost: {cost} credits</span>
      </Badge>
    </Link>
  );
}
