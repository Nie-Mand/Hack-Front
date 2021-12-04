import NewWindow from 'react-new-window'
import React, { useState } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import styled from 'styled-components'
import { Button } from '.'
import theme from 'prism-react-renderer/themes/vsDark'

const Pre = styled.pre`
  text-align: left;
`

const Line = styled.div`
  display: table-row;
`

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`

const LineContent = styled.span`
  display: table-cell;
`

const SubmissionRow = props => {
  const { time, problem, lang, code, status, description } = props

  const statusColourMap: any = {
    Pending: ' bg-yellow-100 text-black ',
    AC: ' bg-green-100 text-green-800 ',
    WA: ' bg-primary-2 text-white ',
    RTE: ' bg-primary-2 text-white ',
    TLE: ' bg-primary-4 text-white ',
    CE: ' bg-primary-2 text-white ',
  }

  const [showCode, setShowCode] = useState(null)

  return (
    <>
      <tr>
        <td className="px-6 py-4 whitespace-no-wrap border-b border-dark-2">
          <div className="text-sm leading-5 text-white">{time}</div>
        </td>

        <td className="px-6 py-4 whitespace-no-wrap border-b border-dark-2">
          <div className="text-sm leading-5 text-white">{problem}</div>
        </td>

        <td className="px-6 py-4 whitespace-no-wrap border-b border-dark-2">
          {lang}
        </td>

        <td className="px-6 py-4 text-sm leading-5 text-white whitespace-no-wrap border-b border-dark-2">
          <button className="" onClick={() => setShowCode(code)}>
            View
          </button>
        </td>
        <td className="px-6 py-4 text-sm leading-5 text-white whitespace-no-wrap border-b border-dark-2">
          <span
            className={
              'inline-flex px-2 text-xs font-semibold leading-5 ' +
              statusColourMap[status] +
              ' rounded-full capitalize'
            }
            title={description}
          >
            {status}
          </span>
        </td>
      </tr>
      {showCode ? (
        <Window
          relatedShowCode={setShowCode}
          relatedCode={showCode}
          relatedLang={lang}
          relatedProblem={problem}
        />
      ) : null}
    </>
  )
}

const Window = ({
  relatedShowCode,
  relatedCode,
  relatedLang,
  relatedProblem,
}) => {
  const closePreview = () => {
    relatedShowCode(null)
  }

  return (
    <NewWindow onUnload={() => relatedShowCode(null)}>
      <div className="bg-dark-2 w-full h-14">
        <div className="w-4/5 flex float-left text-white my-4">
          <h2 className="ml-3">{relatedProblem}</h2>
        </div>
        <div className="w-1/5 flex float-right">
          <Button
            className="block float-right mt-2 mr-2 ml-auto"
            onClick={() => closePreview()}
            outlined
          >
            Close
          </Button>
        </div>
      </div>
      <div className="bg-dark-2 min-h-full">
        <Highlight
          {...defaultProps}
          theme={theme}
          code={relatedCode}
          language={relatedLang}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <Pre className={className} style={style}>
              {tokens.map((line, i) => (
                <Line key={i} {...getLineProps({ line, key: i })}>
                  <LineNo>{i + 1}</LineNo>
                  <LineContent>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </LineContent>
                </Line>
              ))}
            </Pre>
          )}
        </Highlight>
      </div>
    </NewWindow>
  )
}

export default SubmissionRow
