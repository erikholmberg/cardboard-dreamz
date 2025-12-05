import Link from "next/link";

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
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Cards</h1>
            <p className="text-gray-600 mt-2">Browse and manage your card database</p>
          </div>
          <div className="flex space-x-3">
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Import from API
            </button>
            <Link
              href="/cards/new"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Add Card
            </Link>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-64">
              <input
                type="text"
                placeholder="Search cards..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">All Sets</option>
              <option value="base">Base Set</option>
              <option value="jungle">Jungle</option>
            </select>
            <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">All Rarities</option>
              <option value="common">Common</option>
              <option value="uncommon">Uncommon</option>
              <option value="rare">Rare</option>
            </select>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div key={card.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[3/4] bg-gray-200 flex items-center justify-center">
                <div className="text-gray-400 text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-gray-300 rounded"></div>
                  <p>Card Image</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{card.name}</h3>
                <p className="text-gray-600 text-sm mb-1">{card.setName} • {card.cardNumber}</p>
                <p className="text-blue-600 text-sm font-medium mb-2">{card.rarity}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-green-600">${card.currentPrice.toFixed(2)}</span>
                  <span className="text-xs text-gray-500">Updated {card.lastUpdated}</span>
                </div>
                <div className="mt-3 flex space-x-2">
                  <Link
                    href={`/cards/${card.id}`}
                    className="flex-1 bg-gray-100 text-gray-800 px-3 py-2 rounded text-center text-sm hover:bg-gray-200 transition-colors"
                  >
                    View
                  </Link>
                  <button className="flex-1 bg-blue-100 text-blue-800 px-3 py-2 rounded text-center text-sm hover:bg-blue-200 transition-colors">
                    Add to Collection
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          <div className="flex space-x-2">
            <button className="px-3 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50">Previous</button>
            <button className="px-3 py-2 bg-blue-600 text-white border border-blue-600 rounded">1</button>
            <button className="px-3 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50">2</button>
            <button className="px-3 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50">3</button>
            <button className="px-3 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50">Next</button>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
