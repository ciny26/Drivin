import React, { useRef } from "react";
import { handleScroll } from "../../DynamicData";
import "../../styles/horizontalContainer.modules.css";

type HorizontalContainerProps = {
    children: React.ReactNode,
}

const HorizontalContainer = ({ children }: HorizontalContainerProps) => {
    const upSideRef = useRef<HTMLDivElement>(null);
    const bottomSideRef = useRef<HTMLDivElement>(null);

    console.log("isVisibleUpSide:", handleScroll(upSideRef));
    console.log("isVisibleBottomSide:", handleScroll(bottomSideRef));

    const isVisibleUpSide = handleScroll(upSideRef);
    const isVisibleBottomSide = handleScroll(bottomSideRef);

    return (
        <div className="h-container">
            <section className={`h-up-side ${isVisibleUpSide ? "visible" : ""}`} ref={upSideRef}>
                {React.Children.toArray(children)[0]} {/* Team text (Header, paragraph) */}
            </section>
            <section className={`h-bottom-side ${isVisibleBottomSide ? "visible" : ""}`} ref={bottomSideRef}>
                {React.Children.toArray(children)[1]} {/* Team member img and role */}
            </section>
        </div>
    );
}

export default HorizontalContainer;
