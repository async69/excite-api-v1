import { model } from "mongoose"
import ExciteUserSchema from "./excite_user.schema"

export const ExciteUserModel = model("excite_users", ExciteUserSchema)