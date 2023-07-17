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

export const openTabGroup = async (
  urls: string[],
  title = 'Amazon',
  color: chrome.tabGroups.ColorEnum = 'orange'
) => {
  const tabs = await Promise.all(
    urls.map((url) =>
      chrome.tabs.create({
        url,
        active: false,
      })
    )
  );

  const groupId = await chrome.tabs.group({
    tabIds: tabs.map(({ id }) => id!),
  });

  chrome.tabGroups.update(groupId, {
    title,
    color,
  });
};
