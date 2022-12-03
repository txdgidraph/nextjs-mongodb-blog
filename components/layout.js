import TopBar from "./TopBar/TopBar";

export default function Layout({ children }) {
  return (
    <div id="root">
      <TopBar />
      <main>{children}</main>
    </div>
  );
}
