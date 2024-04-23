const ChatDemo = ({ imgsrc, question, end }) => {
  return (
    <>
      <div className="card  w-[260px] bg-base-100 shadow-xl hover:brightness-90 transition-all cursor-pointer group rounded-lg overflow-hidden relative hover:bg-slate-50">
        <figure className="h-[170px]">
          <img src={imgsrc} alt="pic" />
        </figure>
        <div className="flex justify-center items-center w-full card-body h-[70px]">
          <p>
            {question} <strong className="text-primary">{end}</strong>?
          </p>
        </div>
      </div>
    </>
  )
}

export default ChatDemo