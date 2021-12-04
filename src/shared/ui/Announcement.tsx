const Announcement = (props: Props) => {
    const { flair, title, flaircolor } = props
    let fcolor:string
    if (!flaircolor){
        fcolor='primary-2'
    } else {
        fcolor=flaircolor
    }
    return (
<div className="news mx-auto rounded-full bg-indigo-darker w-full flex items-center">
        <span className={"bg-"+fcolor+" text-white tracking-wide text-xs w-auto m-2 inline-block rounded-full py-1 px-2 uppercase"}>{flair}</span>
        <span className="txt w-2/3 sm:w-full text-white text-sm">{title}</span>
      </div>
    )
  }
  
export default Announcement