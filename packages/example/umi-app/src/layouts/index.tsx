import { Link, Outlet } from "umi";
import styles from "./index.less";
import { Button } from "antd";
import { AuthProvider } from "@/wrappers/auth";

export default function Layout() {
  return (
    <AuthProvider>
      <div className={styles.navs}>
        <ul>
          <li>
            <Link to="/">
              <Button type="primary">Home</Button>
            </Link>
          </li>
          <li>
            <Link to="/docs">
              <Button type="primary">Docs</Button>
            </Link>
          </li>

          <li>
            <Link to="/personal/personal">
              <Button type="primary">/personal/personal</Button>
            </Link>
          </li>
          <li>
            <Link to="/login">
              <Button type="primary">/login</Button>
            </Link>
          </li>
        </ul>

        <Outlet />
      </div>
    </AuthProvider>
  );
}
