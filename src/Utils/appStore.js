import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Utils/userSlice";
import movieReducre from "../Utils/movieSlice";
import gptReducer from "../Utils/gptSlice";

const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movie: movieReducre,
            gpt: gptReducer,
        },
    }
);

export default appStore;