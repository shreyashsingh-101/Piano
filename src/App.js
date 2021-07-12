import "./App.css";
import notes from "./Notes.js";

function KeyBlack(props) {
  return (
    <div
      onClick={() => {
        props.note.currentTime = 0;
        props.note.play();
      }}
      className={"keys black " + props.key_n}
    >
      <div className="bk_label">{props.key_n}</div>
    </div>
  );
}

function KeyWhite(props) {
  return (
    <div
      onClick={() => {
        props.note.currentTime = 0;
        props.note.play();
      }}
      className={"keys white " + props.key_n}
    >
      <div className="wk_label">{props.key_n.split(" ")[1]}</div>
    </div>
  );
}

let keyboard = {
  z: [notes.C4, "C4"],
  x: [notes.D4, "D4"],
  c: [notes.E4, "E4"],
  v: [notes.F4, "F4"],
  b: [notes.G4, "G4"],
  n: [notes.A4, "A4"],
  m: [notes.B4, "B4"],
  s: [notes.Db4, "Db4"],
  d: [notes.Eb4, "Eb4"],
  g: [notes.Gb4, "Gb4"],
  h: [notes.Ab4, "Ab4"],
  j: [notes.Bb4, "Bb4"],
  w: [notes.C5, "C5"],
  e: [notes.D5, "D5"],
  r: [notes.E5, "E5"],
  t: [notes.F5, "F5"],
  y: [notes.G5, "G5"],
  u: [notes.A5, "A5"],
  i: [notes.B5, "B5"],
  3: [notes.Db5, "Db5"],
  4: [notes.Eb5, "Eb5"],
  6: [notes.Gb5, "Gb5"],
  7: [notes.Ab5, "Ab5"],
  8: [notes.Bb5, "Bb5"],
};
let keys = Object.keys(keyboard);

document.addEventListener("keydown", (e) => {
  for (let i = 0; i < keys.length; i++) {
    if (e.key === keys[i]) {
      keyboard[keys[i]][0].currentTime = 0;
      keyboard[keys[i]][0].play();
      if (keyboard[keys[i]][1].length > 2) {
        document
          .querySelector("." + keyboard[keys[i]][1])
          .classList.add("pressed_b");
        setTimeout(() => {
          document
            .querySelector("." + keyboard[keys[i]][1])
            .classList.remove("pressed_b");
        }, 200);
      } else {
        document
          .querySelector("." + keyboard[keys[i]][1])
          .classList.add("pressed_w");
        setTimeout(() => {
          document
            .querySelector("." + keyboard[keys[i]][1])
            .classList.remove("pressed_w");
        }, 200);
      }

      break;
    }
  }
});

function App() {
  return (
    <div className="App">
      <div className="heading">
        React Piano <br /> <span>-by Shreyash Singh</span>
      </div>

      <div className="ins">
        Keyboard :
        <br />
        <table>
          <tr>
            <th>Key</th>
            <th>Note</th>
          </tr>
          <tr>
            <td>C4-B4, C5-B5</td>
            <td>z-m, w-i</td>
          </tr>
          <tr>
            <td>Db4, Eb4, Gb4, Ab4, Bb4</td>
            <td>s, d, g, h, j</td>
          </tr>
          <tr>
            <td>Db5, Eb5, Gb5, Ab5, Bb5</td>
            <td>3, 4, 6, 7, 8</td>
          </tr>
        </table>
      </div>

      <div className="piano">
        <KeyWhite key_n="c C4" note={notes.C4}></KeyWhite>
        <KeyBlack key_n="Db4" note={notes.Db4}></KeyBlack>
        <KeyWhite key_n="d D4" note={notes.D4}></KeyWhite>
        <KeyBlack key_n="Eb4" note={notes.Eb4}></KeyBlack>
        <KeyWhite key_n="e E4" note={notes.E4}></KeyWhite>
        <KeyWhite key_n="f F4" note={notes.F4}></KeyWhite>
        <KeyBlack key_n="Gb4" note={notes.Gb4}></KeyBlack>
        <KeyWhite key_n="g G4" note={notes.G4}></KeyWhite>
        <KeyBlack key_n="Ab4" note={notes.Ab4}></KeyBlack>
        <KeyWhite key_n="a A4" note={notes.A4}></KeyWhite>
        <KeyBlack key_n="Bb4" note={notes.Bb4}></KeyBlack>
        <KeyWhite key_n="b B4" note={notes.B4}></KeyWhite>

        <KeyWhite key_n="c C5" note={notes.C5}></KeyWhite>
        <KeyBlack key_n="Db5" note={notes.Db5}></KeyBlack>
        <KeyWhite key_n="d D5" note={notes.D5}></KeyWhite>
        <KeyBlack key_n="Eb5" note={notes.Eb5}></KeyBlack>
        <KeyWhite key_n="e E5" note={notes.E5}></KeyWhite>
        <KeyWhite key_n="f F5" note={notes.F5}></KeyWhite>
        <KeyBlack key_n="Gb5" note={notes.Gb5}></KeyBlack>
        <KeyWhite key_n="g G5" note={notes.G5}></KeyWhite>
        <KeyBlack key_n="Ab5" note={notes.Ab5}></KeyBlack>
        <KeyWhite key_n="a A5" note={notes.A5}></KeyWhite>
        <KeyBlack key_n="Bb5" note={notes.Bb5}></KeyBlack>
        <KeyWhite key_n="b B5" note={notes.B5}></KeyWhite>
      </div>

      <div className="less-width">
        Please rotate your phone to play the piano.
      </div>
    </div>
  );
}

export default App;
