import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, getRandomMessage } from "../utils/helper";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: getRandomMessage(20),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-[420px] h-[525px] ml-2 mt-3 border border-black bg-slate-100 rounded-lg overflow-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((m, i) => (
            <ChatMessage key={i} name={m.name} message={m.message} />
          ))}
        </div>
      </div>

      <form
        className="w-[420px] rounded-lg mt-1 p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Siddh",
              message: liveMessage,
            })
            
          );
          setLiveMessage("");
        }}
      >
        <input
          className="py-2 px-1 w-[320px]"
          placeholder="chat here "
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)
        
          }
        ></input>
        <button className="px-2 mx-2 py-1 rounded-lg font-bold ml-5 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
