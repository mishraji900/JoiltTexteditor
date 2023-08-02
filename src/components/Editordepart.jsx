import React, { useState } from 'react'
import RichTextEditor from "./RichTextEditor";
const Editordepart = () => {
    
  const [, setValue] = useState("");
  const getValue = (value) => {
    setValue(value);
  };
  return (
    <div className='bg-[#040404] min-h-screen flex justify-center items-center'>
      <div className='bg-inherit w-9/12 justify-center'>
        <div className='text-6xl underline text-[#95a1f9] flex justify-center p-6 font-akaya '>
          <h3>Rich Text Editor</h3>
        </div>
        <RichTextEditor initialValue="" getValue={getValue} />
        <br />
        
      </div>
    </div>
  )
}

export default Editordepart
