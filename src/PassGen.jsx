import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";

export default function PassGen() {

  const [len, setLen] = useState(8);
  const [char, setChar] = useState(false);
  const [num, setNum] = useState(false);
  const [pass, setPass] = useState("");

  const passGen = useCallback(() => {
    let p = "";
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    if (num) {
      str += "1234567890";
    }
    if (char) {
      str += "!@#$%^&*()_+";
    }


    for (let i = 1; i <= len; i++) {
      let ch = Math.floor(Math.random() * str.length + 1);
      p += str.charAt(ch);
    }

    setPass(p);

  }, [len, char, num, setPass,]);


  useEffect(() => {
    passGen();
  }, [len, num, char, passGen])
  return (
    <div >
      <div className="h-screen flex justify-center items-center flex-col gap-5">

        <h1 className="text-4xl  text-center">Password Generator</h1>
        <input
          type="text"
          value={pass}
          className="text-2xl  text-center outline rounded-xl py-3 text-black bg-white "
          placeholder="Password"
          readOnly
        />
        <button
          className="bg-[crimson] hover:bg-red-400 text-white py-2 px-4 rounded-md"
          onClick={() => navigator.clipboard.writeText(pass)}
        >Copy</button>
        <div className="flex gap-3">
          <label >Include Characters</label>
          <input
            type="checkbox"
            name="" id=""
            defaultChecked={char}
            onChange={() => { setChar(prev => !prev) }}
          />

        </div>

        <div className="flex gap-3">
          <label >Include Numbers</label>
          <input
            type="checkbox"
            defaultChecked={num}
            name="" id=""
            onChange={() => { setNum(prev => !prev) }}
          />
        </div>

        <div className="flex gap-3">
          <label >Length ( {len} )</label>
          <input
            type="range"
            name=""
            id=""
            min={6}
            max={20}
            className="cursor-pointer"
            onChange={(e) => { setLen(e.target.value) }}
          />
        </div>

      </div>
    </div>
  )

}