import * as JZZ from "jzz";

JZZ()
  .or(() => {
    document.getElementById("out").innerText = "Cannot start MIDI engine!!!";
  })
  .and(() => {
    document.getElementById("out").innerText = "MIDI engine is running!!!";
  });
