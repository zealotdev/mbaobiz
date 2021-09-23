import Topbar from './topBar';
import Sidebar from './sideBar';

export default function Layout({ children }) {
  return (
    <div className="bg-gray-100 text-gray-500">
      <div className="flex">
        <div className="w-40">
          <Sidebar />
        </div>
        <div className="flex-grow">
          <div className="flex-none">
            <Topbar />
          </div>
          <div className="flex-grow">{children}</div>
        </div>
      </div>
    </div>
  );
}
