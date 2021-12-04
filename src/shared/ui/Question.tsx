const Question = (props: Props) => {
    const { question, answer } = props
    return (
        <div className="my-4">
            &gt; <span className="font-bold" >{question ? null : "[Announcement]"} {question}</span>
            {answer ? (<p className="block p-4 bg-dark-3 my-4 rounded-md" >
                {answer}
            </p>) : null}
        </div>
    )
  }
  
export default Question