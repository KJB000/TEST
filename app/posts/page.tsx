import React from 'react'

export default function postspage() {
  const title = '애국가'
  const content = '동해물과 백두산이 마르고 닳도록'
  return (
    <div>
      <h1 className="text-3x1 font-bold text-red-500">Post page</h1>
      <p>Title : {title}</p>
      <p>Content : {content}</p>
    </div>
  )
}
