import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CollectionsPage() {
  // Sample data - in a real app this would come from your database
  const collections = [
    {
      id: 1,
      name: "Pokemon Base Set",
      description: "My complete Pokemon Base Set collection",
      cardCount: 24,
      totalValue: 1250.50,
    },
    {
      id: 2,
      name: "Magic: The Gathering - Modern",
      description: "Modern format cards",
      cardCount: 156,
      totalValue: 3200.75,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Collections</h1>
            <p className="text-muted-foreground mt-2">Manage your trading card collections</p>
          </div>
          <Button asChild>
            <Link href="/collections/new">New Collection</Link>
          </Button>
        </div>

        {/* Collections Grid */}
        {collections.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map((collection) => (
              <Card key={collection.id}>
                <CardHeader>
                  <CardTitle>{collection.name}</CardTitle>
                  <p className="text-muted-foreground">{collection.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                    <span>{collection.cardCount} cards</span>
                    <span>${collection.totalValue.toFixed(2)}</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" asChild className="flex-1">
                      <Link href={`/collections/${collection.id}`}>View</Link>
                    </Button>
                    <Button asChild className="flex-1">
                      <Link href={`/collections/${collection.id}/edit`}>Edit</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="text-center py-12 max-w-md mx-auto">
            <CardContent>
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">No collections yet</h3>
              <p className="text-muted-foreground mb-6">Create your first collection to start organizing your cards.</p>
              <Button asChild>
                <Link href="/collections/new">Create Collection</Link>
              </Button>
            </CardContent>
          </Card>
        )}

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
