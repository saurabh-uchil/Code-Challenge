import type { FunctionComponent, ReactElement } from "react";
import "../CSS/Loader.css";
type Props = {
    message: string
}


export const Loader: FunctionComponent<Props> = (props:Props) :ReactElement => {
    return (
    <div className="text-center loader">
        <div className="spinner-border" role="status">
            <span className="sr-only"></span>
        </div>
        <p>{props.message}</p>
    </div>
  )
}