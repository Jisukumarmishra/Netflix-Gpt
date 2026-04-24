import { createSlice } from "@reduxjs/toolkit";
import { changeLanguage } from "./gptSlice";

const configSlice = createSlice({
  name : "config",
  initialState : {
    lang : "en",
  },
  reducers : {
    changeLanguage : (state, action ) => {
    
    }
  }
})