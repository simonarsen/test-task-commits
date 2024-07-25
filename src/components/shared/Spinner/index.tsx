"use client"
import { SyncLoader } from "react-spinners";

export const Spinner = () => {
    return (
        <SyncLoader 
            color="#2563EB"
            speedMultiplier={1}
        />
    )
}