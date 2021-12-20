const list = {
  data: [
    {
      id: 1,
      koreanName: "나이트로 바닐라크림",
      englishName: "Nitro Vanilla Cream",
      category: "콜드 브루 커피",
      categoryId: 1,
      imageUrl:
        "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745467.jpg",
    },
    {
      id: 2,
      koreanName: "아이스 카페 아메리카노",
      englishName: "Ice Cafe Americano",
      category: "에스프레소",
      categoryId: 3,
      imageUrl:
        "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[110563]_20210426095937808.jpg",
    },
    {
      id: 3,
      koreanName: "돌체 콜드 브루",
      englishName: "Dolce Cold Brew",
      category: "콜드 브루 커피",
      categoryId: 1,
      imageUrl:
        "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002081]_20210415133656839.jpg",
    },
    {
      id: 4,
      koreanName: "콜드 브루 몰트",
      englishName: "Cold Brew Malt",
      category: "콜드 브루 커피",
      categoryId: 1,
      imageUrl:
        "https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001636]_20210225093600536.jpg",
    },
    {
      id: 5,
      koreanName: "에스프레소 콘 파나",
      englishName: "Espresso Con Panna",
      category: "에스프레소",
      categoryId: 3,
      imageUrl:
        "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[30]_20210415144252244.jpg",
    },
  ],
};

const getProducts = (req, res) => {
  res.json(list);
};

const createProduct = (req, res) => {
  const { id, koreanName, englishName, imageUrl, categoryId } = req.body;
  const product = {
    id: id,
    koreanName: koreanName,
    englishName: englishName,
    imageUrl: imageUrl,
    categoryId: categoryId,
  };
  list.data.push(product);
  res.json(list);
  res.status(201);
};

const updateProduct = (req, res) => {
  const { id } = req.body;
  const update = data.filter((e) => e.id === id);
  update.englishName = "newCoffee";
  res.json(list);
};

const deleteProduct = (req, res) => {
  const { id } = req.body;
  const del = list.data.find((e) => e.id === parseInt(id));
  const index = list.data.indexOf(del);
  list.data.splice(index, 1);
  res.json(list);
};

module.exports = { getProducts, createProduct, updateProduct, deleteProduct };
