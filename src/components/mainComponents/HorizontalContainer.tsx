import React from "react";

type HorizontalContainerProps = {
    children: React.ReactNode,
}

const HorizontalContainer = ({ children }: HorizontalContainerProps) => {
    return (
        <div className="h-container">
            <section className="h-up-side">
                {React.Children.toArray(children)[0]} {/* Team text (Header , paragraph) */}
            </section>
            <section className="h-bottom-side">
                {React.Children.toArray(children)[1]} {/* Tea member img and role */}
            </section>
        </div>
    );
}

export default HorizontalContainer;
