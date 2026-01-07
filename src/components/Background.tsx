import bg from "../assets/bg.jpg";

const Background = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.7))",
          opacity: 0.8,
        }}
      />
    </div>
  );
};

export default Background;
