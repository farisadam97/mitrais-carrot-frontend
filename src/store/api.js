import { createAction } from "@reduxjs/toolkit";

const GetStaffBasket = createAction("GetStaffBasket")
const GetBazaarItem = createAction("GetBazaarItem");
const GetSharedHistory = createAction("GetSharedHistory");
const GetRecentBirthday = createAction("GetRecentBirthday");
const GetUsersList = createAction("GetUsersList");

export const apiRequest = [
  GetBazaarItem,
  GetSharedHistory,
  GetRecentBirthday,
  GetUsersList,
  GetStaffBasket
];
