import Calender from './Calender';
const mca = require('./CalenderData.json');
function App(props) {
  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
        {
          mca.map(function (Description) {
            return <Calender image={Description.Image} date={Description.Date} des={Description.Description} day={Description.Day} slogan={Description.Slogan} />
          })
        }
      </div>
    </>
  );
}

export default App;
