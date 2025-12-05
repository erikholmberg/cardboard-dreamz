import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import TradingCard from "@/components/Card";

export default function CardsPage() {
  // Sample data - in a real app this would come from your database
  const cards = [
    {
      id: 1,
      name: "Charizard",
      setName: "Base Set",
      cardNumber: "4/102",
      rarity: "Rare Holo",
      imageUrl: "/api/placeholder/200/280",
      currentPrice: 450.00,
      lastUpdated: "2024-12-01",
    },
    {
      id: 2,
      name: "1st Edition Black Lotus",
      setName: "Limited Edition",
      cardNumber: "1/302",
      rarity: "Rare",
      imageUrl: "/api/placeholder/200/280",
      currentPrice: 25000.00,
      lastUpdated: "2024-12-01",
    },
    {
      id: 3,
      name: "Pikachu",
      setName: "Base Set",
      cardNumber: "58/102",
      rarity: "Common",
      imageUrl: "/api/placeholder/200/280",
      currentPrice: 25.50,
      lastUpdated: "2024-12-01",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Cards</h1>
            <p className="text-muted-foreground mt-2">Browse and manage your card database</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="secondary">
              Import from API
            </Button>
            <Button asChild>
              <Link href="/cards/new">Add Card</Link>
            </Button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-card rounded-lg border p-6 mb-6">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-64">
              <Label htmlFor="search">Search Cards</Label>
              <Input
                id="search"
                type="text"
                placeholder="Search cards..."
              />
            </div>
            <div className="min-w-32">
              <Label htmlFor="set-select">Set</Label>
              <Select>
                <SelectTrigger id="set-select">
                  <SelectValue placeholder="All Sets" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sets</SelectItem>
                  <SelectItem value="base">Base Set</SelectItem>
                  <SelectItem value="jungle">Jungle</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="min-w-32">
              <Label htmlFor="rarity-select">Rarity</Label>
              <Select>
                <SelectTrigger id="rarity-select">
                  <SelectValue placeholder="All Rarities" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Rarities</SelectItem>
                  <SelectItem value="common">Common</SelectItem>
                  <SelectItem value="uncommon">Uncommon</SelectItem>
                  <SelectItem value="rare">Rare</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cards.map((card) => (
            <TradingCard
              key={card.id}
              id={card.id}
              name={card.name}
              setName={card.setName}
              cardNumber={card.cardNumber}
              rarity={card.rarity}
              imageUrl={card.imageUrl}
              currentPrice={card.currentPrice}
              lastUpdated={card.lastUpdated}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          <div className="flex space-x-2">
            <Button variant="outline">Previous</Button>
            <Button variant="default">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline">Next</Button>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <Button variant="ghost" asChild>
            <Link href="/">← Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
