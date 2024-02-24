import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Utils/userSlice";
import movieReducre from "../Utils/movieSlice";
import gptReducer from "../Utils/gptSlice";
import configReducer from "../Utils/configSlice";

const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movie: movieReducre,
            gpt: gptReducer,
            config: configReducer,
        },
    }
);

export default appStore;