const coffees = [
  {
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
  },
];

const sendList = (req, res) => {
  res.json({ coffees });
};

const createCoffee = (req, res) => {
  const { koreanName, englishName, imageUrl, categoryId } = req.body;

  // 1. 클라이언트로부터 받은 데이터로 새로운 커피 데이터 생성
  const coffee = {
    // 받은 데이터 묶음에 uuid 추가하기 (각 데이터의 고유 번호)
    // id: uuid.uuid(),
    koreanName: koreanName,
    englishName: englishName,
    imageUrl: imageUrl,
    categoryId: categoryId,
  };

  // 2. 생성된 커피 데이터를 coffees 빈 배열에 담기
  coffees[0].push(coffee);

  // 3. 새로 생성된 이 커피 데이터를 status code 201 Created와 같이 클라이언트에게 반환하기
  res.status(201).json({ data: coffees });
};

const updateCoffee = (req, res) => {
  const { id } = req.body;
  const coffee = coffees[0]["data"].filter((coffee) => coffee["id"] === id);
  coffee[0]["englishName"] = "newCoffee";
  res.json({ data: coffees });
};

const deleteCoffee = (req, res) => {
  const { id } = req.body;
  for (let i = 0; i < coffees[0]["data"].length; i++) {
    const coffee = coffees[0]["data"][i];
    if (coffee["id"] === id) {
      for (let key in coffee) {
        delete coffee[key];
      }
      console.log("coffee", coffee);
      break;
    }
  }
  res.status(204).json({ data: coffees });
};

module.exports = { sendList, createCoffee, updateCoffee, deleteCoffee };
