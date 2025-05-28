import { useLocation, useNavigate } from "react-router-dom"

const Header = () => {
  const links = [
    {name: 'Portfolio', path: '/'},
    {name: 'Blog', path: '/blog'}
  ]

  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="py-5 flex justify-end lg:px-0 px-3">
      {links.map((link) => {
        if (link.path === pathname) return (<p onClick={() => navigate(link.path)} className="underline cursor-pointer underline-offset-8 text-blue-400 pl-5">{link.name}</p>)
        else return (<p onClick={() => navigate(link.path)} className="pl-5 cursor-pointer">{link.name}</p>)
      })}
    </div>
  )
}

export default Header