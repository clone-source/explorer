import { Explorer } from "~explorer"
import { NavigationBar } from "~navigation-bar"

import { rootFolder, setCurrentFolder } from "./state"

import "./app.css"

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const appElement = document.getElementById("app")!

export function App() {
  NavigationBar()
  Explorer()

  //////////
  // this also takes care of updating the explorer nodes that are rendered
  setCurrentFolder(rootFolder)
}
