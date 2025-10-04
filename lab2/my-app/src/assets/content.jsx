export default function Content() { {/*content page*/}
  return (
    <div>
      <h1>Hello World, my name is Timothy</h1> {/*Header*/}
      <h2>It is {new Date().toLocaleTimeString()}.</h2> {/*Timestamp(not dynamic)*/}
    </div>
  );
}