import { useState } from 'react'

import upArrowIcon from '@/assets/uparrow-icon.svg'

const SUGGESTED_QUESTIONS = [
  "What's a donor-advised fund?",
  'How can I offset large capital gains?',
  'Should I rent or buy in today\u2019s market?',
] as const

const MOBILE_QUESTIONS = [
  'When should I exercise my RSUs?',
  'How do I plan for early retirement?',
  "What's the best strategy for my 401(k)?",
] as const

export default function ChatSection() {
  const [input, setInput] = useState('')
  const hasText = input.trim().length > 0

  const handleQuestionClick = (question: string) => {
    setInput(question)
  }

  return (
    <section className="relative flex flex-1 flex-col items-center justify-between bg-chat-bg px-4 pb-6 sm:px-6 md:w-1/2 md:px-10 md:py-12">
      {/* Handle pill — mobile only */}
      <div className="flex w-full items-center justify-center pt-1 pb-3 md:hidden">
        <div className="h-[5px] w-[40px] rounded-full bg-handle" />
      </div>

      <div className="flex w-full max-w-[520px] flex-1 flex-col items-center justify-center">
        <h1 className="w-full text-center font-cormorant text-[26px] leading-[34px] font-normal text-notch sm:text-[32px] sm:leading-[42px] md:text-[36px] md:leading-[48px]">
          Ask me any financial question...
        </h1>

        {/* Desktop questions */}
        <div className="mt-8 hidden flex-col items-center gap-3 md:flex">
          {SUGGESTED_QUESTIONS.map((question) => (
            <button
              key={question}
              type="button"
              onClick={() => handleQuestionClick(question)}
              className="cursor-pointer rounded-full border border-question-border px-4 py-3 font-heebo text-[14px] leading-[20px] font-normal text-beta-text transition-colors hover:bg-gray-50"
            >
              {question}
            </button>
          ))}
        </div>

        {/* Mobile questions */}
        <div className="mt-5 flex flex-col items-center gap-2.5 sm:mt-6 sm:gap-3 md:hidden">
          {MOBILE_QUESTIONS.map((question) => (
            <button
              key={question}
              type="button"
              onClick={() => handleQuestionClick(question)}
              className="cursor-pointer rounded-full border border-question-border px-3.5 py-2.5 font-heebo text-[13px] leading-[18px] font-normal text-beta-text transition-colors hover:bg-gray-50 sm:px-4 sm:py-3 sm:text-[14px] sm:leading-[20px]"
            >
              {question}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 w-full max-w-[520px] md:mt-0">
        {/* Mobile: single-line input */}
        <div className="flex items-center gap-2 rounded-[14.8px] border border-chat-input-mobile-border bg-chat-input-mobile-bg px-4 py-3 md:hidden">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me any financial question..."
            className="min-w-0 flex-1 bg-transparent font-helvetica text-[15px] leading-[20px] font-normal text-text-primary placeholder-placeholder outline-none"
          />
          <button
            type="button"
            disabled={!hasText}
            className={`flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full transition-colors ${hasText ? 'cursor-pointer bg-text-primary hover:bg-black' : 'cursor-default bg-chat-arrow-bg'}`}
          >
            <img src={upArrowIcon} alt="Send" className="h-[15px] w-[6px]" />
          </button>
        </div>

        {/* Desktop: multiline textarea */}
        <div className="relative hidden rounded-[27px] bg-chat-input-bg px-5 pt-5 pb-4 md:block">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me any financial question..."
            rows={3}
            className="w-full resize-none bg-transparent font-heebo text-[16px] leading-[24px] font-normal text-text-primary placeholder-placeholder outline-none"
          />
          <div className="flex justify-end">
            <button
              type="button"
              disabled={!hasText}
              className={`flex h-[38px] w-[38px] items-center justify-center rounded-full transition-colors ${hasText ? 'cursor-pointer bg-text-primary hover:bg-black' : 'cursor-default bg-chat-arrow-bg'}`}
            >
              <img src={upArrowIcon} alt="Send" className="h-[19px] w-[8px]" />
            </button>
          </div>
        </div>

        {/* Mobile footer */}
        <footer className="mt-2 text-center font-heebo text-[9px] leading-[14px] font-normal whitespace-nowrap text-beta-text md:hidden">
          <p>
            By messaging evergreen.ai, you agree to our{' '}
            <a href="#">Terms of Use</a> and{' '}
            <a href="#">Privacy Policy</a>.
          </p>
        </footer>

        {/* Desktop footer */}
        <footer className="mt-4 hidden text-center font-heebo text-[14px] leading-[20px] font-normal text-beta-text md:block">
          <p>
            BETA Have feedback? Share it above to help us improve.
          </p>
          <p>
            By messaging evergreen.ai, you agree to our{' '}
            <a href="#" className="underline">
              Terms of Use
            </a>{' '}
            and{' '}
            <a href="#" className="underline">
              Privacy Policy
            </a>
            .
          </p>
        </footer>
      </div>
    </section>
  )
}
