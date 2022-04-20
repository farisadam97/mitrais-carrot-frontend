import { createAction } from "@reduxjs/toolkit";

const GetBazaarItem = createAction("GetBazaarItem");
const GetItemDetails = createAction("GetItemDetails");
const GetSharedHistory = createAction("GetSharedHistory");
const GetRecentBirthday = createAction("GetRecentBirthday");
const GetUsersList = createAction("GetUsersList");
const GetBasketHistory = createAction("GetBasketHistory");
const GetDonationHistory = createAction("GetDonationHistory");
const GetRewardHistory = createAction("GetRewardHistory");
const GetAnnualBasket = createAction("GetAnnualBasket");

export const apiRequest = [
  GetBazaarItem,
  GetSharedHistory,
  GetRecentBirthday,
  GetItemDetails,
  GetUsersList,
  GetBasketHistory,
  GetDonationHistory,
  GetRewardHistory,
  GetAnnualBasket,
];
