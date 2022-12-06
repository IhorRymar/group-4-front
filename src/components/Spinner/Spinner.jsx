import { ThreeCircles } from 'react-loader-spinner';
import baseVars from '../../stylesheet/vars';

const Spinner = () => {
  const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '100',
  };
  return (
    <ThreeCircles
      height="100"
      width="100"
      color="#4fa94d"
      wrapperStyle={style}
      wrapperClass=""
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor={baseVars.colors.incomeText}
      innerCircleColor={baseVars.colors.expensesText}
      middleCircleColor={baseVars.colors.fourthText}
    />
  );
};

export default Spinner;
