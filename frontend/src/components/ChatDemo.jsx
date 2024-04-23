const ChatDemo = ({ imgsrc }) => {
  return (
    <>
      <div className="card w-80 bg-base-100 shadow-xl">
        <figure>
          <img src={imgsrc} alt="Shoes" />
        </figure>
        <div className="flex justify-center items-center w-full card-body">
          <p>
            Tired of getting <strong className="text-primary">ignored</strong>?
          </p>
        </div>
      </div>
    </>
  )
}

export default ChatDemo
