import { Navbar } from "../components/Navbar";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        className="snap-center"
        style={{ textAlign: "center", fontSize: "2em" }}
      >
        Hello World PKRU
      </div>
    </div>
  );
}
