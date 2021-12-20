-- insert categories data
INSERT INTO categories(id, name) VALUES (1, '콜드 브루 커피'), (2, '브루드 커피'), (3, '에스프레소'), (4, '프라푸치노'), (5, '블렌디드');

--insert products data
INSERT INTO drinks(id, korean_name, english_name, drink_info, is_new, category_id)
VALUES
(1, '토피 넛 콜드 브루', 'Toffee Nut Cold Brew', '콜드 브루로 깔끔하게 즐기는 토피 넛 음료!',1, 1),
(2, '나이트로 바닐라 크림', 'Nitro Vanilla Cream', '부드러운 목넘김의 나이트로 커피와 바닐라 크림의 매력을 한번에 느껴보세요!', 0, 1),
(3, '아이스 커피', 'Iced Coffee', '깔끔하고 상큼함이 특징인 시원한 아이스 커피', 0, 2),
(4, '오늘의 커피', 'Brewed Coffee', '신선하게 브루드(Brewed)되어 원두의 다양함이 살아있는 커피', 0, 2),
(5, '아이스 토피 넛 라떼', 'Iced Toffee Nut Latte', '스타벅스의 겨울 시그니처 음료 더 이상의 다른 설명은 필요 없는 스타벅스 정통의 오리지널 토피 넛 라떼', 1, 3),
(6, '아이스 홀리데이 돌체 쿠키 라떼', 'Iced Holiday Dolce Cookie Latte', '블론드 에스프레소의 부드러움에 돌체 쿠키 소스와 크리스마스에 어울리는 쿠키 토핑으로 마음이 따뜻해지는 음료', 1 ,3),
(7, '토피 넛 프라푸치노', 'Toffee Nut Frappuccino', '스타벅스의 겨울 시그니처 음료 더 이상의 다른 설명은 필요 없는 스타벅스 정통의 오리지널 토피 넛 프라푸치노', 1, 4),
(8, '더블 에스프레소 칩 프라푸치노', 'Double Espresso Chip Frappuccino', '리스트레토 에스프레소 2샷과 에스프레소 칩, 하프앤하프가 진하게 어우러진 커피의 기본에 충실한 프라푸치노', 0, 4),
(9, '스노우 민트 초콜릿 블렌디드', 'Snow Mint Chocolate Blended', '유기농 말차와 화이트 초콜릿 그리고 민트 초콜릿의 새로운 조합으로 새롭게 즐기는 크리스마스 블렌디드 음료', 1, 5),
(10, '딸기 딜라이트 요거트 블렌디드', 'Strwberry Delight Yogurt Blended', '유산균이 살아있는 리얼 요거트와 풍성한 딸기 과육이 더욱 상큼하게 어우러진 과일 요거트 블렌디드', 0, 5);