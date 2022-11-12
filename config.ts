import "dotenv/config";
import { Config } from "./types";

export const config: Config = {
    PORT: process.env.PORT || "3000",
};
