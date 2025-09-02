import { FC, ReactNode, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import { ComponentProps } from "@/shared/models/common/Props";
import "@/ui/components/common/LoadingComp.css";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface LoadingCompProps extends ComponentProps {
    // Additional props can be defined here if needed
};

const LoadingComp: FC<LoadingCompProps> = (props: LoadingCompProps): ReactNode => {
    useEffect(() => {
        console.log("Loaded: LoadingComp");
    }, []);

    useEffect(() => {
        console.log("Rendered: LoadingComp");
    });

    return (
        <div className={`common-loading ${props.className ?? ''}`} style={props.style}>
            <FontAwesomeIcon icon={faRotate} size="5x" spin />
        </div>
    );
}

export default LoadingComp;
