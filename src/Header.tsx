import './Header.css';
import { CgMenuGridR } from "react-icons/cg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <div>
          <CgMenuGridR />
        </div>
        <div>
          <h1>title</h1>
        </div>
        <div>
          <label>sss</label>
        </div>
        <div>
          <label>sss</label>
        </div>
      </div>
      <div className="header-right">
        <div>Header</div>
      </div>
    </div>
  );
};

export default Header;
