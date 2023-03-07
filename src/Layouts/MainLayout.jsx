import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { Content } from './Header/Header.styled';

export const MainLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<>Loading...</>}>
        <Content>
          <Outlet />
        </Content>
      </Suspense>
      {/* <Footer /> */}
    </>
  );
};
