import {db} from './firebase'
import { getFirestore, collection, getDocs, getDoc } from "firebase/firestore";

const Productdetail = [];
const collectionReference = collection(db, "Productdetail"); // Use a more specific name for the product collection.

(async () => {
    const querySnapshot = await getDocs(collectionReference);
    querySnapshot.docs.forEach((doc) => {
      const productData = doc.data();
      const { id, Title, Cat, Price, Img } = productData;
      const product = { id, Title, Cat, Price, Img };
      Productdetail.push(product);
    });

    // Wait until the Productdetail array is loaded before rendering the products.
    await Promise.all([Productdetail]);

    // Render the products.
    // ...
})();





  
  




















    
/*const Productdetail =
[
    {
        id:1,
        Title:"Long knitted dress",
        Cat: 'Dresses',
        Price: '200',
        Img: './img/longknitteddress.jpg'
    },
    {
        id:2,
        Title:"Strapless faux leather dress",
        Cat: 'Dresses',
        Price: '150',
        Img: './img/leatherdress.webp'
    },
    {
        id:3,
        Title:"Simple yellow T-shirt",
        Cat: 'Shirts',
        Price: '90',
        Img: './img/yellowtshirt.jpg'
    },
    {
        id:4,
        Title:"Ripped blue jeans",
        Cat: 'Jeans',
        Price: '140',
        Img: './img/bluejeans.jpg'
    },
    {
        id:5,
        Title:"Comfy training shoes",
        Cat: 'Shoes',
        Price: '300',
        Img: './img/shoes.jpg'
    },
    {
        id:6,
        Title:"Summer beach hat",
        Cat: 'Hats',
        Price: '50',
        Img: './img/summerhat.jpg'
    },
]*/

export default Productdetail;