import React from 'react';

function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.text}>Voe alto, seja leve  🎈</h1>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'black',
    overflow: 'hidden',
    margin: 0,
    padding: 0,
  },
  text: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '36px',
    color: 'white',
    textAlign: 'center',
  },
};

export default Home;