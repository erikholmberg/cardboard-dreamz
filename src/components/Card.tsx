import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CardProps {
  id: number;
  name: string;
  setName?: string;
  cardNumber?: string;
  rarity?: string;
  imageUrl?: string;
  currentPrice?: number;
  lastUpdated?: string;
  onAddToCollection?: (cardId: number) => void;
}

export default function TradingCard({
  id,
  name,
  setName,
  cardNumber,
  rarity,
  imageUrl,
  currentPrice,
  lastUpdated,
  onAddToCollection,
}: CardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="aspect-[3/4] bg-muted flex items-center justify-center">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-muted-foreground text-center">
            <div className="w-16 h-16 mx-auto mb-2 bg-muted-foreground/20 rounded"></div>
            <p className="text-sm">Card Image</p>
          </div>
        )}
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg leading-tight">{name}</CardTitle>
        {(setName || cardNumber) && (
          <p className="text-muted-foreground text-sm">
            {setName} {cardNumber && `• ${cardNumber}`}
          </p>
        )}
        {rarity && (
          <Badge variant="secondary" className="w-fit">
            {rarity}
          </Badge>
        )}
      </CardHeader>
      {currentPrice && (
        <CardContent className="pt-0">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-green-600">
              ${currentPrice.toFixed(2)}
            </span>
            {lastUpdated && (
              <span className="text-xs text-muted-foreground">
                Updated {lastUpdated}
              </span>
            )}
          </div>
        </CardContent>
      )}
      <CardFooter className="flex gap-2 pt-0">
        <Button variant="outline" size="sm" asChild className="flex-1">
          <Link href={`/cards/${id}`}>View</Link>
        </Button>
        {onAddToCollection && (
          <Button size="sm" onClick={() => onAddToCollection(id)} className="flex-1">
            Add to Collection
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
