import { useEffect, useState } from "react"
import { ModalButton } from "../../components/Modal/Modal"

const TCompiler = () => {

    const [code, setCode] = useState("Optional default code goes here")

    const TEST = () => {
      const ace = document.getElementById("output");

      console.log("EST", ace)
      const ace2 = document.getElementsByClassName("code-editor");

      console.log("EST2", ace2)
    }

    useEffect(() => {
        const jDoodleScript = document.createElement('script')
        jDoodleScript.src = "https://www.jdoodle.com/assets/jdoodle-pym.min.js"
        jDoodleScript.type = "text/javascript"
        document.head.append(jDoodleScript)
    
        const onLoad = () => {
          console.log('JDoodle is ready')
        }
    
        window.addEventListener('JDoodleLoad', onLoad)
   
      }, [])

    return <><div data-pym-src='https://www.jdoodle.com/plugin' data-language="java"
    data-version-index="4" data-libs="mavenlib1, mavenlib2">
    {code}
  </div>
  <ModalButton onClick={TEST} key={"123"} text={"TEST"}/>
  </>
}

export default TCompiler;