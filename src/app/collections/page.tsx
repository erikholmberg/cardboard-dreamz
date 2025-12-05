import Link from "next/link";

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
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Collections</h1>
            <p className="text-gray-600 mt-2">Manage your trading card collections</p>
          </div>
          <Link
            href="/collections/new"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            New Collection
          </Link>
        </div>

        {/* Collections Grid */}
        {collections.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map((collection) => (
              <div key={collection.id} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-2">{collection.name}</h3>
                <p className="text-gray-600 mb-4">{collection.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span>{collection.cardCount} cards</span>
                  <span>${collection.totalValue.toFixed(2)}</span>
                </div>
                <div className="flex space-x-2">
                  <Link
                    href={`/collections/${collection.id}`}
                    className="flex-1 bg-gray-100 text-gray-800 px-3 py-2 rounded text-center hover:bg-gray-200 transition-colors"
                  >
                    View
                  </Link>
                  <Link
                    href={`/collections/${collection.id}/edit`}
                    className="flex-1 bg-blue-100 text-blue-800 px-3 py-2 rounded text-center hover:bg-blue-200 transition-colors"
                  >
                    Edit
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No collections yet</h3>
            <p className="text-gray-600 mb-6">Create your first collection to start organizing your cards.</p>
            <Link
              href="/collections/new"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Create Collection
            </Link>
          </div>
        )}

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
