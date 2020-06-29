import * as React from "react";

export interface ContentPainProps {
    content: string
}

export function ContentPain(props: ContentPainProps) {
    return <div className="child-lg">{props.content}</div>
}