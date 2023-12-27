import { MyCarousel } from '../components/Carousel/Carousel';
import { ItemList } from '../components/ItemList/ItemList';

const HomeScreen = () => {
  return (
    <div className="mb-20">
      <MyCarousel/>
      <ItemList/>
    </div>
  );
}

export default HomeScreen