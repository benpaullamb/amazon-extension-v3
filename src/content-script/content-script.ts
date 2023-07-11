import { GET_PRODUCTS } from 'utils';
import { Product } from 'types';

chrome.runtime.onMessage.addListener((req, _, res) => {
  if (req === GET_PRODUCTS) {
    const products = getProducts();
    console.log(JSON.stringify(products));
    res(products);
  }
});

const getProducts = (): Product[] => {
  const productElements: HTMLElement[] = Array.from(
    document.querySelectorAll('[data-asin]:not([data-asin=""])')
  );

  return productElements
    .filter((productElement) => productElement.offsetParent !== null)
    .map(toProduct);
};

const toProduct = (productElement: HTMLElement): Product => {
  const product: Product = {
    name: '',
    image: '',
    rating: 0,
    ratingCount: 0,
    price: 0,
    amazonChoice: false,
    prime: false,
    link: '',
    bestSeller: '',
  };

  Object.entries(productScrapers).forEach(([attribute, getAttribute]) => {
    product[attribute] = getAttribute(productElement);
  });

  return product;
};

const productScrapers = {
  name(productElement: HTMLElement) {
    return productElement.querySelector('h2 a span')?.textContent;
  },

  image(productElement: HTMLElement) {
    const imageElement = productElement.querySelector('img');
    return imageElement?.src;
  },

  rating(productElement: HTMLElement) {
    const ratingElement = productElement.querySelector('[aria-label$="out of 5 stars"]');
    if (!ratingElement) return 0;
    const ratingText = ratingElement.getAttribute('aria-label');
    const ratingStars = ratingText?.match(/(\d\.?\d?) out of 5 stars/i)?.[1];
    return Number(ratingStars);
  },

  ratingCount(productElement: HTMLElement) {
    const ratingCountElement = productElement.querySelector(
      '[aria-label$="out of 5 stars"] + [aria-label]'
    );
    if (!ratingCountElement) return 0;
    const ratingCountText = ratingCountElement.getAttribute('aria-label')?.replace(',', '');
    return Number(ratingCountText);
  },

  price(productElement: HTMLElement) {
    const priceElement = productElement.querySelector('span.a-price > span.a-offscreen');
    if (!priceElement) return 0;
    const priceText = priceElement.textContent?.match(/£(\d+\.?\d{0,2})/i)?.[1];
    return Number(priceText);
  },

  prime(productElement: HTMLElement) {
    const primeElement = productElement.querySelector('i[aria-label="Amazon Prime"]');
    return !!primeElement;
  },

  amazonChoice(productElement: HTMLElement) {
    const amazonChoiceElement = productElement.querySelector('span[aria-label="Amazon\'s Choice"]');
    return !!amazonChoiceElement;
  },

  link(productElement: HTMLElement) {
    const linkElement: HTMLAnchorElement | null = productElement.querySelector(
      '[data-component-type="s-product-image"] a'
    );
    return linkElement?.href;
  },

  bestSellerLink(productElement: HTMLElement) {
    const bestSellerElement: HTMLAnchorElement | null =
      productElement.querySelector('a[href*="bestsellers"]');
    return bestSellerElement?.href;
  },
};
