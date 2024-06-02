# OTP NextJs Library

A reusable OTP (One Time Password) input component built with Next.js, Tailwind CSS, and NextUI.

## Table of Contents

- OTP NextJs Library
  - Table of Contents
  - [Installation](#installation)
    - [npm](#npm)
    - [yarn](#yarn)
    - [pnpm](#pnpm)
  - [Usage](#usage)
  - [Props](#props)
  - [Types](#types)
    - [AcceptType](#accepttype)
    - [HeightClass](#heightclass)
    - [WidthClass](#widthclass)
    - [SpacingClass](#spacingclass)

## Installation

You can install the `next-otp` package using one of the following package managers:

### npm

If you are using npm as your package manager, you can install `next-otp` by running the following command in your terminal:

```bash
npm i next-otp
```

### yarn

If you are using yarn as your package manager, you can install next-otp by running the following command in your terminal:

```bash
yarn add next-otp
```

### pnpm

If you are using pnpm as your package manager, you can install next-otp by running the following command in your terminal:

```bash
pnpm add next-otp
```

## Usage

Here's how you can use the OTP input component in your Next.js project:

```tsx
import React, { useState } from "react";
import OTP from "otp-next";
import "otp-next/styles.css";

const OTPExample = () => {
  const [otp, setOtp] = useState("");

  const handleComplete = (otp: string) => {
    console.log("OTP complete:", otp);
    setOtp(otp);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-bold">OTP Input Example</h1>
      <OTP onComplete={handleComplete} />
      <p className="mt-4">Entered OTP: {otp}</p>
    </div>
  );
};

export default OTPExample;
```

## Props

| Prop          | Type                                                       | Default   | Description                                                                                             |
| ------------- | ---------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------- |
| `length`      | `number`                                                   | 6         | Number of characters accepted by the OTP                                                                |
| `onComplete`  | `(otp: string) => void`                                    | `null`    | Callback function that is called when the OTP input is complete.                                        |
| `accept`      | `string`                                                   | `numbers` | The type of characters to accept [AcceptType](#accepttype).                                             |
| `inputHeight` | [HeightClass](#heightclass)                                | "h-12"    | Define the height of the input. Refer to HeightClass for possible values and their corresponding sizes. |
| `inputWidth`  | [WidthClass](#widthclass)                                  | "w-12"    | Define the width of the input. Refer to WidthClass for possible values and their corresponding sizes.   |
| `inputProps`  | [InputProps](https://nextui.org/docs/components/input#api) | -         | Props for the input component                                                                           |
| `spacing`     | [SpacingClass](#spacingclass)                              | "gap-4"   | Define the spacing between the input.                                                                   |

## Types

### AcceptType

| Type key       | Description                     |
| -------------- | ------------------------------- |
| `numbers`      | Accept only numbers (0-9)       |
| `letters`      | Accept only letters (a-z, A-Z)  |
| `alphanumeric` | Accept both numbers and letters |

### HeightClass

| Enum key   | CSS Property Value Height |
| ---------- | ------------------------- |
| `h-0`      | "0px"                     |
| `h-1`      | "0.25rem"                 |
| `h-2`      | "0.5rem"                  |
| `h-3`      | "0.75rem"                 |
| `h-4`      | "1rem"                    |
| `h-5`      | "1.25rem"                 |
| `h-6`      | "1.5rem"                  |
| `h-7`      | "1.75rem"                 |
| `h-8`      | "2rem"                    |
| `h-9`      | "2.25rem"                 |
| `h-10`     | "2.5rem"                  |
| `h-11`     | "2.75rem"                 |
| `h-12`     | "3rem"                    |
| `h-14`     | "3.5rem"                  |
| `h-16`     | "4rem"                    |
| `h-20`     | "5rem"                    |
| `h-24`     | "6rem"                    |
| `h-28`     | "7rem"                    |
| `h-32`     | "8rem"                    |
| `h-36`     | "9rem"                    |
| `h-40`     | "10rem"                   |
| `h-44`     | "11rem"                   |
| `h-48`     | "12rem"                   |
| `h-52`     | "13rem"                   |
| `h-56`     | "14rem"                   |
| `h-60`     | "15rem"                   |
| `h-64`     | "16rem"                   |
| `h-72`     | "18rem"                   |
| `h-80`     | "20rem"                   |
| `h-96`     | "24rem"                   |
| `h-auto`   | "auto"                    |
| `h-px`     | "1px"                     |
| `h-0.5`    | "0.125rem"                |
| `h-1.5`    | "0.375rem"                |
| `h-2.5`    | "0.625rem"                |
| `h-3.5`    | "0.875rem"                |
| `h-1/2`    | "50%"                     |
| `h-1/3`    | "33.333333%"              |
| `h-2/3`    | "66.666667%"              |
| `h-1/4`    | "25%"                     |
| `h-2/4`    | "50%"                     |
| `h-3/4`    | "75%"                     |
| `h-1/5`    | "20%"                     |
| `h-2/5`    | "40%"                     |
| `h-3/5`    | "60%"                     |
| `h-4/5`    | "80%"                     |
| `h-1/6`    | "16.666667%"              |
| `h-2/6`    | "33.333333%"              |
| `h-3/6`    | "50%"                     |
| `h-4/6`    | "66.666667%"              |
| `h-5/6`    | "83.333333%"              |
| `h-full`   | "100%"                    |
| `h-screen` | "100vh"                   |
| `h-svh`    | "100svh"                  |
| `h-lvh`    | "100lvh"                  |
| `h-dvh`    | "100dvh"                  |
| `h-min`    | "min-content"             |
| `h-max`    | "max-content"             |
| `h-fit`    | "fit-content"             |

### WidthClass

| Enum key   | CSS Property Value Width |
| ---------- | ------------------------ |
| `w-0`      | "0px"                    |
| `w-1`      | "0.25rem"                |
| `w-2`      | "0.5rem"                 |
| `w-3`      | "0.75rem"                |
| `w-4`      | "1rem"                   |
| `w-5`      | "1.25rem"                |
| `w-6`      | "1.5rem"                 |
| `w-7`      | "1.75rem"                |
| `w-8`      | "2rem"                   |
| `w-9`      | "2.25rem"                |
| `w-10`     | "2.5rem"                 |
| `w-11`     | "2.75rem"                |
| `w-12`     | "3rem"                   |
| `w-14`     | "3.5rem"                 |
| `w-16`     | "4rem"                   |
| `w-20`     | "5rem"                   |
| `w-24`     | "6rem"                   |
| `w-28`     | "7rem"                   |
| `w-32`     | "8rem"                   |
| `w-36`     | "9rem"                   |
| `w-40`     | "10rem"                  |
| `w-44`     | "11rem"                  |
| `w-48`     | "12rem"                  |
| `w-52`     | "13rem"                  |
| `w-56`     | "14rem"                  |
| `w-60`     | "15rem"                  |
| `w-64`     | "16rem"                  |
| `w-72`     | "18rem"                  |
| `w-80`     | "20rem"                  |
| `w-96`     | "24rem"                  |
| `w-auto`   | "auto"                   |
| `w-px`     | "1px"                    |
| `w-0.5`    | "0.125rem"               |
| `w-1.5`    | "0.375rem"               |
| `w-2.5`    | "0.625rem"               |
| `w-3.5`    | "0.875rem"               |
| `w-1/2`    | "50%"                    |
| `w-1/3`    | "33.333333%"             |
| `w-2/3`    | "66.666667%"             |
| `w-1/4`    | "25%"                    |
| `w-2/4`    | "50%"                    |
| `w-3/4`    | "75%"                    |
| `w-1/5`    | "20%"                    |
| `w-2/5`    | "40%"                    |
| `w-3/5`    | "60%"                    |
| `w-4/5`    | "80%"                    |
| `w-1/6`    | "16.666667%"             |
| `w-2/6`    | "33.333333%"             |
| `w-3/6`    | "50%"                    |
| `w-4/6`    | "66.666667%"             |
| `w-5/6`    | "83.333333%"             |
| `w-1/12`   | "8.333333%"              |
| `w-2/12`   | "16.666667%"             |
| `w-3/12`   | "25%"                    |
| `w-4/12`   | "33.333333%"             |
| `w-5/12`   | "41.666667%"             |
| `w-6/12`   | "50%"                    |
| `w-7/12`   | "58.333333%"             |
| `w-8/12`   | "66.666667%"             |
| `w-9/12`   | "75%"                    |
| `w-10/12`  | "83.333333%"             |
| `w-11/12`  | "91.666667%"             |
| `w-full`   | "100%"                   |
| `w-screen` | "100vw"                  |
| `w-svw`    | "100svw"                 |
| `w-lvw`    | "100lvw"                 |
| `w-dvw`    | "100dvw"                 |
| `w-min`    | "min-content"            |
| `w-max`    | "max-content"            |
| `w-fit`    | "fit-content"            |

### SpacingClass

| Enum key  | CSS Property Value Gap |
| --------- | ---------------------- |
| `gap-0`   | "0px"                  |
| `gap-1`   | "0.25rem"              |
| `gap-2`   | "0.5rem"               |
| `gap-3`   | "0.75rem"              |
| `gap-4`   | "1rem"                 |
| `gap-5`   | "1.25rem"              |
| `gap-6`   | "1.5rem"               |
| `gap-7`   | "1.75rem"              |
| `gap-8`   | "2rem"                 |
| `gap-9`   | "2.25rem"              |
| `gap-10`  | "2.5rem"               |
| `gap-11`  | "2.75rem"              |
| `gap-12`  | "3rem"                 |
| `gap-14`  | "3.5rem"               |
| `gap-16`  | "4rem"                 |
| `gap-20`  | "5rem"                 |
| `gap-24`  | "6rem"                 |
| `gap-28`  | "7rem"                 |
| `gap-32`  | "8rem"                 |
| `gap-36`  | "9rem"                 |
| `gap-40`  | "10rem"                |
| `gap-44`  | "11rem"                |
| `gap-48`  | "12rem"                |
| `gap-52`  | "13rem"                |
| `gap-56`  | "14rem"                |
| `gap-60`  | "15rem"                |
| `gap-64`  | "16rem"                |
| `gap-72`  | "18rem"                |
| `gap-80`  | "20rem"                |
| `gap-96`  | "24rem"                |
| `gap-px`  | "1px"                  |
| `gap-0.5` | "0.125rem"             |
| `gap-1.5` | "0.375rem"             |
| `gap-2.5` | "0.625rem"             |
| `gap-3.5` | "0.875rem"             |
