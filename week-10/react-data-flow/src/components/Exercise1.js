import React, { useState } from 'react'

const Exercise1 = () => {

    const [library, setLibrary] = useState({
        images: [
          "http://www.agr.gc.ca/resources/prod/img/discover-decouvrez/potatoes300x210.jpg",
          "https://img.purch.com/rc/300x200/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA3Ni85MTYvb3JpZ2luYWwvc3BpbmFjaC5qcGc=",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/220px-PerfectStrawberry.jpg"],
        currentImg: 0
      })

    const shiftImageBack = () => {
        if (library.currentImg == 0) {
            return
        }
        const libraryTemp = {...library}
        libraryTemp.currentImg--
        setLibrary(libraryTemp)
    }
    const shiftImageForward = () => {
        if (library.currentImg == library.images.length-1) {
            return
        }
        const libraryTemp = {...library}
        libraryTemp.currentImg++
        setLibrary(libraryTemp)
    }

    return (<div>
        <button onClick={shiftImageBack}>Previous</button>
        <img src={library.images[library.currentImg]}></img>
        <button onClick={shiftImageForward}>Next</button>
        </div>
    )
}

export default Exercise1