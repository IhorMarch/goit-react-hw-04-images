import { LoadBtn} from '../Button/Button.styled';
export const Button = ({ onClick }) => {

  return (
   <LoadBtn type="submit" onClick={onClick} >Load more</LoadBtn>
  );
};

