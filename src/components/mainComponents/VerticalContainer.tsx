import "../../styles/verticalContainer.modules.css";
// VerticalContainer.tsx
import { useRef } from "react";
import { handleScroll } from "../../DynamicData";

type ContainerComponentsProps = {
  mainImgURL: string;
  sideImgURL: string | null;
  children: React.ReactNode;
};

const VerticalContainer = (props: ContainerComponentsProps) => {
  const componentRef = useRef<HTMLDivElement>(null);
  const isVisible = handleScroll(componentRef);

  return (
    <div className="container" ref={componentRef}>
      <section className={`v-left-side ${isVisible ? "visible" : ""}`}>
        <div className="img-holder">
          <img
            className="main-image"
            src={props.mainImgURL}
            alt="main_img"
          />
          {props.sideImgURL ? (
            <img className="side-image" src="" alt="" />
          ) : (
            ""
          )}
        </div>
      </section>

      <section className={`v-right-side ${isVisible ? "visible" : ""}`}>
        {props.children}
      </section>
    </div>
  );
};

export default VerticalContainer;

