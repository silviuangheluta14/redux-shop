import mochaOvercoat from './assets/mocha-overcoat.jpg';
import mochaOvercoat1 from './assets/mocha-overcoat1.jpg'
import mochaOvercoat2 from './assets/mocha-overcoat2.jpg'
 
import dreamGown from './assets/dream-gown.jpg';
import dreamGown1 from './assets/dream-gown1.jpg';
import dreamGown2 from './assets/dream-gown2.jpg';

import menJacket from './assets/men-jacket.jpg';
import menJacket1 from './assets/men-jacket1.jpg';
import menJacket2 from './assets/men-jacket2.jpg';

import menJumper from './assets/men-jumper.jpg';
import menJumper1 from './assets/men-jumper1.jpg';
import menJumper2 from './assets/men-jumper2.jpg';

import womanJacket from './assets/woman-jacket.png';
import womanJacket1 from './assets/woman-jacket1.png';
import womanJacket2 from './assets/woman-jacket2.png';

import menBag from './assets/bag.png';

export const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    image: mochaOvercoat,
    images: [mochaOvercoat, mochaOvercoat1, mochaOvercoat2],
    title: 'DOUBLE-BREASTED WOOL BLEND COAT',
    price: 129.99,
    description:
      'Relaxed fit coat made from wool blend fabric. Peaked lapel collar and long sleeves. Welt pockets at the hip and an interior pocket detail. Adjustable waist with a self-fabric belt. Hem with a back vent. Double-breasted front button closure.',
  },
  {
    id: 'p2',
    image: dreamGown,
    images: [dreamGown, dreamGown1, dreamGown2],
    title: 'ZW LIMITED EDITION COAT DRESS',
    price: 189.99,
    description:
      'Coat dress with lapel collar and long sleeves. Tonal interior lining. Hidden in-seam zip closure at back.'
  },

  {
    id: 'p3',
    image: menJacket,
    images: [menJacket, menJacket1, menJacket2],
    title: 'DOUBLE-FACED FAUX LEATHER JACKET',
    price: 149.99,
    description:
      'Regular fit jacket made of faux leather fabric with a contrasting fleece interior. Lapel collar with tab detail and long sleeves. Welt pockets at hip. Ribbed finishes. Front zip closure.',
  },
  {
    id: 'p4',
    image: menJumper,
    images: [menJumper, menJumper1, menJumper2],
    title: 'RIBBED TEXTURED JUMPER',
    price: 149.99,
    description:
    'Relaxed fit knit jumper in a ribbed texture. Round neck and long sleeves. Ribbed trim.',
    },
    {
    id: 'p5',
    image: womanJacket,
    images: [womanJacket, womanJacket1, womanJacket2],
    title: 'BOMBER JACKET ZW COLLECTION',
    price: 199.99,
    description:
    'Bomber jacket with a lapel collar and faux fur trim. Long sleeves. Gathered hem. Front closure.',
    },
    {
    id: 'p6',
    image: menBag,
    title: 'LIMITED EDITION LEATHER SHOPPER BAG',
    price: 279.99,
    description:
    'Shopper bag made of leather with a split suede finish. Main compartment with magnetic closure. The interior features a zip pocket. Two leather hand straps and an adjustable and removable leather shoulder strap.'
    }
];
