"use client";
import { Button } from "@/components/ui/button";
import Center from "@/components/layouts/center";
import MessageBox from "@/components/message-box";
import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <MessageBox title={error.message} countdown={1}>
            <Button onClick={reset}>Try Again</Button>
        </MessageBox>
    );
}

