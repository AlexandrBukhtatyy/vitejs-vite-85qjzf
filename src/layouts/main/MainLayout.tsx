import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';

export default function MainLayout(props: any) {
  return (
    <div className="layout layout--main">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Header />
      <div className="content">
        <Sidebar />
        <main>{props.children}</main>
      </div>
    </div>
  );
}
