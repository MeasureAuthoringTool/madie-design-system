import ErrorPage from './components/Error/error';
import Footer from './components/Footer/footer';
import SessionDialog from './components/SessionDialog/sessionDialog';

import 'what-input';

const QppStyleComponents = {
  errorPage(options) {
    return new ErrorPage(options);
  },

  footer(options) {
    return new Footer(options);
  },

  SessionDialog(options) {
    return new SessionDialog(options);
  },
};

export default QppStyleComponents;
