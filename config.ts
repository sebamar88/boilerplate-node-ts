import "dotenv/config";
import type { Config } from "./types";

export const config: Config = {
    PORT: process.env.PORT || "3000",
};
