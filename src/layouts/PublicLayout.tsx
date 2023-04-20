import React, { Suspense } from 'react'

export const PublicLayout = (props: any) => (
  <Suspense fallback={<div>Loading...</div>}>
    <div className='public-layout'>{props.children}</div>
  </Suspense>
)
