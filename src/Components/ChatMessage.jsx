/* eslint-disable react/prop-types */
const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        className="h-12 "
        alt="logo"
        src="https://tse2.mm.bing.net/th?id=OIP.Crq9sn3Qu3HyHwPJi2zW8QHaHa&pid=Api&P=0&h=180"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
