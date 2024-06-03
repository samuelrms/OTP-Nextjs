"use client";
import { OTP } from "$/components";

export default function Home() {
  return (
    <main>
      <OTP
        length={6}
        onComplete={(c) => console.log(c)}
        inputHeight="h-10"
        // inputWidth="w-10"
      />
    </main>
  );
}
