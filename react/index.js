import ErrorPage from './components/Error/error';
import Footer from './components/Footer/footer';

import 'what-input';

const QppStyleComponents = {
  errorPage(options) {
    return new ErrorPage(options);
  },

  footer(options) {
    return new Footer(options);
  },

};

export default QppStyleComponents;
