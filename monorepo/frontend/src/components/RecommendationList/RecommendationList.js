import React from 'react';

function RecommendationList({ recommendations }) {
  return (
    <div className="mx-auto min-h-full p-4 bg-white rounded-lg shadow-md ">
      <h2 className="text-lg font-bold mb-4">Lista de Recomendações:</h2>

      {recommendations.length === 0 && <p>Nenhuma recomendação encontrada.</p>}

      <ul className="space-y-4">
        {recommendations.map((recommendation, index) => (
          <li
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-4"
          >
            <h3 className="text-lg font-semibold text-gray-800">{recommendation.name}</h3>
            {recommendation.description && (
              <p className="text-gray-600 mt-2 text-sm">{recommendation.description}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecommendationList;
