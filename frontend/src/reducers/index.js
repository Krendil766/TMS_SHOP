import { combineReducers } from "redux";

import ManufacturerReducer from "./ManufacturerReducer";
import ViewReducer from "./ViewReducer";
import DeviceReducer from "./DeviceReducer";

const rootReducer = combineReducers({
  manufacturer: ManufacturerReducer,
  view: ViewReducer,
  device: DeviceReducer,
});

export default rootReducer;
