
// import Header from "@/components/Header";

// export default function Home() {
//   return (
//     <div className="bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200" >
//       <Header />
//     </div>
//   );
// }


import Header from '@/components/Header'
import Columns from '@/components/Column'
import NewTodoDialog from '@/components/new-todo-model'

export default function Home() {
  return (
    <section className='flex h-screen bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 py-12 text-white'>
      {/* <section className='flex h-screen bg-gradient-to-br from-gray-700 to-gray-900 py-12 text-white'> */}
      <div className='mx-auto w-full max-w-7xl px-6'>
        <Header />
        <div className='mt-5' >
          <NewTodoDialog />
        </div>
        <div className='grid grid-cols-3 gap-4 mt-5' >
          <Columns title="Todo" status="TODO" />
          <Columns title="In Progress" status="IN_PROGRESS" />
          <Columns title="Done" status="DONE" />
        </div>
      </div>
    </section>
  )
}