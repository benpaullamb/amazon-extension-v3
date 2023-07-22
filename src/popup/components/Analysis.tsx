import { useContext } from 'react';
import numeral from 'numeral';
import { removeStopwords } from 'stopword';
import { SearchedProductsContext } from 'popup/context';
import Pill from './Pill';

interface WordCountsObj {
  [word: string]: number;
}

interface WordCounts {
  word: string;
  count: number;
}

export default function Analysis() {
  const { searchedProducts } = useContext(SearchedProductsContext);

  const medianPrice = () => {
    const productsByPrice = [...searchedProducts].sort((a, b) => {
      if (a.price > b.price) return -1;
      if (a.price < b.price) return 1;
      return 0;
    });

    const middleIndex = Math.floor(productsByPrice.length / 2);
    return productsByPrice[middleIndex]?.price || 0;
  };

  const popularWords = () => {
    const uniqueWordCounts: WordCountsObj = {};

    searchedProducts.forEach((product) => {
      const productWords = product.name
        .toLowerCase()
        .split(' ')
        .map((word) => word.trim());

      productWords.forEach((word) => {
        const singularWord = word.slice(0, -1);

        if (uniqueWordCounts[word]) {
          uniqueWordCounts[word]++;
        } else if (word.endsWith('s') && uniqueWordCounts[singularWord]) {
          uniqueWordCounts[singularWord]++;
        } else {
          uniqueWordCounts[word] = 1;
        }
      });
    });

    const wordsByCounts: WordCounts[] = Object.entries(uniqueWordCounts).map(([word, count]) => ({
      word,
      count,
    }));
    wordsByCounts.sort((a, b) => {
      if (a.count > b.count) return -1;
      if (a.count < b.count) return 1;
      return 0;
    });

    const popularWords = wordsByCounts.filter(({ count }) => count > 1).map(({ word }) => word);

    const fullWords = popularWords
      .filter((word) => word.length > 1)
      .map((word) => word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ''));

    const importantWords = removeStopwords(fullWords);

    return importantWords.slice(0, 20);
  };

  return (
    <div>
      <span className="mb-4 block text-base">
        {searchedProducts.length} product{searchedProducts.length !== 1 ? 's' : ''} (median price: £
        {numeral(medianPrice()).format('£0,0.00')})
      </span>
      <div className="flex flex-wrap gap-1">
        {popularWords().map((word) => (
          <Pill>{word}</Pill>
        ))}
      </div>
    </div>
  );
}
