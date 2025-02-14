"use client"

import React from "react";

const a = Math.random();

  console.log(a);

export default function HydrationTest() {
    return(
        <div>{a}</div>
    )
}