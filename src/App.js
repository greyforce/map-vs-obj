import { useEffect, useState } from 'react';
import './App.css';
import { perfTests } from './perf-tests/index';

function App() {
  const [isTesting, setIsTesting] = useState(true);
  const [results, setResults] = useState({});

  useEffect(() => {
    const testResults = perfTests();
    setIsTesting(false);
    console.log(testResults);
    setResults(testResults);
  }, []);

  return (
    <div className="app">
      { isTesting ? (
        <div>Please wait, tests are running...</div>
      ) : (
        <table className="table">
          <tbody>
            { Object.keys(results).map(groupKey => {
              return (
                <>
                  <tr className="header-row"><td colSpan="2">{ groupKey }</td></tr>
                  { Object.keys(results[groupKey]).map(key => (
                    <tr>
                      <td>{ key }</td>
                      <td>{ results[groupKey][key] ? `${ results[groupKey][key] }ms` : '-' }</td>
                    </tr>
                  )) }
                <tr className="footer-row"><td colSpan="2"></td></tr>
                </>
              );
            }) }
          </tbody>
        </table>
      ) }
    </div>
  );
}

export default App;
