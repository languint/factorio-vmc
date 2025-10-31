import { ReactNode } from "react";

interface Props {
    children?: ReactNode | ReactNode[];
}

export function Page({children}: Props) {
    return <div className="flex grow">
        {children}
    </div>
}