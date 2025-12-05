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

export default function Card({
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
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-[3/4] bg-gray-200 flex items-center justify-center">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-gray-400 text-center">
            <div className="w-16 h-16 mx-auto mb-2 bg-gray-300 rounded"></div>
            <p>Card Image</p>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{name}</h3>
        {(setName || cardNumber) && (
          <p className="text-gray-600 text-sm mb-1">
            {setName} {cardNumber && `• ${cardNumber}`}
          </p>
        )}
        {rarity && (
          <p className="text-blue-600 text-sm font-medium mb-2">{rarity}</p>
        )}
        {currentPrice && (
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-green-600">
              ${currentPrice.toFixed(2)}
            </span>
            {lastUpdated && (
              <span className="text-xs text-gray-500">
                Updated {lastUpdated}
              </span>
            )}
          </div>
        )}
        <div className="mt-3 flex space-x-2">
          <a
            href={`/cards/${id}`}
            className="flex-1 bg-gray-100 text-gray-800 px-3 py-2 rounded text-center text-sm hover:bg-gray-200 transition-colors"
          >
            View
          </a>
          {onAddToCollection && (
            <button
              onClick={() => onAddToCollection(id)}
              className="flex-1 bg-blue-100 text-blue-800 px-3 py-2 rounded text-center text-sm hover:bg-blue-200 transition-colors"
            >
              Add to Collection
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
