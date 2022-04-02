import React from "react"

const handleHover = event => {
  let el = event.target
  if (el) {
    console.log("hover: " + el.classList)
    el.classList.add("elastic-animation")

    setTimeout(() => {
      el.classList.remove("elastic-animation")
    }, 1000)
  }
}

const PageTitle = props => {
  let arr = Array.from(props.title)
  //   let className = props.className != null ? props.className : "page-header elastic"
  //   console.log(arr)
  //   arr.forEach((item, index) => {
  //     console.log(item, index)
  //   })

  return (
    <div>
      {arr.map(function (item, index) {
        let className =
          props.className != null ? props.className : "page-header elastic"
        //   let className = "page-header elastic"
        if (item === " ") {
          className += " space"
        }
        return (
          <div key={index} className={className} onMouseOver={handleHover}>
            {item}
          </div>
        )
      })}
    </div>
  )
}

export default PageTitle
