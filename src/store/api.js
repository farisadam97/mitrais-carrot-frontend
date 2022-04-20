import { createAction } from "@reduxjs/toolkit";

const GetBazaarItem = createAction("GetBazaarItem");
const GetSharedHistory = createAction("GetSharedHistory");
const GetRecentBirthday = createAction("GetRecentBirthday");
const GetUsersList = createAction("GetUsersList");
const GetManagerList = createAction("GetManagerList");
const GetCarrotStaff = createAction("GetCarrotStaff");
const GetHarvest = createAction("GetHarvest");
const GetAnnualCarrot = createAction("GetAnnualCarrot");
const GetAnnualBasket = createAction("GetAnnualBasket");
const GetStaffBasket = createAction("GetStaffBasket")

export const apiRequest = [
  GetBazaarItem,
  GetSharedHistory,
  GetRecentBirthday,
  GetUsersList,
  GetStaffBasket,
  GetManagerList,
  GetCarrotStaff,
  GetHarvest,
  GetAnnualCarrot,
  GetAnnualBasket,
];
