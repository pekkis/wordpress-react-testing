import wpapi from 'wpapi';

let conn;

const connect = () => {

  if (conn) {
    return conn;
  }

  conn = wpapi.discover(process.env.REACT_APP_WORDPRESS);
  return conn;
}

export default connect;
