const ChatSection = () => {
  const messages = [
    { id: 1, sender: "user", text: "Hello, how are you?" },
    { id: 2, sender: "receiver", text: "I'm good, thanks! How about you?" },
    { id: 3, sender: "user", text: "Doing great, thank you!" },
    { id: 4, sender: "receiver", text: "Glad to hear that." },
  ];
  return (
    <div className="chat lg:flex w-full flex flex-col lg:flex-col h-screen text-white">
      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "user" ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`max-w-[75%] p-3 rounded-lg text-white ${
                message.sender === "user"
                  ? "bg-blue-500 text-left"
                  : "bg-green-500 text-right"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Form */}
      <div className="p-4 border-t">
        <form className="flex">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 border rounded-l-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 rounded-r-md hover:bg-blue-600"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatSection;
