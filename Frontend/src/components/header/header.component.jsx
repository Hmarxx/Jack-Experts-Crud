import Logo from "../logo/logo.component"
import SearchBar from "../search-bar/search-bar.component"

import './header.component.css'

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <SearchBar />
    </header>
  )
}
