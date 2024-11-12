import {
  PaymentPopUpData,
  PaymentPopUpReducerAction,
} from "@/types/PaymentPopUpData";

export const paymentPopUpReducer = (
  state: PaymentPopUpData,
  action: PaymentPopUpReducerAction
): PaymentPopUpData => {
  switch (action.type) {
    case "show":
      return {
        ...state,
        isShown: true,
        productTitle: action.productTitle,
        productPrice: action.productPrice,
      };
    case "hide":
      return {
        ...state,
        isShown: false,
      };
    default:
      throw Error("Unknown action type: " + action.type);
  }
};
