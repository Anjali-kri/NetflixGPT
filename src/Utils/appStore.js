import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Utils/userSlice";
import movieReducre from "../Utils/movieSlice";

const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movie: movieReducre,
        },
    }
);

export default appStore;