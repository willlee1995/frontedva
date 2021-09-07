//import '../styles/globals.css'
import Layout from '../components/Layout';
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <Layout>
      <Component  {...pageProps} />
    </Layout>
    </MuiPickersUtilsProvider>

  )
  
}

export default MyApp
