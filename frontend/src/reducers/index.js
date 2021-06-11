import { combineReducers } from "redux";

import ManufacturerReducer from "./ManufacturerReducer";
import ViewReducer from "./ViewReducer";
import DeviceReducer from "./DeviceReducer";
import UserReducer from "./UserReducer";

const rootReducer = combineReducers({
  manufacturer: ManufacturerReducer,
  view: ViewReducer,
  device: DeviceReducer,
  user: UserReducer
});

export default rootReducer;
