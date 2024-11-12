export type PaymentPopUpData = {
  isShown: boolean;
  productTitle?: string;
  productPrice?: number;
};

export type PaymentPopUpReducerAction = {
  type: "show" | "hide";
  productTitle?: string;
  productPrice?: number;
};
