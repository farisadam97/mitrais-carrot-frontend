import { createAction } from "@reduxjs/toolkit";

const GetBazaarItem = createAction("GetBazaarItem");
const GetItemDetails = createAction("GetItemDetails");
const GetSharedHistory = createAction("GetSharedHistory");
const GetRecentBirthday = createAction("GetRecentBirthday");
const GetUsersList = createAction("GetUsersList");
const GetUser = createAction("GetUser");
const GetBasket = createAction("GetBasket");
const GetSettings = createAction("GetSettings");
const UpdateSettings = createAction("UpdateSettings");
const GetGroupList = createAction("GetGroupList");
const AddGroup = createAction("AddGroup");
const UpdateGroup = createAction("UpdateGroup");
const DeleteGroup = createAction("DeleteGroup");
const GetGroupDetails = createAction("GetGroupDetails");
const GetGroupStaff = createAction("GetGroupStaff");
const GetBasketHistory = createAction("GetBasketHistory");
const GetDonationHistory = createAction("GetDonationHistory");
const GetRewardHistory = createAction("GetRewardHistory");
const GetAnnualBasket = createAction("GetAnnualBasket");

export {
  GetBazaarItem,
  GetSharedHistory,
  GetRecentBirthday,
  GetItemDetails,
  GetUsersList,
  GetUser,
  GetBasket,
  GetSettings,
  UpdateSettings,
  GetGroupList,
  AddGroup,
  UpdateGroup,
  DeleteGroup,
  GetGroupDetails,
  GetGroupStaff,
  GetBasketHistory,
  GetDonationHistory,
  GetRewardHistory,
  GetAnnualBasket,
};
