import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';

export default function MainLayout(props: any) {
  return (
    <div className="layout layout--main">
      <Header />
      <div className="content">
        <Sidebar />
        <main>{props.children}</main>
      </div>
    </div>
  );
}
