// get dom elements
var productsContainer = document.getElementById('productsContainer');
var products = [];
var currentProducts = [];

if (localStorage.getItem('products')) {
  products = JSON.parse(localStorage.getItem('products'));
  currentProducts = products;
  readProducts(products);
} else getProducts();

function getProducts() {
  var xhr = new XMLHttpRequest();
  var url = 'https://dummyjson.com/products?limit=40';

  xhr.onload = function () {
    var arrrr = [
      {
        images: [
          'https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437106.jpg?size=626&ext=jpg&ga=GA1.2.421174700.1691837986',
        ],
      },
      {
        images: [
          'https://img.freepik.com/free-photo/new-cell-phone-colorful-background_58702-5228.jpg?w=740&t=st=1691838509~exp=1691839109~hmac=17d4175f42654348c217e099e678a8457c65b2051210b37877d0a3ce1c71f36c',
        ],
      },
      {
        images: ['https://pbs.twimg.com/media/Dr2wz4AU4AEXQeN.jpg'],
      },
      {
        images: ['https://i.ebayimg.com/images/g/l~YAAOSwH4VgS0Nb/s-l1600.jpg'],
      },
      {
        images: [
          'https://images.unsplash.com/photo-1613688270362-8b26189c0782?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
        ],
      },
      {
        images: [
          'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=726&q=80',
        ],
      },
      {
        images: [
          'https://images.unsplash.com/photo-1628744398863-1877b197f2cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        ],
      },
      {
        images: [
          'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80',
        ],
      },
      {
        images: [
          'https://images.unsplash.com/photo-1690555405171-b5aeda53b26f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
        ],
      },
      {
        images: [
          'https://i.pcmag.com/imagery/reviews/00AlZnNTe0wqKhjNcdF41GH-35.fit_scale.size_1028x578.v1577410428.jpg',
        ],
      },
      {
        images: [
          'https://hips.hearstapps.com/hmg-prod/images/perfume-oils-1551376476.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*',
        ],
      },
      {
        images: [
          'https://lilyscent.com.ng/wp-content/uploads/2021/12/IMG_E3800.jpg?v=1677361456',
        ],
      },
      {
        images: [
          'https://asanbazaar.pk/cdn/shop/products/WhatsAppImage2021-06-29at11.24.31PM_1024x1024.jpg?v=1625465534',
        ],
      },
      {
        images: [
          'https://mushkmahal.com/cdn/shop/products/5_a2c71ca1-e678-45c9-b1c3-56110ebd069b_600x_crop_center.jpg?v=1682003157',
        ],
      },
      {
        images: [
          'https://www.beautytheshop.com/imgs/productos_cosmetica/resized/680x680/3700578506009.jpg',
        ],
      },
      {
        images: [
          'https://www.byrdie.com/thmb/X7uu9EJdDKTMC0iYoDdaI5RgjK0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Web_4000-byr-primary-hyaluronic-acid-serums-jthompson-0014-16178e9b46bb4380bbc80d0ef1c5564c.jpg',
        ],
      },
      {
        images: [
          'https://i0.wp.com/taypharmacies.com/wp-content/uploads/2022/10/tee-tree-serum@2x.png?fit=1513%2C1513&ssl=1',
        ],
      },
      {
        images: ['https://i.ebayimg.com/images/g/xhgAAOSw0m9j2Pgc/s-l1600.jpg'],
      },
      {
        images: [
          'https://static.thcdn.com/images/large/webp//productimg/1600/1600/12596429-3594871019700125.jpg',
        ],
      },
      {
        images: [
          'https://livehealthy.com.hk/cdn/shop/products/john-plunkett-superfade-original-cream-60ml-creams-371_1024x1024.jpg?v=1673769499',
        ],
      },
      {
        images: [
          'https://gudmom.com/cdn/shop/products/Organic-Masoor-Dal_1.png?v=1680597634&width=1445',
        ],
      },
      {
        images: ['https://m.media-amazon.com/images/I/615YeN2l47L.jpg'],
      },
      {
        images: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI8qH3jaz560QXgIDwegFJ3Vq5FtN8oy4-mg&usqp=CAU',
        ],
      },
      {
        images: [
          'https://m.media-amazon.com/images/I/91i9rdecBvL._AC_UF1000,1000_QL80_.jpg',
        ],
      },
      {
        images: [
          'https://www.justgotochef.com/img/1557080899-Shree%20Gulab-Red%20Chilly%20Powder%20(Lal%20Mirch)-Front.jpg',
        ],
      },
      {
        images: ['https://m.media-amazon.com/images/I/71OHyVKG+RL.jpg'],
      },
      {
        images: [
          'https://i.ebayimg.com/images/g/9nkAAMXQI5tRiccx/s-l1200.webp',
        ],
      },
      {
        images: [
          'https://static-01.daraz.pk/p/578c032ad56634d77f063419379f78c4.jpg',
        ],
      },
      // {
      //   images: [
      //     'https://i.ebayimg.com/images/g/p~EAAOSwSlpkIosD/s-l1200.webp',
      //   ],
      // },
      {
        images: ['https://m.media-amazon.com/images/I/81XrGZxJWnL.jpg'],
      },
      {
        images: [
          'https://www.byndartisan.com/cdn/shop/products/KeyHolderwithLanyard_800x.jpg?v=1666847007',
        ],
      },
      {
        images: ['https://m.media-amazon.com/images/I/91lSQqwrGuL.jpg'],
      },
      {
        images: [
          'https://sc04.alicdn.com/kf/Hf74c3df11ebb4481bd8e2975fc61b9b82.jpg',
        ],
      },
      {
        images: [
          'https://m.media-amazon.com/images/I/71HaJ91PdLL._AC_UF1000,1000_QL80_.jpg',
        ],
      },
      {
        images: ['https://www.therange.co.uk/media/2/6/1690284916_12_8744.jpg'],
      },
      {
        images: [' https://m.media-amazon.com/images/I/71jcTbuAThL.jpg'],
      },
      {
        images: [
          'https://www.diadora.com/dw/image/v2/BBPK_PRD/on/demandware.static/-/Sites-diadora-master/default/dwdf44c17e/images/hi-res/102.179375_45033_00_HR.jpg?sw=1920',
        ],
      },
      {
        images: [
          'https://img-lcwaikiki.mncdn.com/mnresize/1020/1360/pim/productimages/20221/5461448/l_20221-s21739z4-fwh_a1.jpg',
        ],
      },
      {
        images: [
          'https://images.ctfassets.net/f1fikihmjtrp/4hK7AHjpLsWQE6ijlIRkVE/53d3c4b85396ac16cfdb23a48c6dd55e/44972-7013-4ww.jpg',
        ],
      },
    ];
    if (xhr.status === 200) {
      console.log(JSON.parse(xhr.response));
      data = JSON.parse(xhr.response);
      products = data.products;
      products = products.map((product, idx) => {
        return { ...product, ...arrrr[idx] };
      });
      localStorage.setItem('products', JSON.stringify(products));
      currentProducts = products;
      readProducts(products);
    } else {
      console.log('Request failed. Status: ' + xhr.status);
    }
  };
  xhr.onprogress = function () {
    readProducts();
  };

  xhr.open('GET', url);
  xhr.send();
}

function htmlProducts(products) {
  var totalString = '';
  var arr = [];

  for (var i = 0; i < products.length; i++) {
    // if (i > 5) break;
    arr.push(products[i].title);
    totalString +=
      '<div class="shopping__product" onClick="getDetails(' +
      products[i].id +
      ')" ><div class="image"><img src="' +
      products[i].images[0] +
      '" alt=""></div><div class="price"><span>$' +
      products[i].price +
      '</span></div><div class="rating"><span>' +
      products[i].rating +
      '</span></div><div class="product-info"><div class="title"><h2>' +
      products[i].title +
      '</h2></div><div class="description"><span>' +
      products[i].description +
      '</span></div><div class="action"><button onClick="addToCart(event,' +
      products[i].id +
      ')">add to cart</button></div></div></div>';
  }
  console.log('arr: ', arr);
  return totalString;
}

function readProducts(products) {
  if (!products)
    productsContainer.innerHTML = '<p style="font-size :50px">Loading</p>';
  else {
    currentProducts = products;
    productsContainer.innerHTML = htmlProducts(products);
  }
}

function filterProducts(category, products) {
  var newProducts = [];

  for (var i = 0; i < products.length; i++) {
    if (products[i].category === category) newProducts.push(products[i]);
  }

  currentProducts = newProducts;
  return newProducts;
}

function sortAscBy(sorter, products) {
  return products.sort(function (a, b) {
    return a[sorter] - b[sorter];
  });
}

function sortDescBy(sorter, products) {
  return products.sort(function (a, b) {
    return b[sorter] - a[sorter];
  });
}

function searchBy(query, products) {
  var newProducts = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].title.toLowerCase().includes(query.toLowerCase()))
      newProducts.push(products[i]);
  }
  return newProducts;
}

function getDetails(productID) {
  localStorage.setItem('current', productID);
  window.open('./details.html', '_self');
}

document.getElementById('sortOptions').addEventListener('change', function (e) {
  var value = e.target.value.split(';')[0];
  var desc = e.target.value.split(';')[1];
  desc
    ? readProducts(sortDescBy(value, currentProducts))
    : readProducts(sortAscBy(value, currentProducts));
});

document.getElementById('mySearch').addEventListener('keyup', function (e) {
  var value = e.target.value;
  readProducts(searchBy(value, products));
});
