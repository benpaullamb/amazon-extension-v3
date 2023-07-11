import { Product } from 'types';

export const GET_PRODUCTS = 'GET_PRODUCTS';

export const getTabId = async (): Promise<number> => {
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  return tabs[0].id!;
};

export const getProductsFromTab = async (): Promise<Product[]> => {
  const tab = await getTabId();
  return chrome.tabs.sendMessage<string, Product[]>(tab, GET_PRODUCTS);
};
