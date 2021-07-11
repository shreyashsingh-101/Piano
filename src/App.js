import "./App.css";

function KeyBlack(props) {
  return (
    <div
      onClick={() => {
        let audio = new Audio(props.url);
        audio.play();
      }}
      className="keys black"
    ></div>
  );
}

function KeyWhite(props) {
  return (
    <div
      onClick={() => {
        let audio = new Audio(props.url);
        audio.play();
      }}
      className={"keys white " + props.key_n}
    ></div>
  );
}

let keyboard = {
  z: "C4",
  x: "D4",
  c: "E4",
  v: "F4",
  b: "G4",
  n: "A4",
  m: "B4",
  s: "Db4",
  d: "Eb4",
  g: "Gb4",
  h: "Ab4",
  j: "Bb4",
  w: "C5",
  e: "D5",
  r: "E5",
  t: "F5",
  y: "G5",
  u: "A5",
  i: "B5",
  3: "Db5",
  4: "Eb5",
  6: "Gb5",
  7: "Ab5",
  8: "Bb5",
};
let keys = Object.keys(keyboard);

document.addEventListener("keydown", (e) => {
  for (let i = 0; i < keys.length; i++) {
    if (e.key === keys[i]) {
      let audio = new Audio(`/piano-mp3/${keyboard[keys[i]]}.mp3`);
      audio.play();
      break;
    }
  }
});

function App() {
  return (
    <div className="App">
      <div className="heading">React Piano <br /> <span>-by Shreyash Singh</span></div>

      <div className="ins">
        Keyboard : C4-B4 = z-m, C4s = s,<br /> D4s = d, F4s = g, G4s = h, A4s = j <br />
        C5-B5 = w-i, C5s = 3,<br /> D5s = 4, F5s = 6, G5s = 7, A5s = 8
      </div>

      <div className="piano">
        <KeyWhite key_n="c" url="/piano-mp3/C4.mp3"></KeyWhite>
        <KeyBlack url="/piano-mp3/Db4.mp3"></KeyBlack>
        <KeyWhite key_n="d" url="/piano-mp3/D4.mp3"></KeyWhite>
        <KeyBlack url="/piano-mp3/Eb4.mp3"></KeyBlack>
        <KeyWhite key_n="e" url="/piano-mp3/E4.mp3"></KeyWhite>
        <KeyWhite key_n="f" url="/piano-mp3/F4.mp3"></KeyWhite>
        <KeyBlack url="/piano-mp3/Gb4.mp3"></KeyBlack>
        <KeyWhite key_n="g" url="/piano-mp3/G4.mp3"></KeyWhite>
        <KeyBlack url="/piano-mp3/Ab4.mp3"></KeyBlack>
        <KeyWhite key_n="a" url="/piano-mp3/A4.mp3"></KeyWhite>
        <KeyBlack url="/piano-mp3/Bb4.mp3"></KeyBlack>
        <KeyWhite key_n="b" url="/piano-mp3/B4.mp3"></KeyWhite>

        <KeyWhite key_n="c" url="/piano-mp3/C5.mp3"></KeyWhite>
        <KeyBlack url="/piano-mp3/Db5.mp3"></KeyBlack>
        <KeyWhite key_n="d" url="/piano-mp3/D5.mp3"></KeyWhite>
        <KeyBlack url="/piano-mp3/Eb5.mp3"></KeyBlack>
        <KeyWhite key_n="e" url="/piano-mp3/E5.mp3"></KeyWhite>
        <KeyWhite key_n="f" url="/piano-mp3/F5.mp3"></KeyWhite>
        <KeyBlack url="/piano-mp3/Gb5.mp3"></KeyBlack>
        <KeyWhite key_n="g" url="/piano-mp3/G5.mp3"></KeyWhite>
        <KeyBlack url="/piano-mp3/Ab5.mp3"></KeyBlack>
        <KeyWhite key_n="a" url="/piano-mp3/A5.mp3"></KeyWhite>
        <KeyBlack url="/piano-mp3/Bb5.mp3"></KeyBlack>
        <KeyWhite key_n="b" url="/piano-mp3/B5.mp3"></KeyWhite>
      </div>

      <div className="less-width">
        Please rotate your phone to play the piano.
      </div>
    </div>
  );
}

export default App;
