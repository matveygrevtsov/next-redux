import Link from "next/link";
import { useRouter } from "next/router";

import s from "./Nav.module.css";

const routes = [
  {
    title: "Главная",
    path: "/",
  },
  {
    title: "Тестовая страница",
    path: "/test",
  },
];

export function Nav() {
  const { pathname } = useRouter();

  return (
    <header className={s.root}>
      <ul className={s.links}>
        {routes.map(({ title, path }) => (
          <li key={path} className={s.linkWrapper}>
            <Link
              href={path}
              className={path === pathname ? s.linkActive : s.link}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
