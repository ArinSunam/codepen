import React, { useEffect, useState } from 'react'
import SplitPane from 'react-split-pane'
import { FaChevronDown, FaCss3, FaHtml5, FaJs } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { css } from '@codemirror/lang-css'
import { html } from '@codemirror/lang-html'
import { Button } from '@material-tailwind/react'



const Project = () => {
  const [ihtml, setIhtml] = useState("")
  const [icss, setIcss] = useState("")
  const [js, setJs] = useState("")
  const [output, setOutput] = useState("")

  useEffect(() => {
    updateOutput()
  }, [ihtml, icss, js])

  const updateOutput = () => {
    const combinedOutput = `
    <html>
      <head>
        <style> ${icss} </style>
      </head>
      <body>
      ${ihtml}
      <script>${js}</script>
      </body>
    </html>
    `;

    setOutput(combinedOutput)

  }



  return (
    <div className='w-screen h-screen flex flex-col items-start justify-start overflow-hidden'>


      {/* alert section */}

      {/* header section */}
      <div className='w-full flex items-center justify-between px-12'>
        <img className='w-[155px] h-auto object-contain mt-[24px] te' src='../images/cp_logo.png' />

        <div className='mt-5 flex items-center justify-center gap-4'>
          <Button size='md'
            color='indigo'
          >Save</Button>

          <div className='flex gap-1 items-center'>
            <img className='w-[45px] h-[40px] object-cover rounded' src="../images/fox.jpeg" />

            <FaChevronDown className='text-gray-500 cursor-pointer' />
          </div>


        </div>


      </div>


      {/* coding section */}
      <SplitPane
        split='horizontal'
        minSize={'20%'}
        maxSize={'80%'}
        defaultSize={'50%'}>

        {/* top coding section */}
        <SplitPane split='vertical' minSize={300} defaultSize={'33%'} >
          {/* html code */}
          <div className='flex flex-col items-start justify-start'>
            <div className='w-full flex items-center justify-between gap-1 ' >
              <div className='bg-zinc-800 px-4 py-2 flex items-center justify-center gap-3 border-t-4'>
                <FaHtml5 className='text-xl text-red-500' />
                <p className='font-semibold text-gray-400 '>HTML</p>
              </div>
              {/* ljl */}
              {/* icons */}

              <div className='cursor-pointer flex items-center justify-center gap-5 px-4'>
                <IoMdSettings className='text-xl text-gray-400 ' />
                <FaChevronDown className='text-xl text-gray-400 ' />

              </div>


            </div>
            <div className='w-full px-2'>
              <CodeMirror
                value={ihtml}
                height='600px'
                extensions={[html(true)]}
                theme={'dark'}
                onChange={(value) => {
                  setIhtml(value);
                }} />
            </div>
          </div>


          <SplitPane split='vertical' minSize={300} defaultSize={'53%'} >
            {/* css code */}
            <div className='flex flex-col items-start justify-start'>
              <div className='w-full flex items-center justify-between gap-1 ' >
                <div className='bg-zinc-800 px-4 py-2 flex items-center justify-center gap-3 border-t-4'>
                  <FaCss3 className='text-xl text-light-blue-500' />
                  <p className='font-semibold text-gray-400 '>CSS</p>
                </div>

                {/* icons */}

                <div className='cursor-pointer flex items-center justify-center gap-5 px-4'>
                  <IoMdSettings className='text-xl text-gray-400 ' />
                  <FaChevronDown className='text-xl text-gray-400 ' />

                </div>


              </div>

              <div className='w-full px-2'>
                <CodeMirror
                  value={icss}
                  height='600px'
                  extensions={[css(true)]}
                  theme={'dark'}
                  onChange={(value) => {
                    setIcss(value);
                  }} />
              </div>
            </div>



            {/* javascript code */}
            <div className='flex flex-col items-start justify-start'>
              <div className='w-full flex items-center justify-between gap-1 ' >
                <div className='bg-zinc-800 px-4 py-2 flex items-center justify-center gap-3 border-t-4'>
                  <FaJs className='text-xl text-yellow-500' />
                  <p className='font-semibold text-gray-400 '>JS</p>
                </div>

                {/* icons */}

                <div className='cursor-pointer flex items-center justify-center gap-5 px-4'>
                  <IoMdSettings className='text-xl text-gray-400 ' />
                  <FaChevronDown className='text-xl text-gray-400 ' />

                </div>


              </div>
              <div className='w-full px-2'>
                <CodeMirror
                  value={js}
                  height='600px'
                  extensions={[javascript({ jsx: true })]}
                  theme={'dark'}
                  onChange={(value) => {
                    setJs(value);
                  }} />
              </div>
            </div>

          </SplitPane>
        </SplitPane>



        {/* bottom coding section */}

        <div className='bg-white' style={{ overflow: "hidden", height: "100%" }}>

          <iframe
            title='Result'
            srcDoc={output}
            style={{ border: "none", width: "100%", height: "100%" }} />

        </div>

      </SplitPane>

    </div >
  )
}

export default Project
