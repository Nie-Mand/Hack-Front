import { Select, CodeArea, Button } from 'shared/ui'
import { useForm } from 'react-hook-form'
import React, { useRef, useState } from 'react'
import Countdown, { zeroPad } from 'react-countdown'

const Challenge = props => {
  const { register } = useForm()

  const [active, setActive] = useState(false)
  const [height, setHeight] = useState('0px')
  const [rotate, setRotate] = useState('transform duration-700 ease')

  const contentSpace = useRef(null)

  function toggleAccordion() {
    setActive(!active)
    // @ts-ignore
    setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`)
    setRotate(
      active
        ? 'transform duration-700 ease'
        : 'transform duration-700 ease rotate-180'
    )
  }

  const levelColourMap: any = {
    easy: 'yellow-400 ',
    medium: 'primary-3 ',
    hard: 'primary-2 ',
  }

  const stateColourMap: any = {
    on: 'white ',
    off: 'gray-500 ',
    notyet: 'gray-500 ',
  }

  const {
    timeLeft,
    id,
    title,
    state,
    datecountdown,
    secondstoend,
    level,
    shortdescription,
    points,
    type,
  } = props

  const [problemState, setProblemState] = React.useState(state)
  // const [timeLeft, setTimeLeft]=React.useState(datecountdown*1000+secondstoend*1000)

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      setProblemState('off')
      return 'OVER'
    } else {
      // Render a countdown
      return (
        <span>
          {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
        </span>
      )
    }
  }

  return (
    <section className="shadow my-10">
      <article className={'text-' + stateColourMap[problemState]}>
        <div
          className={
            (active ? ' rounded-t-xl' : ' rounded-xl') +
            ' border-l-3 border-dark-2'
          }
        >
          <header
            className={
              (type
                ? ' rounded-t-xl'
                : active
                ? 'rounded-t-xl'
                : 'delay-700 rounded-xl') +
              ' flex justify-between bg-dark-2 items-center p-5 pl-8 pr-8 select-none'
            }
          >
            <div className="w-3/5 float-left">
              <span
                className={'text-' + stateColourMap[problemState] + ' text-xl'}
              >
                {title}
              </span>
              <Countdown key={timeLeft} date={timeLeft} renderer={renderer} />
              {secondstoend && (
                <>
                  &nbsp;&nbsp;
                  <Countdown
                    key={timeLeft}
                    date={timeLeft}
                    renderer={renderer}
                  />
                </>
              )}
            </div>
            <div className="w-1/5 float-right">
              {level && (
                <span
                  className={
                    'block text-right text-' +
                    (problemState == 'on'
                      ? levelColourMap[level]
                      : stateColourMap[problemState]) +
                    ' text-sm capitalize'
                  }
                >
                  {level}
                </span>
              )}
            </div>
            <div className="w-1/8 float-right">
              <span
                className={
                  'block text-right mr-4 text-' +
                  (problemState == 'on'
                    ? 'primary-4'
                    : stateColourMap[problemState]) +
                  ' text-sm'
                }
              >
                {points} XP
              </span>
            </div>
            <button
              onClick={toggleAccordion}
              className={
                `${rotate} inline-block ` +
                'rounded-full w-7 h-7 flex items-center justify-center'
              }
            >
              <i className="fas fa-chevron-down"></i>
            </button>
          </header>
          {type && (
            <div
              className={
                (active ? '' : 'delay-700 rounded-b-xl') +
                ' ease pl-8 pr-8 bg-dark-2 pb-5 text-base text-justify'
              }
            >
              {type}
            </div>
          )}
        </div>
      </article>
      <article
        ref={contentSpace}
        className={
          'overflow-hidden rounded-b-xl text-' +
          stateColourMap[problemState] +
          ' overflow-auto transition-max-height duration-700 ease-in-out'
        }
        style={{ maxHeight: `${height}` }}
      >
        <div className="border-l-2 bg-dark-2 border-primary-2">
          <header className="flex justify-between items-center p-5 pl-8 pr-8 select-none">
            <span className="font-thin text-sm text-justify">
              {shortdescription}
            </span>
          </header>
          <div>
            <div className="pl-8 pr-8 pb-14 text-white">
              {/*<ul> //will help in problemset/:id plus clarification
                        <li className="pb-2">
                            SUBMIT YOUR SOLUTION
                        </li>
                        <li className="pb-1">
                        <Select
                            defaultValue="Choose from the list"
                            name="code-language"
                            {...register('code-language', {})}
                            options={[
                            { value: 'cpp', label: 'C++' },
                            { value: 'c', label: 'C' },
                            { value: 'java', label: 'Java' },
                            { value: 'python', label: 'Python' },
                            ]}
                        />
                        </li>
                        <li className="pb-2">
                        <CodeArea 
                        name="your-code"
                        register={register}
                        placeholder="your-code-here"
                        />
                        <Button className="block float-right" type="submit" contained>Submit</Button>
                        </li>
                    </ul>
                        */}
              {problemState == 'on' && (
                <div className="block float-right flex">
                  <small className="p-3 text-primary-3">Underway...</small>{' '}
                  <Button type="submit" contained href={'problemset/' + id}>
                    Go for it!
                  </Button>
                </div>
              )}
              {problemState == 'off' && (
                <Button className="block float-right" type="submit" disabled>
                  <span className="line-through">Go for it!</span> OVER
                </Button>
              )}
              {problemState == 'notyet' && (
                <div className="block float-right flex text-base text-gray-500">
                  <i>Nothing yet, come back later!</i>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Challenge
