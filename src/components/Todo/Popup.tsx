import { ReactNode } from "react";
import { AiOutlineClose } from "react-icons/ai";
import ReactModal from "react-modal";
import { PopupHeader } from "./styled.components";
import { isMobile } from "react-device-detect";

function Popup({
  isOpen,
  children,
  setOpen,
  title,
  height,
  width
}: {
  isOpen: boolean;
  children: ReactNode;
  setOpen: () => void;
  title: string;
  height: string;
  width?: string;
}) {
  const desktop = {
    left: "40%",
    top: "20%",
    width: width ?? "360px"
  };
  const mobile = {
    top: "25%"
  };
  const style = isMobile ? mobile : desktop;
  return (
    <>
      {isOpen && (
        <ReactModal
          isOpen={isOpen}
          onRequestClose={setOpen}
          ariaHideApp={false}
          style={{
            overlay: {
              backgroundColor: "rgb(39 32 32 / 75%)"
            },
            content: {
              position: "absolute",
              border: "none",
              ...style,
              borderRadius: "8px",
              height: height ?? "260px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }
          }}
        >
          <>
            <div>
              <PopupHeader>
                <h3 style={{ margin: "4px" }}>{title}</h3>
                <AiOutlineClose
                  size={15}
                  onClick={setOpen}
                  style={{ cursor: "pointer" }}
                />
              </PopupHeader>
              <hr></hr>
            </div>

            {children}
          </>
        </ReactModal>
      )}
    </>
  );
}
export default Popup;
