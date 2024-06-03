import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { HeightClass } from "./HeightClass.enum";
import { SpacingClass } from "./SpacingClass.enum";
import { WidthClass } from "./WidthClass.enum";

export type OtpType = {
  otp: string;
};

export type AcceptType = "numbers" | "letters" | "alphanumeric";

export type OTPInputProps = {
  /**
   * Number of characters accepted by the OTP
   * @default "6"
   */
  length?: number;

  /**
   * Callback function called when the OTP is filled
   */
  onComplete?: (otp: string) => void;

  /**
   * Accepted by OTP, numbers, letters or alphanumeric
   * @default "numbers"
   */
  accept?: AcceptType;

  /**
   * Props for the input component
   */
  inputProps?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;

  /**
   * Define the height of the input.
   * Refer to HeightClass for possible values and their corresponding sizes.
   */
  inputHeight?: keyof typeof HeightClass;

  /**
   * Define the width of the input.
   * Refer to WidthClass for possible values and their corresponding sizes.
   */
  inputWidth?: keyof typeof WidthClass;

  /**
   * Define the spacing between the input.
   * Refer to SpacingClass for possible values and their corresponding sizes.
   */
  spacing?: keyof typeof SpacingClass;
};
