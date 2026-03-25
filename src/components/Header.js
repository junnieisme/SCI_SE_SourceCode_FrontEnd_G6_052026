import React from 'react';
import '../styles/Header.css';
import { Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-brand">
        <div className="brand-logo">🔷</div>
        <span className="brand-name">ServiceHub</span>
      </div>
      <div className="header-search">
        <Search className="search-icon" />
        <input type="text" placeholder="Tìm kiếm dịch vụ..." className="search-input" />
      </div>
      <div className="header-actions">
        <button className="btn-link">Đăng nhập</button>
        <button className="btn-primary">Đăng ký</button>
      </div>
    </header>
  );
};

export default Header;