import { createAction } from "@reduxjs/toolkit";

const GetBazaarItem = createAction("GetBazaarItem");
const GetItemDetails = createAction("GetItemDetails");

export const apiRequest = [GetBazaarItem, GetItemDetails];