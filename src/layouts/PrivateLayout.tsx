import { Suspense } from 'react'

export const PrivateLayout = (props: any) => {
  return (
    <div style={{ minHeight: '100vh' }} className='app-layout'>
      <Suspense fallback={<div>Loading...</div>}>
        <div className='main-content'>{props.children}</div>
      </Suspense>
    </div>
  )
}
