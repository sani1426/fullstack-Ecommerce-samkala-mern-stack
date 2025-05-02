import { useAppContext } from "../../context/AppContext"



const ProfilePanel = () => {
    const {user} = useAppContext()
  return (
    <div className="min-h-[calc(100vh-120px)] flex">
            <aside className="bg-slate-50 min-h-full w-full  max-w-80 ">
sidebar
            </aside>

            <main>

            </main>
    </div>
  )
}

export default ProfilePanel