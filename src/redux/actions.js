import { TITLE } from "./types"

export const titleAction = (text) => {
     return {
         type: TITLE,
         text
     }
}