"use client";
import { ComponentProps } from "react";

type SubmitButtonProps = {
    children: React.ReactNode,
} & ComponentProps<"button">;


export default function SubmitButton({ children, ...props }: SubmitButtonProps) {

    return (
        <button {...props} type="submit">{children}</button>
    )
}