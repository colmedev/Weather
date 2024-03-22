import '../stylesheets/btn.css'
function Btn ({ text, ...props }) {
  return (
  <button className="btn" onClick={props.click}>{text}</button>
  )
}

export default Btn
