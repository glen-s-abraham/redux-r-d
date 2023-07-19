import { configureStore } from "@reduxjs/toolkit";
import {reducer} from "./tasks";

export const store = configureStore({reducer})


