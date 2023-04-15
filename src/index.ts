function Sidebar(props) {

  return (
      <div className="sidebar">
          {props.children}
      </div>
  )
}

<Sidebar>
  <nav>
      <a href="#">Home</a>
      <a href="#">Posts</a>
      <a href="#">Contact</a>
  </nav>
</Sidebar>