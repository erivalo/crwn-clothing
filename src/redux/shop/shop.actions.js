import ShopActionnTypes from "./shop.types";

export const updateCollections = (collectionsMap) => ({
  type: ShopActionnTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
