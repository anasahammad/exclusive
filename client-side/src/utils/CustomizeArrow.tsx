import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const SlickPrevArrow = (props)=>{
    const { className, style, onClick } = props;
    return (
      <div
        className="cursor-pointer md:absolute  md:top-[-20%] md:left-[75%]"
        style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center",  width: "46px", height: "46px", borderRadius: "100%",  zIndex: 1, background: "#F5F5F5", color: "#000" }}
        onClick={onClick}
      > <FaArrowLeft className="text-black"/></div>

    );
}

export const SlickNextArrow = (props)=>{
    const { className, style, onClick } = props;
    return (
      <div
        className="cursor-pointer  absolute top-0 right-3  md:top-[-20%] md:right-[15%]"
        style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center",  width: "46px", height: "46px",   zIndex: 1, background: "#F5F5F5", borderRadius: "100%", color: "#000" }}
        onClick={onClick}
      > <FaArrowRight className="text-black"/></div>
    );
}

