function Footer(){

  const date = new Date().getFullYear()

  return (
      <div>
      <hr></hr>
    <footer>
      Copyright © {date} XYZ Collective TO
    </footer>

      </div>
  )
}

export default Footer