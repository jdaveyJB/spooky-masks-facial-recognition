import React, { useEffect } from "react"
import { maskify } from "../util/maskify"

import "./styles.css"

export default () => {
  useEffect(() => {
    maskify([
      "/images/TungHead.png",
    ])
  }, [])

  return (
    <>
      <main className="content">
        <div className="grid">
          <div className="grid-item">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=750&q=60"
              alt="A woman wearing a red sweater."
            />
          </div>
          <div className="grid-item">
            <img
              src="https://i.imgur.com/GMsijMy.png"
              alt="A pile of skulls in a forest."
            />
          </div>
          <div className="grid-item">
            <img
              src="https://images.unsplash.com/photo-1551864490-a587c9f6f5e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=750&q=60"
              alt="A woman wearing an orange top."
            />
          </div>
          <div className="grid-item">
            <img
              src="https://images.unsplash.com/photo-1546525848-3ce03ca516f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=300&q=60"
              alt="A man wearing a shoulder bag in a park."
            />
          </div>
          <div className="grid-item">
            <img
              src="https://images.unsplash.com/photo-1544549269-414016cccf40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=300&q=60"
              alt="A man sitting under a warning sign."
            />
          </div>
          <div className="grid-item"> 
            <img
              src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=300&q=60"
              alt="A man making a face, standing in front of graffiti."
            />
          </div>
        </div>
      </main>
    </>
  )
}
