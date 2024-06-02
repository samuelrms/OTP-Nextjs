"use client";

import { Input } from "@nextui-org/input";
import { NextUIProvider } from "@nextui-org/system";
import { useEffect, useRef, useState } from "react";
import { OTPInputProps } from "./OTP.types";
import "./globals.css";

export const OTP = ({
  length = 6,
  onComplete,
  accept = "numbers",
  inputProps,
  inputHeight = "h-12",
  inputWidth = "w-12",
  spacing = "gap-4",
}: OTPInputProps) => {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, length);
  }, [length]);

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const { key } = event;
    const regexMap = {
      numbers: /\d/,
      letters: /[a-zA-Z]/,
      alphanumeric: /[a-zA-Z0-9]/,
    };
    const regex = regexMap[accept] || regexMap.alphanumeric;

    /**
     * TODO - Verify if the key pressed is a digit
     */
    if (regex.test(key) && key.length === 1) {
      event.preventDefault();
      const newOtp = [...otp];
      newOtp[index] = key;
      setOtp(newOtp);

      /**
       * TODO - Focus next input
       */
      if (index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }

      /**
       * TODO - Call onComplete if OTP is filled
       */
      if (newOtp.join("").length === length) {
        if (onComplete) onComplete(newOtp.join(""));
      }
    } else if (key === "Backspace") {
      event.preventDefault();
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);

      /**
       * TODO - Focus previous input
       */
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    } else if (key === "ArrowRight") {
      /**
       * TODO - Focus next input
       */
      if (index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    } else if (key === "ArrowLeft") {
      /**
       * TODO - Focus previous input
       */
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    const paste = event.clipboardData.getData("text");
    const pasteArray = paste.split("").filter((char) => {
      const regexMap = {
        numbers: /\d/,
        letters: /[a-zA-Z]/,
        alphanumeric: /[a-zA-Z0-9]/,
      };
      const regex = regexMap[accept] || regexMap.alphanumeric;
      return regex.test(char);
    });

    if (pasteArray.length > length) {
      pasteArray.length = length;
    }
    setOtp(pasteArray);
    if (pasteArray.length === length) {
      if (onComplete) {
        onComplete(pasteArray.join(""));
      }
    }
  };

  return (
    <NextUIProvider>
      <div className={`flex-row flex ${spacing}`}>
        {otp.map((data, index) => (
          <div
            key={index}
            className={`${inputHeight?.toString()} ${inputWidth?.toString()}`}
          >
            <Input
              value={data}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onPaste={index === 0 ? handlePaste : undefined}
              ref={(ref) => {
                inputRefs.current[index] = ref;
              }}
              className={inputHeight?.toString()}
              classNames={{
                inputWrapper: inputHeight?.toString(),
                input: "text-center",
              }}
              {...inputProps}
            />
          </div>
        ))}
      </div>
    </NextUIProvider>
  );
};
