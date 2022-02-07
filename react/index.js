import ErrorPage from './components/Error/error';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import SideNav from './components/SideNav';
import SessionDialog from './components/SessionDialog/sessionDialog';

import 'what-input';

const QppStyleComponents = {
  errorPage(options) {
    return new ErrorPage(options);
  },

  footer(options) {
    return new Footer(options);
  },

  header(options) {
    return new Header(options);
  },

  sideNav(options) {
    return SideNav(options);
  },

  SessionDialog(options) {
    return new SessionDialog(options);
  },
};

export default QppStyleComponents;
