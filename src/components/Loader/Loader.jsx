import { Hourglass } from 'react-loader-spinner'
import { LodeWrapper} from '../Loader/Loader.styled';



export const Loader = () => {
    return (

        <LodeWrapper>
        <Hourglass
  visible={true}
  height="80"
  width="81"
  ariaLabel="hourglass-loading"
  wrapperStyle={{}}
  wrapperClass=""
  colors={['#306cce', '#72a1ed']}
/>
    </LodeWrapper>
    );
};