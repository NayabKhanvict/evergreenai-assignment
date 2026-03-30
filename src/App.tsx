import ChatSection from '@/components/ChatSection'
import ProfileSection from '@/components/ProfileSection'

export default function App() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-page-bg p-4 md:p-5">
      {/* ── Mobile: iPhone device frame ── */}
      <div className="phone-frame relative mx-auto flex w-full max-w-[400px] flex-col md:hidden">
        {/* Device bezel */}
        <div className="rounded-[50px] bg-page-bg p-[10px]">
          {/* Dynamic Island */}
          <div className="absolute top-[18px] left-1/2 z-30 h-[30px] w-[104px] -translate-x-1/2 rounded-[18px] bg-page-bg" />

          {/* Screen */}
          <div className="relative flex flex-col overflow-hidden rounded-[40px] bg-chat-bg">
            <ProfileSection />
            <ChatSection />
          </div>
        </div>
      </div>

      {/* ── Desktop: side-by-side layout ── */}
      <div className="hidden h-[calc(100dvh-40px)] w-full flex-row overflow-hidden rounded-2xl shadow-2xl md:flex">
        <ChatSection />
        <ProfileSection />
      </div>
    </div>
  )
}
