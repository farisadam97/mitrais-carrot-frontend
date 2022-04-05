import { createAction } from "@reduxjs/toolkit";

const GetBazaarItem = createAction("GetBazaarItem");
const GetItemDetails = createAction("GetItemDetails");
const GetSharedHistory = createAction("GetSharedHistory");
const GetRecentBirthday = createAction("GetRecentBirthday");
const GetUsersList = createAction("GetUsersList");
const GetUser = createAction("GetUser");
const GetSettings = createAction("GetSettings");
const UpdateSettings = createAction("UpdateSettings");

export {
    GetBazaarItem, 
    GetSharedHistory, 
    GetRecentBirthday, 
    GetItemDetails, 
    GetUsersList,
    GetUser,
    GetSettings,
    UpdateSettings,
};
