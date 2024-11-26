import { setCurrentBuildingData } from "../features/building/buildingSlice";
import { setCoinsValue } from "../features/coins/coinsSlice";
import { setEnergy, setLoadedStatus } from "../features/energy/energySlice";
import { userStateLoad } from "../features/user/userSlice";
import { AppThunk } from "../store";

export const fetchUserData = (): AppThunk => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `https://${process.env.NEXT_PUBLIC_HOSTNAME}/api/userData`,
        {
          method: "GET",
        }
      );
      const responseJson = await response.json();
      dispatch(userStateLoad(responseJson.userData));
      dispatch(setEnergy(responseJson.userData.energy));
      dispatch(setLoadedStatus(0));
      dispatch(setCoinsValue(responseJson.userData.coinsBalance));
      dispatch(
        setCurrentBuildingData({
          currentXp: responseJson.userData.currentXp,
          level: responseJson.userData.level,
        })
      );
    } catch (err) {
      console.log(err);
    }
  };
};
