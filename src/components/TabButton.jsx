export default function TabButton(Props) {
  return (
    <li>
      <button>{Props.children}</button>
    </li>
  );
}

// using destructuring
// export default function TabButton({children}) {
//   return (
//     <li>
//       <button>{children}</button>
//     </li>
//   );
// }
