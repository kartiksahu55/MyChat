const ReceivedMessage = ({chat_msg}) => {
  return (
    <>
      <span className="bg-tertiary px-8 py-2 rounded-lg">{chat_msg}</span>
    </>
  );
};

export default ReceivedMessage;
