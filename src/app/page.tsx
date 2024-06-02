"use client";
import { OTP } from "$/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <OTP
        length={6}
        onComplete={(c) => console.log(c)}
        inputHeight="h-10"
        // inputWidth="w-10"
      />
    </main>
  );
}
