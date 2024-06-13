import { Link, Outlet } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <div className='about-btns'>
        <Link to='employee'>Çalışanlar Hakkında</Link>
        <Link to='company'>Şirket Hakkında</Link>
      </div>
      <div style={{ paddingTop: '25px' }}>
        <Outlet />
      </div>
    </div>
  );
}
