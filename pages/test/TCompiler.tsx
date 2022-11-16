import { useEffect, useState } from "react"

const TCompiler = () => {

    const [code, setCode] = useState("Optional default code goes here")

    useEffect(() => {
        const jDoodleScript = document.createElement('script')
        jDoodleScript.src = "https://www.jdoodle.com/assets/jdoodle-pym.min.js"
        jDoodleScript.type = "text/javascript"
        document.head.append(jDoodleScript)
    
        const onLoad = () => {
          console.log('JDoodle is ready')
        }
    
        window.addEventListener('JDoodleLoad', onLoad)
    
        return () => {
          window.removeEventListener('JDoodleLoad', onLoad)
        }
      }, [])

    return <div data-pym-src='https://www.jdoodle.com/plugin' data-language="java"
    data-version-index="4" data-libs="mavenlib1, mavenlib2">
    {code}
  </div>
}

export default TCompiler;