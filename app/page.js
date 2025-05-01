import Featured from "./Featured";
import Level from "./level";
import Product from "./product/Product";

import SliderText from "./SliderText";
import Subscribe from "./Subscribe";



export default function Home() {
  return (
<div>
  <SliderText/>
  <Product/>
  <Featured/>
  <Level/>
  <Subscribe/>


</div>
  );
}
