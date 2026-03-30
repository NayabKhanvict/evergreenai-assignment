import ChatSection from '@/components/ChatSection'
import ProfileSection from '@/components/ProfileSection'

export default function App() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-page-bg md:p-5">
      <div className="phone-frame relative flex min-h-dvh w-full flex-col overflow-hidden rounded-[44.4px] md:h-[calc(100dvh-40px)] md:min-h-0 md:flex-row md:rounded-2xl md:shadow-2xl md:[box-shadow:0_25px_50px_-12px_rgba(0,0,0,0.25)]">
        {/* Notch — mobile only */}
        <div className="absolute top-[11.5px] left-1/2 z-30 h-[29.6px] w-[103.6px] -translate-x-1/2 rounded-[18.09px] bg-notch md:hidden" />

        <ProfileSection />

        {/* Mobile handle divider — no borders, seamless blend */}
        <div className="flex items-center justify-center border-0 bg-profile-bg pb-3 pt-2 md:hidden">
          <div className="h-[5px] w-[40px] rounded-full bg-handle" />
        </div>

        <ChatSection />
      </div>
    </div>
  )
}
