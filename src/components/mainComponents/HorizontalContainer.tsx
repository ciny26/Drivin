import React from "react";

type HorizontalContainerProps = {
    children: React.ReactNode,
}

const HorizontalContainer = ({ children }: HorizontalContainerProps) => {
    return (
        <div className="h-container">
            <section className="h-up-side">
                {React.Children.toArray(children)[0]} {/* Render the first child */}
            </section>
            <section className="h-up-bottom">
                {React.Children.toArray(children)[1]} {/* Render the second child */}
            </section>
        </div>
    );
}

export default HorizontalContainer;
