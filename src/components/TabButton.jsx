export default function TabButton(Props) {
  function handleClick() {
    console.log("Hello world");
  }

  return (
    <li>
      <button onClick={handleClick}>{Props.children}</button>
    </li>
  );
}
