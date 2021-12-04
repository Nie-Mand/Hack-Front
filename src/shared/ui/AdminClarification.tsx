import React, { useState } from 'react'
import { Button } from '.'
const AdminClarification = (props: Props) => {

    const { id, question, problem } = props
    const [answer, setAnswer] = useState("")

    return (
        <div>
            &gt; <span className="font-bold" ><span className="bg-primary-2 text-white tracking-wide text-xs w-auto m-2 inline-block rounded-full py-1 px-2 uppercase">{problem}</span>
 {question}</span>

            <div className="flex">
                <div className="mr-1" style={{width: "95%"}}>
                    <textarea className="w-full p-3 mt-1 mb-5 bg-dark-3 rounded-2xl focus:outline-none focus:shadow" value={answer} onChange={(e) => setAnswer(e.target.value)}></textarea>
                </div>
                <Button className="block float-right mt-9" contained>
                    <i className="fas fa-paper-plane"></i>
                </Button>
            </div>

            
            <div className="flex justify-end" >

            </div>
        </div>
    )
  }
  
export default AdminClarification