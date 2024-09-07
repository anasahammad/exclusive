import { Hourglass } from "react-loader-spinner";

interface LoadingSpinnerProps {
  smallHeight?: boolean;  // Changed to boolean, and made it optional
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ smallHeight = false }) => {
  return (
    <div
      className={`${smallHeight ? 'h-[250px]' : 'h-[70vh]'}
      flex 
      flex-col 
      justify-center 
      items-center`}
    >
      <Hourglass visible={true}
  height="80"
  width="80"
  ariaLabel="hourglass-loading"
  wrapperStyle={{}}
  wrapperClass=""
  colors={['#306cce', '#72a1ed']} /> 
    </div>
  );
};

export default LoadingSpinner;
