'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "2d7c29aa9630f0bba5ee030d9ae22901",
"index.html": "84dae45ad8d441cf2770fe78400ae4f9",
"/": "84dae45ad8d441cf2770fe78400ae4f9",
"main.dart.js": "0417519aa46cf0ff10f9a833c667487a",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "bf64b14a583891cecbb9dd8463621eb9",
"assets/individual_notes/velocity_115/str_5/str5_fr20_ntf4.mp3": "cf428e131d0842fd4d823304e17d35c1",
"assets/individual_notes/velocity_115/str_5/str5_fr0_nta2.mp3": "f020887ce77f3423ad9671da8001e0a2",
"assets/individual_notes/velocity_115/str_5/str5_fr12_nta3.mp3": "29db5065f622157ded650e6b89953124",
"assets/individual_notes/velocity_115/str_5/str5_fr4_ntcsharp3.mp3": "1d824b75068fe505297bfb187c4601f1",
"assets/individual_notes/velocity_115/str_5/str5_fr5_ntd3.mp3": "f0dfd78e19f347ff7cbf83b696ba4314",
"assets/individual_notes/velocity_115/str_5/str5_fr11_ntgsharp3.mp3": "c74300df1ecee24ab87718c27b578167",
"assets/individual_notes/velocity_115/str_5/str5_fr3_ntc3.mp3": "ec834764bd0dd6916afadff725710914",
"assets/individual_notes/velocity_115/str_5/str5_fr1_ntasharp2.mp3": "f6416784ab2f73b04f5ad2b310565757",
"assets/individual_notes/velocity_115/str_5/str5_fr2_ntb2.mp3": "283badf3cc64eee0e5ee0ee79a79d7cb",
"assets/individual_notes/velocity_115/str_5/str5_fr21_ntfsharp4.mp3": "9526fa24f8ae726faf21f647351a7574",
"assets/individual_notes/velocity_115/str_5/str5_fr17_ntd4.mp3": "9e19a4e70163b0e6d04240984ab9f37d",
"assets/individual_notes/velocity_115/str_5/str5_fr19_nte4.mp3": "6f44e9870322d546672089972ffbd931",
"assets/individual_notes/velocity_115/str_5/str5_fr6_ntdsharp3.mp3": "bb736a8027c5b81818f0e0279d9841cc",
"assets/individual_notes/velocity_115/str_5/str5_fr22_ntg4.mp3": "e6c25ddb2a45007810de1945d759a599",
"assets/individual_notes/velocity_115/str_5/str5_fr9_ntfsharp3.mp3": "cc64bd61b2b04af7a37c12fa83592e17",
"assets/individual_notes/velocity_115/str_5/str5_fr13_ntasharp3.mp3": "7a1c98a8cd9ffad7e8839dd47bd8ead4",
"assets/individual_notes/velocity_115/str_5/str5_fr15_ntc4.mp3": "f6662b2dfe972b36203c0a9a0f02ac7e",
"assets/individual_notes/velocity_115/str_5/str5_fr14_ntb3.mp3": "0d4c7f8ddd541755172c1110cbdc84b9",
"assets/individual_notes/velocity_115/str_5/str5_fr10_ntg3.mp3": "496cde909e02be804eba30110c9f038d",
"assets/individual_notes/velocity_115/str_5/str5_fr7_nte3.mp3": "1cc50099bd489a6e4076e78d68f10033",
"assets/individual_notes/velocity_115/str_5/str5_fr16_ntcsharp4.mp3": "e40d58105e1100c1ca918e478a2ea2aa",
"assets/individual_notes/velocity_115/str_5/str5_fr23_ntgsharp4.mp3": "c2cc29588e6dbb5d2712c581fa2a9130",
"assets/individual_notes/velocity_115/str_5/str5_fr8_ntf3.mp3": "727d164b4029521b3831664fc63c734a",
"assets/individual_notes/velocity_115/str_5/str5_fr18_ntdsharp4.mp3": "e6f38e820cba8456ed498ed78be7c93c",
"assets/individual_notes/velocity_115/str_2/str2_fr6_ntf4.mp3": "66ded8a0963b76ff31a48fe6c47c27a4",
"assets/individual_notes/velocity_115/str_2/str2_fr19_ntfsharp5.mp3": "a2099d80ab653eb26991160dfaf2ef55",
"assets/individual_notes/velocity_115/str_2/str2_fr3_ntd4.mp3": "7279fae646d30c5cb636bc2d8b07fe94",
"assets/individual_notes/velocity_115/str_2/str2_fr20_ntg5.mp3": "d0c7c9e88513376c3fb4109b2eddcb44",
"assets/individual_notes/velocity_115/str_2/str2_fr16_ntdsharp5.mp3": "a5e07e06fbf52fecaef6c35c60d1b877",
"assets/individual_notes/velocity_115/str_2/str2_fr4_ntdsharp4.mp3": "716faa12cb471b253ddf3914ff381c36",
"assets/individual_notes/velocity_115/str_2/str2_fr5_nte4.mp3": "2cb531704ee9afba806d4aa4b55b970d",
"assets/individual_notes/velocity_115/str_2/str2_fr18_ntf5.mp3": "094fb3d1793df97e47d5670271ccaafc",
"assets/individual_notes/velocity_115/str_2/str2_fr17_nte5.mp3": "0967b87958ba1a1cd3d0eae0cb1ced8a",
"assets/individual_notes/velocity_115/str_2/str2_fr10_nta4.mp3": "442f39d62817d07463e462d0e0613ca4",
"assets/individual_notes/velocity_115/str_2/str2_fr2_ntcsharp4.mp3": "c351fe3798a271f93bc49afd3778ea73",
"assets/individual_notes/velocity_115/str_2/str2_fr7_ntfsharp4.mp3": "a5662101a46e9a4b33528ae40472889d",
"assets/individual_notes/velocity_115/str_2/str2_fr9_ntgsharp4.mp3": "27259f74eb9cab90b7727dbcade2c412",
"assets/individual_notes/velocity_115/str_2/str2_fr21_ntgsharp5.mp3": "4e5c1d0b5e6f87adf104b1e102ef9bef",
"assets/individual_notes/velocity_115/str_2/str2_fr14_ntcsharp5.mp3": "536d4336b5b3fb6fe0c1c4716d16c701",
"assets/individual_notes/velocity_115/str_2/str2_fr1_ntc4.mp3": "3280a4ebc3757038699198dff26628a2",
"assets/individual_notes/velocity_115/str_2/str2_fr12_ntb4.mp3": "e41060e3a597ececea22f709ac192cce",
"assets/individual_notes/velocity_115/str_2/str2_fr11_ntasharp4.mp3": "e33767dfc32008e8edef4e1bffce4a2d",
"assets/individual_notes/velocity_115/str_2/str2_fr0_ntb3.mp3": "548e89fa52d77f930e81260f8cb178c5",
"assets/individual_notes/velocity_115/str_2/str2_fr15_ntd5.mp3": "6718f2210836a36c5a508c5abb5a7be8",
"assets/individual_notes/velocity_115/str_2/str2_fr13_ntc5.mp3": "39a03d5d3b1c54b941c5124388ec37c4",
"assets/individual_notes/velocity_115/str_2/str2_fr8_ntg4.mp3": "c5ae011b53e39fb51d9aec54ecde3fa4",
"assets/individual_notes/velocity_115/str_3/str3_fr1_ntgsharp3.mp3": "e40717d9cd38e13335cb9ebb11e13495",
"assets/individual_notes/velocity_115/str_3/str3_fr10_ntf4.mp3": "a25e4c01a3e8795be8c2ab0dceea311e",
"assets/individual_notes/velocity_115/str_3/str3_fr9_nte4.mp3": "8098cd1f476ac8fab6802fd3d282d62e",
"assets/individual_notes/velocity_115/str_3/str3_fr4_ntb3.mp3": "c39b757461f4c8ba23e860dd09c2972f",
"assets/individual_notes/velocity_115/str_3/str3_fr15_ntasharp4.mp3": "9d8c8fec12a18539114ad047af029df8",
"assets/individual_notes/velocity_115/str_3/str3_fr5_ntc4.mp3": "e8cb11693379ad2a45058bcb0408a74d",
"assets/individual_notes/velocity_115/str_3/str3_fr21_nte5.mp3": "23757dea4597fe76f331f3d958c93412",
"assets/individual_notes/velocity_115/str_3/str3_fr11_ntfsharp4.mp3": "f018b85b51dbb0f3cec63cecf61d151f",
"assets/individual_notes/velocity_115/str_3/str3_fr0_ntg3.mp3": "53a77007b5eb5e51fc6d1c37ab5561b7",
"assets/individual_notes/velocity_115/str_3/str3_fr19_ntd5.mp3": "923c34bb585b51ad877c06d25259bcb8",
"assets/individual_notes/velocity_115/str_3/str3_fr20_ntdsharp5.mp3": "b3dd703a5bdff7a4556bc39423121979",
"assets/individual_notes/velocity_115/str_3/str3_fr22_ntf5.mp3": "97c2cc4d52ddce72ef4dc5ff46d25722",
"assets/individual_notes/velocity_115/str_3/str3_fr12_ntg4.mp3": "f1147b251a2f7d4b6cec5977950eccf4",
"assets/individual_notes/velocity_115/str_3/str3_fr8_ntdsharp4.mp3": "9b2036ed40dd5bee1c2c4c01eb58cef0",
"assets/individual_notes/velocity_115/str_3/str3_fr14_nta4.mp3": "6394abb7ed26b99dfc01a56ea08e2535",
"assets/individual_notes/velocity_115/str_3/str3_fr6_ntcsharp4.mp3": "3a5fcc279e7f3714ba91fbaf2c1a1b50",
"assets/individual_notes/velocity_115/str_3/str3_fr2_nta3.mp3": "98b03e0da254ec581f5925b744d931dd",
"assets/individual_notes/velocity_115/str_3/str3_fr17_ntc5.mp3": "eeca144e2b38cca58958c84b1fa877f6",
"assets/individual_notes/velocity_115/str_3/str3_fr13_ntgsharp4.mp3": "5810c94f8a4c9e00a19667436050a140",
"assets/individual_notes/velocity_115/str_3/str3_fr23_ntfsharp5.mp3": "3a4cef8439a4385c6b2231d162fd7762",
"assets/individual_notes/velocity_115/str_3/str3_fr7_ntd4.mp3": "9b3075388dec9dfa4521291b0ab4fe7a",
"assets/individual_notes/velocity_115/str_3/str3_fr18_ntcsharp5.mp3": "c9793dc5d818395142c4f0fb286c5e51",
"assets/individual_notes/velocity_115/str_3/str3_fr16_ntb4.mp3": "14b47e1549a85cfac6cbf8155732ff4b",
"assets/individual_notes/velocity_115/str_3/str3_fr3_ntasharp3.mp3": "4a8047b55fa43aaadf55793c936e080a",
"assets/individual_notes/velocity_115/str_4/str4_fr14_nte4.mp3": "7e9f0b2518252dd89dacf62d87a35835",
"assets/individual_notes/velocity_115/str_4/str4_fr20_ntasharp4.mp3": "23cb073017ad3298e4f8efba99daff67",
"assets/individual_notes/velocity_115/str_4/str4_fr2_nte3.mp3": "13adff452b2147ba432f90d7bd893051",
"assets/individual_notes/velocity_115/str_4/str4_fr11_ntcsharp4.mp3": "3bd625068ab408c9cc0b606411aa6824",
"assets/individual_notes/velocity_115/str_4/str4_fr8_ntasharp3.mp3": "70e1672bae95826d45777d39e0b9ccc7",
"assets/individual_notes/velocity_115/str_4/str4_fr12_ntd4.mp3": "4fa3e2974341368775836dd0732eaf69",
"assets/individual_notes/velocity_115/str_4/str4_fr9_ntb3.mp3": "cb9a4d53a261163f6608c6778d8696a2",
"assets/individual_notes/velocity_115/str_4/str4_fr6_ntgsharp3.mp3": "86c66f4d9767692eeeaffd3ffeff73eb",
"assets/individual_notes/velocity_115/str_4/str4_fr21_ntb4.mp3": "63c80fa91a0cab6fe2784905b689aac9",
"assets/individual_notes/velocity_115/str_4/str4_fr17_ntg4.mp3": "cc00968d3913dc1ef7e22443e2095ab4",
"assets/individual_notes/velocity_115/str_4/str4_fr7_nta3.mp3": "1dba9afbc4e9641e03ee8bc830cc4392",
"assets/individual_notes/velocity_115/str_4/str4_fr13_ntdsharp4.mp3": "d5d5b791966e342db98703439857a4e7",
"assets/individual_notes/velocity_115/str_4/str4_fr5_ntg3.mp3": "b21938b7b815c5d5a7df89f16a48615f",
"assets/individual_notes/velocity_115/str_4/str4_fr1_ntdsharp3.mp3": "1bd147a3455fe5ba127c0db62355ff89",
"assets/individual_notes/velocity_115/str_4/str4_fr10_ntc4.mp3": "7b83e583dfdfa88bb1d6b53f754cc981",
"assets/individual_notes/velocity_115/str_4/str4_fr0_ntd3.mp3": "c0700777a91af5c3b123f2b7d5bf7d93",
"assets/individual_notes/velocity_115/str_4/str4_fr23_ntcsharp5.mp3": "2fd7701a9fcf6e2a083bc81cc308124a",
"assets/individual_notes/velocity_115/str_4/str4_fr3_ntf3.mp3": "aa8defb5123a69ff4dc1fae1286019e0",
"assets/individual_notes/velocity_115/str_4/str4_fr18_ntgsharp4.mp3": "d8e653701180858fec9a27f835256c11",
"assets/individual_notes/velocity_115/str_4/str4_fr22_ntc5.mp3": "24cd770db1f6126dbe03f9aa2135a979",
"assets/individual_notes/velocity_115/str_4/str4_fr15_ntf4.mp3": "aaf6c56f54900cc04f5dd813980394a2",
"assets/individual_notes/velocity_115/str_4/str4_fr16_ntfsharp4.mp3": "b6e954ea5dfbdda933f79a51b78a5a82",
"assets/individual_notes/velocity_115/str_4/str4_fr4_ntfsharp3.mp3": "b11ba09697f8d0103bc02ab1e9e70217",
"assets/individual_notes/velocity_115/str_4/str4_fr19_nta4.mp3": "236a6a1b31f03aac215022447068be07",
"assets/individual_notes/velocity_115/str_1/str1_fr10_ntd5.mp3": "ad1b4ccb272416438eeb16455e1edf7b",
"assets/individual_notes/velocity_115/str_1/str1_fr2_ntfsharp4.mp3": "8b8c32f351814b8bd6c24fb4d1873fe0",
"assets/individual_notes/velocity_115/str_1/str1_fr5_nta4.mp3": "2143bfa89686495574647697b69ad9da",
"assets/individual_notes/velocity_115/str_1/str1_fr11_ntdsharp5.mp3": "3079a16a99d5201642e29f7e86a1bdde",
"assets/individual_notes/velocity_115/str_1/str1_fr3_ntg4.mp3": "255a2aa1efeb4614f71c5a3c0f6f2909",
"assets/individual_notes/velocity_115/str_1/str1_fr15_ntg5.mp3": "efb87508ed598b2c7f687a1ebccc6407",
"assets/individual_notes/velocity_115/str_1/str1_fr7_ntb4.mp3": "d4e7a8dec9180084458a9382dbaf07ac",
"assets/individual_notes/velocity_115/str_1/str1_fr0_nte4.mp3": "9e11dd509bb248918d3165b54090a994",
"assets/individual_notes/velocity_115/str_1/str1_fr9_ntcsharp5.mp3": "f998e8b6f7430cd517f015c5195c98cb",
"assets/individual_notes/velocity_115/str_1/str1_fr13_ntf5.mp3": "e201f8e226cec92d2cf9e17c7e8e4fc4",
"assets/individual_notes/velocity_115/str_1/str1_fr14_ntfsharp5.mp3": "517f1a2d3826d9facb9fafaff679321f",
"assets/individual_notes/velocity_115/str_1/str1_fr6_ntasharp4.mp3": "94ad43e0039ea4181c3d3151c9cdc3fa",
"assets/individual_notes/velocity_115/str_1/str1_fr4_ntgsharp4.mp3": "50cccb56a176ddd5bee9770f45ddafea",
"assets/individual_notes/velocity_115/str_1/str1_fr12_nte5.mp3": "a8c05d40e67ac953b2505b0d12b348c8",
"assets/individual_notes/velocity_115/str_1/str1_fr8_ntc5.mp3": "486b7e6550d43031d82ddb98c02a2c42",
"assets/individual_notes/velocity_115/str_1/str1_fr1_ntf4.mp3": "761b49458c7c30d1379f4ab75748e70b",
"assets/individual_notes/velocity_115/str_1/str1_fr16_ntgsharp5.mp3": "33fb3c8e2cec6d41ebb8e93008309a40",
"assets/individual_notes/velocity_115/str_6/str6_fr3_ntg2.mp3": "8dd132eba357ae4f4ff4d30b106f8da4",
"assets/individual_notes/velocity_115/str_6/str6_fr6_ntasharp2.mp3": "dcd46b759a56eb214cc7862736f67f43",
"assets/individual_notes/velocity_115/str_6/str6_fr10_ntd3.mp3": "e1f9c7cad275253d0c7f49222010ace4",
"assets/individual_notes/velocity_115/str_6/str6_fr18_ntasharp3.mp3": "d520af84753cb6a3e46590e3ae2f0349",
"assets/individual_notes/velocity_115/str_6/str6_fr9_ntcsharp3.mp3": "8e59bf0d9f98cd6f6cd3ca9d8bf3d360",
"assets/individual_notes/velocity_115/str_6/str6_fr23_ntdsharp4.mp3": "cca4221b1607b8be6485912f5f283aeb",
"assets/individual_notes/velocity_115/str_6/str6_fr15_ntg3.mp3": "2406006b03d684691b7540d64ec6ac74",
"assets/individual_notes/velocity_115/str_6/str6_fr5_nta2.mp3": "63fa7ae28e6bdb04c2d02c7f4eee0778",
"assets/individual_notes/velocity_115/str_6/str6_fr16_ntgsharp3.mp3": "f6622d6e82647c840cf15ca71dd7da15",
"assets/individual_notes/velocity_115/str_6/str6_fr22_ntd4.mp3": "e45ed6c9e7d48b4b0a47601950b2df8d",
"assets/individual_notes/velocity_115/str_6/str6_fr2_ntfsharp2.mp3": "b73c4572470113fcd83eef737df5b7f8",
"assets/individual_notes/velocity_115/str_6/str6_fr7_ntb2.mp3": "7b6415faa8ef763bcafc2bad2c0406b7",
"assets/individual_notes/velocity_115/str_6/str6_fr13_ntf3.mp3": "196a6f3c239f99949ed253ac28fc5029",
"assets/individual_notes/velocity_115/str_6/str6_fr0_nte2.mp3": "4e81e73024b176e804b086c7cb867022",
"assets/individual_notes/velocity_115/str_6/str6_fr8_ntc3.mp3": "45a28ac48819caff75a58609950fa7b5",
"assets/individual_notes/velocity_115/str_6/str6_fr20_ntc4.mp3": "8fe9827bbb02da5e02e2118b5da4d754",
"assets/individual_notes/velocity_115/str_6/str6_fr12_nte3.mp3": "0cd1b36ceb89778a9917d8df71aee74d",
"assets/individual_notes/velocity_115/str_6/str6_fr1_ntf2.mp3": "e0eeca098ae0e8c684eef6c24b48dfb8",
"assets/individual_notes/velocity_115/str_6/str6_fr11_ntdsharp3.mp3": "1155f3454a41ca92b2bb68cfcdeb8bc7",
"assets/individual_notes/velocity_115/str_6/str6_fr21_ntcsharp4.mp3": "56b01e993bc40574a01d50f87e930a63",
"assets/individual_notes/velocity_115/str_6/str6_fr17_nta3.mp3": "c465024eabbe656c7cc02e497153d636",
"assets/individual_notes/velocity_115/str_6/str6_fr14_ntfsharp3.mp3": "539f6fb3d7906e3e3d028428bbce2cea",
"assets/individual_notes/velocity_115/str_6/str6_fr4_ntgsharp2.mp3": "78a419793d38d6666859604438f578dd",
"assets/individual_notes/velocity_115/str_6/str6_fr19_ntb3.mp3": "3305cd2b929db1fd247ecf53713ccdb7",
"assets/individual_notes/velocity_95/str_5/str5_fr20_ntf4.mp3": "8ebc5bfaa9247021335cbd07b62d2a1f",
"assets/individual_notes/velocity_95/str_5/str5_fr0_nta2.mp3": "4e76ab653d26ff4ea7a112fd0367d3a2",
"assets/individual_notes/velocity_95/str_5/str5_fr12_nta3.mp3": "4b2f6a77ca1f5b449129e93338f83e87",
"assets/individual_notes/velocity_95/str_5/str5_fr4_ntcsharp3.mp3": "644e06810c23e7a60385afe9c0722a91",
"assets/individual_notes/velocity_95/str_5/str5_fr5_ntd3.mp3": "3fe1057b65dd7ed6a83c2f02b7a3c635",
"assets/individual_notes/velocity_95/str_5/str5_fr11_ntgsharp3.mp3": "c25e972871f2f1ab17ee177298b03d02",
"assets/individual_notes/velocity_95/str_5/str5_fr3_ntc3.mp3": "1c5eb9cd8e4d0a1cbcd3d7b47250ce3f",
"assets/individual_notes/velocity_95/str_5/str5_fr1_ntasharp2.mp3": "63f1ed9b15312eb94f61b9d1cc47d146",
"assets/individual_notes/velocity_95/str_5/str5_fr2_ntb2.mp3": "5f4a7af301b308b2c24d8024fc8ba326",
"assets/individual_notes/velocity_95/str_5/str5_fr21_ntfsharp4.mp3": "3fff068be07abdf31f02ab9180ef7eaf",
"assets/individual_notes/velocity_95/str_5/str5_fr17_ntd4.mp3": "66e4567203ca1b6de096e0003764b72d",
"assets/individual_notes/velocity_95/str_5/str5_fr19_nte4.mp3": "1cbd3df29f84aaa4a4065f30a00d08f4",
"assets/individual_notes/velocity_95/str_5/str5_fr6_ntdsharp3.mp3": "443278e910ef543240416cd16f0af3a6",
"assets/individual_notes/velocity_95/str_5/str5_fr22_ntg4.mp3": "4e7440d9b3d3964614820d6116eda795",
"assets/individual_notes/velocity_95/str_5/str5_fr9_ntfsharp3.mp3": "263717d2e0806c24c308a4f241ab27fb",
"assets/individual_notes/velocity_95/str_5/str5_fr13_ntasharp3.mp3": "ca5e9c7971647393c5fed4ef95e413c4",
"assets/individual_notes/velocity_95/str_5/str5_fr15_ntc4.mp3": "8ddb9794cece0aa26c84f6c9e591d48d",
"assets/individual_notes/velocity_95/str_5/str5_fr14_ntb3.mp3": "b597d5fab5356d78164bae39f6fbcfe8",
"assets/individual_notes/velocity_95/str_5/str5_fr10_ntg3.mp3": "cdb1d58b40895c49dc98e4c78ee8ac1a",
"assets/individual_notes/velocity_95/str_5/str5_fr7_nte3.mp3": "8ee64ae07b63dfd56936027ab1d6c758",
"assets/individual_notes/velocity_95/str_5/str5_fr16_ntcsharp4.mp3": "21be676aeabaf798fdb8c08ffcd7633f",
"assets/individual_notes/velocity_95/str_5/str5_fr23_ntgsharp4.mp3": "db50f76ef59c93907229557b8c37a3a1",
"assets/individual_notes/velocity_95/str_5/str5_fr8_ntf3.mp3": "48341387069055abc06b399ca7b316be",
"assets/individual_notes/velocity_95/str_5/str5_fr18_ntdsharp4.mp3": "fd8c5b545f089a09d767c5c4beafdcb6",
"assets/individual_notes/velocity_95/str_2/str2_fr6_ntf4.mp3": "4026e7c22086d8ff3f50855335681953",
"assets/individual_notes/velocity_95/str_2/str2_fr19_ntfsharp5.mp3": "f33259b0c5e02264a517a834ecb11574",
"assets/individual_notes/velocity_95/str_2/str2_fr3_ntd4.mp3": "e975fc6d413686c62bdaa965aee49ed5",
"assets/individual_notes/velocity_95/str_2/str2_fr20_ntg5.mp3": "d3ad84a8fb84b63c5bd10d64712e05b6",
"assets/individual_notes/velocity_95/str_2/str2_fr16_ntdsharp5.mp3": "9ea66d4d68188d7eac29d25c199a394b",
"assets/individual_notes/velocity_95/str_2/str2_fr4_ntdsharp4.mp3": "c75ba3b8c6088615abae314227ef3de5",
"assets/individual_notes/velocity_95/str_2/str2_fr5_nte4.mp3": "5c0d501e7c6880d51a044e41f90b7fd9",
"assets/individual_notes/velocity_95/str_2/str2_fr18_ntf5.mp3": "98b8ffa9af320c900e8c69a9808ac13a",
"assets/individual_notes/velocity_95/str_2/str2_fr17_nte5.mp3": "7454f4ffdf6437b15b8c0dc0b1207f7f",
"assets/individual_notes/velocity_95/str_2/str2_fr10_nta4.mp3": "5a449d0b4ec895d3c3c1d36c433c4d0a",
"assets/individual_notes/velocity_95/str_2/str2_fr2_ntcsharp4.mp3": "4803d9f47b3f5a1009ea4c1774d86b52",
"assets/individual_notes/velocity_95/str_2/str2_fr7_ntfsharp4.mp3": "a3d40d149c4360fd36e41625178c1a3c",
"assets/individual_notes/velocity_95/str_2/str2_fr9_ntgsharp4.mp3": "5de14b686b11b9cf01b46a26a5669c41",
"assets/individual_notes/velocity_95/str_2/str2_fr21_ntgsharp5.mp3": "f4002d64edc3e6f1c2350c4a8e217adf",
"assets/individual_notes/velocity_95/str_2/str2_fr14_ntcsharp5.mp3": "3146e833d7797b0f6a221c8fbf9b1547",
"assets/individual_notes/velocity_95/str_2/str2_fr1_ntc4.mp3": "a65dbff003e075a9f912af8bd189bb50",
"assets/individual_notes/velocity_95/str_2/str2_fr12_ntb4.mp3": "3cfe842de9d389a5a07b4e8fa908f79b",
"assets/individual_notes/velocity_95/str_2/str2_fr11_ntasharp4.mp3": "fb8762aa8b7b9a29737261afff6a7e24",
"assets/individual_notes/velocity_95/str_2/str2_fr0_ntb3.mp3": "7e29e969c05cb93a5c962dc299dd6d83",
"assets/individual_notes/velocity_95/str_2/str2_fr15_ntd5.mp3": "f8a85a8bc27f872d3ef3da5f62a17bba",
"assets/individual_notes/velocity_95/str_2/str2_fr13_ntc5.mp3": "5d694af89c52c017d96926fca06e8758",
"assets/individual_notes/velocity_95/str_2/str2_fr8_ntg4.mp3": "54a63085dbdc934d1b42f311a950fa16",
"assets/individual_notes/velocity_95/str_3/str3_fr15_ntasharp3.mp3": "3669b5eddafea80b505487c1177ecee2",
"assets/individual_notes/velocity_95/str_3/str3_fr1_ntgsharp3.mp3": "edcab87a171126cf061c5324a7fc8fb1",
"assets/individual_notes/velocity_95/str_3/str3_fr5_ntc3.mp3": "fd2146c9352ff0a578fcdbf3b3414f4e",
"assets/individual_notes/velocity_95/str_3/str3_fr10_ntf3.mp3": "5646ced7cc7f99b4c6c84d4030725e79",
"assets/individual_notes/velocity_95/str_3/str3_fr4_ntb3.mp3": "45c4c305332e6071f9a25ae587428754",
"assets/individual_notes/velocity_95/str_3/str3_fr21_nte4.mp3": "42376fb83f3c9321b3ee7d54544b2bae",
"assets/individual_notes/velocity_95/str_3/str3_fr9_nte3.mp3": "bc1b4ff60ad48a0b0fbbe3d2d42a6539",
"assets/individual_notes/velocity_95/str_3/str3_fr0_ntg3.mp3": "59246da9879277b48f5f346158cd8bbb",
"assets/individual_notes/velocity_95/str_3/str3_fr20_ntdsharp4.mp3": "3c6adbb4fb2d30e2f0a8eab222e34076",
"assets/individual_notes/velocity_95/str_3/str3_fr19_ntd4.mp3": "09ac12f06fa04aef30a9aa530ac0da95",
"assets/individual_notes/velocity_95/str_3/str3_fr11_ntfsharp3.mp3": "ca912338aa622a315e7bc50c909c75c9",
"assets/individual_notes/velocity_95/str_3/str3_fr22_ntf4.mp3": "79778d37d7ad1b469721d22f1c4a6d03",
"assets/individual_notes/velocity_95/str_3/str3_fr8_ntdsharp3.mp3": "871ae98637b60e1b927eb81e0e5d3271",
"assets/individual_notes/velocity_95/str_3/str3_fr6_ntcsharp3.mp3": "ee4d6b32b9b7aa0b95eb532d71248cb9",
"assets/individual_notes/velocity_95/str_3/str3_fr14_nta3.mp3": "00dd06e60d49dcb143500fc25528c9da",
"assets/individual_notes/velocity_95/str_3/str3_fr12_ntg3.mp3": "07a7f84d612ac48ecd340ac60281f146",
"assets/individual_notes/velocity_95/str_3/str3_fr2_nta3.mp3": "dd06484bd11442b07e52cacd64aa5f73",
"assets/individual_notes/velocity_95/str_3/str3_fr7_ntd3.mp3": "034fb633e28cd586d141002f7c36b619",
"assets/individual_notes/velocity_95/str_3/str3_fr17_ntc4.mp3": "e3b05a5135edf568b04d724cd1d36383",
"assets/individual_notes/velocity_95/str_3/str3_fr23_ntfsharp4.mp3": "ac5342ccb4924c36e2ebd03835948d17",
"assets/individual_notes/velocity_95/str_3/str3_fr16_ntb3.mp3": "94fd40bdec8f8e985bc6e4a0e550b89b",
"assets/individual_notes/velocity_95/str_3/str3_fr18_ntcsharp4.mp3": "4eb79c117780c1b4d0e38f394c46e9f8",
"assets/individual_notes/velocity_95/str_3/str3_fr3_ntasharp3.mp3": "bd5708b9914f673e6184d8d8f2670786",
"assets/individual_notes/velocity_95/str_3/str3_fr13_ntgsharp3.mp3": "a9c1a10446d676c20fb797822c42c667",
"assets/individual_notes/velocity_95/str_4/str4_fr14_nte4.mp3": "aee55aa7e791428faf1724b8810574d0",
"assets/individual_notes/velocity_95/str_4/str4_fr20_ntasharp4.mp3": "68606be7e906f7b63112fe535d50c10c",
"assets/individual_notes/velocity_95/str_4/str4_fr2_nte3.mp3": "5338c8b9368a3c0f4bf9edd1e5ebc08b",
"assets/individual_notes/velocity_95/str_4/str4_fr11_ntcsharp4.mp3": "7fb4e88c752cf084343e28b1618ed571",
"assets/individual_notes/velocity_95/str_4/str4_fr8_ntasharp3.mp3": "c2df4362c35ab677c9f5a1752362cfd3",
"assets/individual_notes/velocity_95/str_4/str4_fr12_ntd4.mp3": "a03a924c21c2ba0d1971d9225e65e862",
"assets/individual_notes/velocity_95/str_4/str4_fr9_ntb3.mp3": "288045b59102a324b7ec2d5b5ee309c5",
"assets/individual_notes/velocity_95/str_4/str4_fr6_ntgsharp3.mp3": "627a731faa42d269897eb4c1b1df5a8c",
"assets/individual_notes/velocity_95/str_4/str4_fr21_ntb4.mp3": "7d05969b957e225e1d0d4e0648f48296",
"assets/individual_notes/velocity_95/str_4/str4_fr17_ntg4.mp3": "9e5ad731db6337eb3e533d96d8f80ccf",
"assets/individual_notes/velocity_95/str_4/str4_fr7_nta3.mp3": "20e60e8936a5122acb345b57205cda5c",
"assets/individual_notes/velocity_95/str_4/str4_fr13_ntdsharp4.mp3": "1e6f8df33fe1085d8dc51a63ed1387f9",
"assets/individual_notes/velocity_95/str_4/str4_fr5_ntg3.mp3": "cf311e58616d3cb61665205df4e9ba78",
"assets/individual_notes/velocity_95/str_4/str4_fr1_ntdsharp3.mp3": "03f5c6ee502b42a43ca699192572a182",
"assets/individual_notes/velocity_95/str_4/str4_fr10_ntc4.mp3": "0d88c58cb70bc9e065aed2bbb50ce9f5",
"assets/individual_notes/velocity_95/str_4/str4_fr0_ntd3.mp3": "599eba2489e43e37c3f3680a03ff5b0e",
"assets/individual_notes/velocity_95/str_4/str4_fr23_ntcsharp5.mp3": "bdedd1dc0bc6d97435ec68c8feacd3a9",
"assets/individual_notes/velocity_95/str_4/str4_fr3_ntf3.mp3": "b558259e5a4004bc89e52dccc0775e30",
"assets/individual_notes/velocity_95/str_4/str4_fr18_ntgsharp4.mp3": "83eb0b80bd1259427b3aa6549dae3f8b",
"assets/individual_notes/velocity_95/str_4/str4_fr22_ntc5.mp3": "96977bced944ff786330ffb18f7f70a2",
"assets/individual_notes/velocity_95/str_4/str4_fr15_ntf4.mp3": "0c6ba4afc7398b20672e3e4f5c2ba329",
"assets/individual_notes/velocity_95/str_4/str4_fr16_ntfsharp4.mp3": "b085a5d930960c5e2b1d4726a0569e2d",
"assets/individual_notes/velocity_95/str_4/str4_fr4_ntfsharp3.mp3": "9de2c9ce2a7ad5d21aaf57efaafc1f34",
"assets/individual_notes/velocity_95/str_4/str4_fr19_nta4.mp3": "c623eb973342fdee9033a976d533b0c1",
"assets/individual_notes/velocity_95/str_1/str1_fr10_ntd5.mp3": "0f40f2cfe3724ac67d564c8117a49dee",
"assets/individual_notes/velocity_95/str_1/str1_fr2_ntfsharp4.mp3": "b589d65a26ca65da841a864639a12720",
"assets/individual_notes/velocity_95/str_1/str1_fr5_nta4.mp3": "db14f0aa69674e42bf5fb91ed58371ca",
"assets/individual_notes/velocity_95/str_1/str1_fr11_ntdsharp5.mp3": "3f9984050f548a58972163cae252c5c6",
"assets/individual_notes/velocity_95/str_1/str1_fr3_ntg4.mp3": "9315303495e1ef5ba9741a888a29403d",
"assets/individual_notes/velocity_95/str_1/str1_fr15_ntg5.mp3": "0f54f39a3843c745b6efc5c61bff9b71",
"assets/individual_notes/velocity_95/str_1/str1_fr7_ntb4.mp3": "c0d2b323749ecbb3ff08b24890bf085b",
"assets/individual_notes/velocity_95/str_1/str1_fr0_nte4.mp3": "98d940c12d8e6bd5d79c97f50b69eaae",
"assets/individual_notes/velocity_95/str_1/str1_fr9_ntcsharp5.mp3": "473e93d1de0e1fe15756eba16ede5cb5",
"assets/individual_notes/velocity_95/str_1/str1_fr13_ntf5.mp3": "bf2dd06fdcbb3c6f15d8e6bff79b6a4d",
"assets/individual_notes/velocity_95/str_1/str1_fr14_ntfsharp5.mp3": "c2ef39178edf21aaa2ee882d86771ee3",
"assets/individual_notes/velocity_95/str_1/str1_fr6_ntasharp4.mp3": "7d3a68509fbe197c990c615a993da5d7",
"assets/individual_notes/velocity_95/str_1/str1_fr4_ntgsharp4.mp3": "255918b219ede501dee4e6df835ba6b0",
"assets/individual_notes/velocity_95/str_1/str1_fr12_nte5.mp3": "c30674b99e2c6dd0663bc49c3025efc8",
"assets/individual_notes/velocity_95/str_1/str1_fr8_ntc5.mp3": "9604efa99679a4e011800df9c956484d",
"assets/individual_notes/velocity_95/str_1/str1_fr1_ntf4.mp3": "07b5cfd645a796b6ee639c2389068d33",
"assets/individual_notes/velocity_95/str_1/str1_fr16_ntgsharp5.mp3": "91dedb0343e12984dee956ff15952845",
"assets/individual_notes/velocity_95/str_6/str6_fr3_ntg2.mp3": "bc0ce7717731d4450735d91e1bc69de0",
"assets/individual_notes/velocity_95/str_6/str6_fr6_ntasharp2.mp3": "b3edf07565e7941e680293067894d2d6",
"assets/individual_notes/velocity_95/str_6/str6_fr10_ntd3.mp3": "ec5fe951a9a4cf3b166fc5a2ebfca8ab",
"assets/individual_notes/velocity_95/str_6/str6_fr18_ntasharp3.mp3": "2fc0f2636e2c0775ffc36671ed1ad7f3",
"assets/individual_notes/velocity_95/str_6/str6_fr9_ntcsharp3.mp3": "061ecfb99ed2ab2fbfbfb56325b2c633",
"assets/individual_notes/velocity_95/str_6/str6_fr23_ntdsharp4.mp3": "8b09f1b612a3aff5870244cbb8ba1aae",
"assets/individual_notes/velocity_95/str_6/str6_fr15_ntg3.mp3": "8a501cfe0e3a12f5c6c2c5d0194c1f6d",
"assets/individual_notes/velocity_95/str_6/str6_fr5_nta2.mp3": "412ae99e9acd700cd365d52121d7e9f6",
"assets/individual_notes/velocity_95/str_6/str6_fr16_ntgsharp3.mp3": "ba03b9014f14c1b6c73f71071f090789",
"assets/individual_notes/velocity_95/str_6/str6_fr22_ntd4.mp3": "4ab038c5e22b3d288671e66eaed28b6b",
"assets/individual_notes/velocity_95/str_6/str6_fr2_ntfsharp2.mp3": "a5242d1e688b83aeab7a9b666b897645",
"assets/individual_notes/velocity_95/str_6/str6_fr7_ntb2.mp3": "7992d37586519119abc661852c729124",
"assets/individual_notes/velocity_95/str_6/str6_fr13_ntf3.mp3": "1e7acdfd80316daa468c6e64da9a1b56",
"assets/individual_notes/velocity_95/str_6/str6_fr0_nte2.mp3": "930c66926ed4cc217277f6faa15672a5",
"assets/individual_notes/velocity_95/str_6/str6_fr8_ntc3.mp3": "0c002a927fcfac1834b3a682db30cc9b",
"assets/individual_notes/velocity_95/str_6/str6_fr20_ntc4.mp3": "d81b53e536ab9f59e1bfb6ca80518e15",
"assets/individual_notes/velocity_95/str_6/str6_fr12_nte3.mp3": "46d51b849902225e93ac7760e5bb09b0",
"assets/individual_notes/velocity_95/str_6/str6_fr1_ntf2.mp3": "083468bf6986d57c5db6e085ef84d38a",
"assets/individual_notes/velocity_95/str_6/str6_fr11_ntdsharp3.mp3": "c0bdb1fed145440133d5b56037743073",
"assets/individual_notes/velocity_95/str_6/str6_fr21_ntcsharp4.mp3": "39bb05d187ac38ab9da2c84d972cc914",
"assets/individual_notes/velocity_95/str_6/str6_fr17_nta3.mp3": "752b9923bf4fb766fc41d077fac202ab",
"assets/individual_notes/velocity_95/str_6/str6_fr14_ntfsharp3.mp3": "59bf1269c88c61d2de36cb8debf69eb9",
"assets/individual_notes/velocity_95/str_6/str6_fr4_ntgsharp2.mp3": "763606be97d8f225989abd282bade1b4",
"assets/individual_notes/velocity_95/str_6/str6_fr19_ntb3.mp3": "199faf9774bf6aa86f50ea5d50941394",
"assets/web/assets/individual_notes/velocity_115/str_5/str5_fr20_ntf4.mp3": "cf428e131d0842fd4d823304e17d35c1",
"assets/web/assets/individual_notes/velocity_115/str_5/str5_fr0_nta2.mp3": "f020887ce77f3423ad9671da8001e0a2",
"assets/web/assets/individual_notes/velocity_115/str_5/str5_fr12_nta3.mp3": "29db5065f622157ded650e6b89953124",
"assets/web/assets/individual_notes/velocity_115/str_5/str5_fr4_ntcsharp3.mp3": "1d824b75068fe505297bfb187c4601f1",
"assets/web/assets/individual_notes/velocity_115/str_5/str5_fr5_ntd3.mp3": "f0dfd78e19f347ff7cbf83b696ba4314",
"assets/web/assets/individual_notes/velocity_115/str_5/str5_fr11_ntgsharp3.mp3": "c74300df1ecee24ab87718c27b578167",
"assets/web/assets/individual_notes/velocity_115/str_5/str5_fr3_ntc3.mp3": "ec834764bd0dd6916afadff725710914",
"assets/web/assets/individual_notes/velocity_115/str_5/str5_fr1_ntasharp2.mp3": "f6416784ab2f73b04f5ad2b310565757",
"assets/web/assets/individual_notes/velocity_115/str_5/str5_fr2_ntb2.mp3": "283badf3cc64eee0e5ee0ee79a79d7cb",
"assets/web/assets/individual_notes/velocity_115/str_5/str5_fr21_ntfsharp4.mp3": "9526fa24f8ae726faf21f647351a7574",
"assets/web/assets/individual_notes/velocity_115/str_5/str5_fr17_ntd4.mp3": "9e19a4e70163b0e6d04240984ab9f37d",
"assets/web/assets/individual_notes/velocity_115/str_5/str5_fr19_nte4.mp3": "6f44e9870322d546672089972ffbd931",
"assets/web/assets/individual_notes/velocity_115/str_5/str5_fr6_ntdsharp3.mp3": "bb736a8027c5b81818f0e0279d9841cc",
"assets/web/assets/individual_notes/velocity_115/str_5/str5_fr22_ntg4.mp3": "e6c25ddb2a45007810de1945d759a599",
"assets/web/assets/individual_notes/velocity_115/str_5/str5_fr9_ntfsharp3.mp3": "cc64bd61b2b04af7a37c12fa83592e17",
"assets/web/assets/individual_notes/velocity_115/str_5/str5_fr13_ntasharp3.mp3": "7a1c98a8cd9ffad7e8839dd47bd8ead4",
"assets/web/assets/individual_notes/velocity_115/str_5/str5_fr15_ntc4.mp3": "f6662b2dfe972b36203c0a9a0f02ac7e",
"assets/web/assets/individual_notes/velocity_115/str_5/str5_fr14_ntb3.mp3": "0d4c7f8ddd541755172c1110cbdc84b9",
"assets/web/assets/individual_notes/velocity_115/str_5/str5_fr10_ntg3.mp3": "496cde909e02be804eba30110c9f038d",
"assets/web/assets/individual_notes/velocity_115/str_5/str5_fr7_nte3.mp3": "1cc50099bd489a6e4076e78d68f10033",
"assets/web/assets/individual_notes/velocity_115/str_5/str5_fr16_ntcsharp4.mp3": "e40d58105e1100c1ca918e478a2ea2aa",
"assets/web/assets/individual_notes/velocity_115/str_5/str5_fr23_ntgsharp4.mp3": "c2cc29588e6dbb5d2712c581fa2a9130",
"assets/web/assets/individual_notes/velocity_115/str_5/str5_fr8_ntf3.mp3": "727d164b4029521b3831664fc63c734a",
"assets/web/assets/individual_notes/velocity_115/str_5/str5_fr18_ntdsharp4.mp3": "e6f38e820cba8456ed498ed78be7c93c",
"assets/web/assets/individual_notes/velocity_115/str_2/str2_fr6_ntf4.mp3": "66ded8a0963b76ff31a48fe6c47c27a4",
"assets/web/assets/individual_notes/velocity_115/str_2/str2_fr19_ntfsharp5.mp3": "a2099d80ab653eb26991160dfaf2ef55",
"assets/web/assets/individual_notes/velocity_115/str_2/str2_fr3_ntd4.mp3": "7279fae646d30c5cb636bc2d8b07fe94",
"assets/web/assets/individual_notes/velocity_115/str_2/str2_fr20_ntg5.mp3": "d0c7c9e88513376c3fb4109b2eddcb44",
"assets/web/assets/individual_notes/velocity_115/str_2/str2_fr16_ntdsharp5.mp3": "a5e07e06fbf52fecaef6c35c60d1b877",
"assets/web/assets/individual_notes/velocity_115/str_2/str2_fr4_ntdsharp4.mp3": "716faa12cb471b253ddf3914ff381c36",
"assets/web/assets/individual_notes/velocity_115/str_2/str2_fr5_nte4.mp3": "2cb531704ee9afba806d4aa4b55b970d",
"assets/web/assets/individual_notes/velocity_115/str_2/str2_fr18_ntf5.mp3": "094fb3d1793df97e47d5670271ccaafc",
"assets/web/assets/individual_notes/velocity_115/str_2/str2_fr17_nte5.mp3": "0967b87958ba1a1cd3d0eae0cb1ced8a",
"assets/web/assets/individual_notes/velocity_115/str_2/str2_fr10_nta4.mp3": "442f39d62817d07463e462d0e0613ca4",
"assets/web/assets/individual_notes/velocity_115/str_2/str2_fr2_ntcsharp4.mp3": "c351fe3798a271f93bc49afd3778ea73",
"assets/web/assets/individual_notes/velocity_115/str_2/str2_fr7_ntfsharp4.mp3": "a5662101a46e9a4b33528ae40472889d",
"assets/web/assets/individual_notes/velocity_115/str_2/str2_fr9_ntgsharp4.mp3": "27259f74eb9cab90b7727dbcade2c412",
"assets/web/assets/individual_notes/velocity_115/str_2/str2_fr21_ntgsharp5.mp3": "4e5c1d0b5e6f87adf104b1e102ef9bef",
"assets/web/assets/individual_notes/velocity_115/str_2/str2_fr14_ntcsharp5.mp3": "536d4336b5b3fb6fe0c1c4716d16c701",
"assets/web/assets/individual_notes/velocity_115/str_2/str2_fr1_ntc4.mp3": "3280a4ebc3757038699198dff26628a2",
"assets/web/assets/individual_notes/velocity_115/str_2/str2_fr12_ntb4.mp3": "e41060e3a597ececea22f709ac192cce",
"assets/web/assets/individual_notes/velocity_115/str_2/str2_fr11_ntasharp4.mp3": "e33767dfc32008e8edef4e1bffce4a2d",
"assets/web/assets/individual_notes/velocity_115/str_2/str2_fr0_ntb3.mp3": "548e89fa52d77f930e81260f8cb178c5",
"assets/web/assets/individual_notes/velocity_115/str_2/str2_fr15_ntd5.mp3": "6718f2210836a36c5a508c5abb5a7be8",
"assets/web/assets/individual_notes/velocity_115/str_2/str2_fr13_ntc5.mp3": "39a03d5d3b1c54b941c5124388ec37c4",
"assets/web/assets/individual_notes/velocity_115/str_2/str2_fr8_ntg4.mp3": "c5ae011b53e39fb51d9aec54ecde3fa4",
"assets/web/assets/individual_notes/velocity_115/str_3/str3_fr1_ntgsharp3.mp3": "e40717d9cd38e13335cb9ebb11e13495",
"assets/web/assets/individual_notes/velocity_115/str_3/str3_fr10_ntf4.mp3": "a25e4c01a3e8795be8c2ab0dceea311e",
"assets/web/assets/individual_notes/velocity_115/str_3/str3_fr9_nte4.mp3": "8098cd1f476ac8fab6802fd3d282d62e",
"assets/web/assets/individual_notes/velocity_115/str_3/str3_fr4_ntb3.mp3": "c39b757461f4c8ba23e860dd09c2972f",
"assets/web/assets/individual_notes/velocity_115/str_3/str3_fr15_ntasharp4.mp3": "9d8c8fec12a18539114ad047af029df8",
"assets/web/assets/individual_notes/velocity_115/str_3/str3_fr5_ntc4.mp3": "e8cb11693379ad2a45058bcb0408a74d",
"assets/web/assets/individual_notes/velocity_115/str_3/str3_fr21_nte5.mp3": "23757dea4597fe76f331f3d958c93412",
"assets/web/assets/individual_notes/velocity_115/str_3/str3_fr11_ntfsharp4.mp3": "f018b85b51dbb0f3cec63cecf61d151f",
"assets/web/assets/individual_notes/velocity_115/str_3/str3_fr0_ntg3.mp3": "53a77007b5eb5e51fc6d1c37ab5561b7",
"assets/web/assets/individual_notes/velocity_115/str_3/str3_fr19_ntd5.mp3": "923c34bb585b51ad877c06d25259bcb8",
"assets/web/assets/individual_notes/velocity_115/str_3/str3_fr20_ntdsharp5.mp3": "b3dd703a5bdff7a4556bc39423121979",
"assets/web/assets/individual_notes/velocity_115/str_3/str3_fr22_ntf5.mp3": "97c2cc4d52ddce72ef4dc5ff46d25722",
"assets/web/assets/individual_notes/velocity_115/str_3/str3_fr12_ntg4.mp3": "f1147b251a2f7d4b6cec5977950eccf4",
"assets/web/assets/individual_notes/velocity_115/str_3/str3_fr8_ntdsharp4.mp3": "9b2036ed40dd5bee1c2c4c01eb58cef0",
"assets/web/assets/individual_notes/velocity_115/str_3/str3_fr14_nta4.mp3": "6394abb7ed26b99dfc01a56ea08e2535",
"assets/web/assets/individual_notes/velocity_115/str_3/str3_fr6_ntcsharp4.mp3": "3a5fcc279e7f3714ba91fbaf2c1a1b50",
"assets/web/assets/individual_notes/velocity_115/str_3/str3_fr2_nta3.mp3": "98b03e0da254ec581f5925b744d931dd",
"assets/web/assets/individual_notes/velocity_115/str_3/str3_fr17_ntc5.mp3": "eeca144e2b38cca58958c84b1fa877f6",
"assets/web/assets/individual_notes/velocity_115/str_3/str3_fr13_ntgsharp4.mp3": "5810c94f8a4c9e00a19667436050a140",
"assets/web/assets/individual_notes/velocity_115/str_3/str3_fr23_ntfsharp5.mp3": "3a4cef8439a4385c6b2231d162fd7762",
"assets/web/assets/individual_notes/velocity_115/str_3/str3_fr7_ntd4.mp3": "9b3075388dec9dfa4521291b0ab4fe7a",
"assets/web/assets/individual_notes/velocity_115/str_3/str3_fr18_ntcsharp5.mp3": "c9793dc5d818395142c4f0fb286c5e51",
"assets/web/assets/individual_notes/velocity_115/str_3/str3_fr16_ntb4.mp3": "14b47e1549a85cfac6cbf8155732ff4b",
"assets/web/assets/individual_notes/velocity_115/str_3/str3_fr3_ntasharp3.mp3": "4a8047b55fa43aaadf55793c936e080a",
"assets/web/assets/individual_notes/velocity_115/str_4/str4_fr14_nte4.mp3": "7e9f0b2518252dd89dacf62d87a35835",
"assets/web/assets/individual_notes/velocity_115/str_4/str4_fr20_ntasharp4.mp3": "23cb073017ad3298e4f8efba99daff67",
"assets/web/assets/individual_notes/velocity_115/str_4/str4_fr2_nte3.mp3": "13adff452b2147ba432f90d7bd893051",
"assets/web/assets/individual_notes/velocity_115/str_4/str4_fr11_ntcsharp4.mp3": "3bd625068ab408c9cc0b606411aa6824",
"assets/web/assets/individual_notes/velocity_115/str_4/str4_fr8_ntasharp3.mp3": "70e1672bae95826d45777d39e0b9ccc7",
"assets/web/assets/individual_notes/velocity_115/str_4/str4_fr12_ntd4.mp3": "4fa3e2974341368775836dd0732eaf69",
"assets/web/assets/individual_notes/velocity_115/str_4/str4_fr9_ntb3.mp3": "cb9a4d53a261163f6608c6778d8696a2",
"assets/web/assets/individual_notes/velocity_115/str_4/str4_fr6_ntgsharp3.mp3": "86c66f4d9767692eeeaffd3ffeff73eb",
"assets/web/assets/individual_notes/velocity_115/str_4/str4_fr21_ntb4.mp3": "63c80fa91a0cab6fe2784905b689aac9",
"assets/web/assets/individual_notes/velocity_115/str_4/str4_fr17_ntg4.mp3": "cc00968d3913dc1ef7e22443e2095ab4",
"assets/web/assets/individual_notes/velocity_115/str_4/str4_fr7_nta3.mp3": "1dba9afbc4e9641e03ee8bc830cc4392",
"assets/web/assets/individual_notes/velocity_115/str_4/str4_fr13_ntdsharp4.mp3": "d5d5b791966e342db98703439857a4e7",
"assets/web/assets/individual_notes/velocity_115/str_4/str4_fr5_ntg3.mp3": "b21938b7b815c5d5a7df89f16a48615f",
"assets/web/assets/individual_notes/velocity_115/str_4/str4_fr1_ntdsharp3.mp3": "1bd147a3455fe5ba127c0db62355ff89",
"assets/web/assets/individual_notes/velocity_115/str_4/str4_fr10_ntc4.mp3": "7b83e583dfdfa88bb1d6b53f754cc981",
"assets/web/assets/individual_notes/velocity_115/str_4/str4_fr0_ntd3.mp3": "c0700777a91af5c3b123f2b7d5bf7d93",
"assets/web/assets/individual_notes/velocity_115/str_4/str4_fr23_ntcsharp5.mp3": "2fd7701a9fcf6e2a083bc81cc308124a",
"assets/web/assets/individual_notes/velocity_115/str_4/str4_fr3_ntf3.mp3": "aa8defb5123a69ff4dc1fae1286019e0",
"assets/web/assets/individual_notes/velocity_115/str_4/str4_fr18_ntgsharp4.mp3": "d8e653701180858fec9a27f835256c11",
"assets/web/assets/individual_notes/velocity_115/str_4/str4_fr22_ntc5.mp3": "24cd770db1f6126dbe03f9aa2135a979",
"assets/web/assets/individual_notes/velocity_115/str_4/str4_fr15_ntf4.mp3": "aaf6c56f54900cc04f5dd813980394a2",
"assets/web/assets/individual_notes/velocity_115/str_4/str4_fr16_ntfsharp4.mp3": "b6e954ea5dfbdda933f79a51b78a5a82",
"assets/web/assets/individual_notes/velocity_115/str_4/str4_fr4_ntfsharp3.mp3": "b11ba09697f8d0103bc02ab1e9e70217",
"assets/web/assets/individual_notes/velocity_115/str_4/str4_fr19_nta4.mp3": "236a6a1b31f03aac215022447068be07",
"assets/web/assets/individual_notes/velocity_115/str_1/str1_fr10_ntd5.mp3": "ad1b4ccb272416438eeb16455e1edf7b",
"assets/web/assets/individual_notes/velocity_115/str_1/str1_fr2_ntfsharp4.mp3": "8b8c32f351814b8bd6c24fb4d1873fe0",
"assets/web/assets/individual_notes/velocity_115/str_1/str1_fr5_nta4.mp3": "2143bfa89686495574647697b69ad9da",
"assets/web/assets/individual_notes/velocity_115/str_1/str1_fr11_ntdsharp5.mp3": "3079a16a99d5201642e29f7e86a1bdde",
"assets/web/assets/individual_notes/velocity_115/str_1/str1_fr3_ntg4.mp3": "255a2aa1efeb4614f71c5a3c0f6f2909",
"assets/web/assets/individual_notes/velocity_115/str_1/str1_fr15_ntg5.mp3": "efb87508ed598b2c7f687a1ebccc6407",
"assets/web/assets/individual_notes/velocity_115/str_1/str1_fr7_ntb4.mp3": "d4e7a8dec9180084458a9382dbaf07ac",
"assets/web/assets/individual_notes/velocity_115/str_1/str1_fr0_nte4.mp3": "9e11dd509bb248918d3165b54090a994",
"assets/web/assets/individual_notes/velocity_115/str_1/str1_fr9_ntcsharp5.mp3": "f998e8b6f7430cd517f015c5195c98cb",
"assets/web/assets/individual_notes/velocity_115/str_1/str1_fr13_ntf5.mp3": "e201f8e226cec92d2cf9e17c7e8e4fc4",
"assets/web/assets/individual_notes/velocity_115/str_1/str1_fr14_ntfsharp5.mp3": "517f1a2d3826d9facb9fafaff679321f",
"assets/web/assets/individual_notes/velocity_115/str_1/str1_fr6_ntasharp4.mp3": "94ad43e0039ea4181c3d3151c9cdc3fa",
"assets/web/assets/individual_notes/velocity_115/str_1/str1_fr4_ntgsharp4.mp3": "50cccb56a176ddd5bee9770f45ddafea",
"assets/web/assets/individual_notes/velocity_115/str_1/str1_fr12_nte5.mp3": "a8c05d40e67ac953b2505b0d12b348c8",
"assets/web/assets/individual_notes/velocity_115/str_1/str1_fr8_ntc5.mp3": "486b7e6550d43031d82ddb98c02a2c42",
"assets/web/assets/individual_notes/velocity_115/str_1/str1_fr1_ntf4.mp3": "761b49458c7c30d1379f4ab75748e70b",
"assets/web/assets/individual_notes/velocity_115/str_1/str1_fr16_ntgsharp5.mp3": "33fb3c8e2cec6d41ebb8e93008309a40",
"assets/web/assets/individual_notes/velocity_115/str_6/str6_fr3_ntg2.mp3": "8dd132eba357ae4f4ff4d30b106f8da4",
"assets/web/assets/individual_notes/velocity_115/str_6/str6_fr6_ntasharp2.mp3": "dcd46b759a56eb214cc7862736f67f43",
"assets/web/assets/individual_notes/velocity_115/str_6/str6_fr10_ntd3.mp3": "e1f9c7cad275253d0c7f49222010ace4",
"assets/web/assets/individual_notes/velocity_115/str_6/str6_fr18_ntasharp3.mp3": "d520af84753cb6a3e46590e3ae2f0349",
"assets/web/assets/individual_notes/velocity_115/str_6/str6_fr9_ntcsharp3.mp3": "8e59bf0d9f98cd6f6cd3ca9d8bf3d360",
"assets/web/assets/individual_notes/velocity_115/str_6/str6_fr23_ntdsharp4.mp3": "cca4221b1607b8be6485912f5f283aeb",
"assets/web/assets/individual_notes/velocity_115/str_6/str6_fr15_ntg3.mp3": "2406006b03d684691b7540d64ec6ac74",
"assets/web/assets/individual_notes/velocity_115/str_6/str6_fr5_nta2.mp3": "63fa7ae28e6bdb04c2d02c7f4eee0778",
"assets/web/assets/individual_notes/velocity_115/str_6/str6_fr16_ntgsharp3.mp3": "f6622d6e82647c840cf15ca71dd7da15",
"assets/web/assets/individual_notes/velocity_115/str_6/str6_fr22_ntd4.mp3": "e45ed6c9e7d48b4b0a47601950b2df8d",
"assets/web/assets/individual_notes/velocity_115/str_6/str6_fr2_ntfsharp2.mp3": "b73c4572470113fcd83eef737df5b7f8",
"assets/web/assets/individual_notes/velocity_115/str_6/str6_fr7_ntb2.mp3": "7b6415faa8ef763bcafc2bad2c0406b7",
"assets/web/assets/individual_notes/velocity_115/str_6/str6_fr13_ntf3.mp3": "196a6f3c239f99949ed253ac28fc5029",
"assets/web/assets/individual_notes/velocity_115/str_6/str6_fr0_nte2.mp3": "4e81e73024b176e804b086c7cb867022",
"assets/web/assets/individual_notes/velocity_115/str_6/str6_fr8_ntc3.mp3": "45a28ac48819caff75a58609950fa7b5",
"assets/web/assets/individual_notes/velocity_115/str_6/str6_fr20_ntc4.mp3": "8fe9827bbb02da5e02e2118b5da4d754",
"assets/web/assets/individual_notes/velocity_115/str_6/str6_fr12_nte3.mp3": "0cd1b36ceb89778a9917d8df71aee74d",
"assets/web/assets/individual_notes/velocity_115/str_6/str6_fr1_ntf2.mp3": "e0eeca098ae0e8c684eef6c24b48dfb8",
"assets/web/assets/individual_notes/velocity_115/str_6/str6_fr11_ntdsharp3.mp3": "1155f3454a41ca92b2bb68cfcdeb8bc7",
"assets/web/assets/individual_notes/velocity_115/str_6/str6_fr21_ntcsharp4.mp3": "56b01e993bc40574a01d50f87e930a63",
"assets/web/assets/individual_notes/velocity_115/str_6/str6_fr17_nta3.mp3": "c465024eabbe656c7cc02e497153d636",
"assets/web/assets/individual_notes/velocity_115/str_6/str6_fr14_ntfsharp3.mp3": "539f6fb3d7906e3e3d028428bbce2cea",
"assets/web/assets/individual_notes/velocity_115/str_6/str6_fr4_ntgsharp2.mp3": "78a419793d38d6666859604438f578dd",
"assets/web/assets/individual_notes/velocity_115/str_6/str6_fr19_ntb3.mp3": "3305cd2b929db1fd247ecf53713ccdb7",
"assets/web/assets/individual_notes/velocity_95/str_5/str5_fr20_ntf4.mp3": "8ebc5bfaa9247021335cbd07b62d2a1f",
"assets/web/assets/individual_notes/velocity_95/str_5/str5_fr0_nta2.mp3": "4e76ab653d26ff4ea7a112fd0367d3a2",
"assets/web/assets/individual_notes/velocity_95/str_5/str5_fr12_nta3.mp3": "4b2f6a77ca1f5b449129e93338f83e87",
"assets/web/assets/individual_notes/velocity_95/str_5/str5_fr4_ntcsharp3.mp3": "644e06810c23e7a60385afe9c0722a91",
"assets/web/assets/individual_notes/velocity_95/str_5/str5_fr5_ntd3.mp3": "3fe1057b65dd7ed6a83c2f02b7a3c635",
"assets/web/assets/individual_notes/velocity_95/str_5/str5_fr11_ntgsharp3.mp3": "c25e972871f2f1ab17ee177298b03d02",
"assets/web/assets/individual_notes/velocity_95/str_5/str5_fr3_ntc3.mp3": "1c5eb9cd8e4d0a1cbcd3d7b47250ce3f",
"assets/web/assets/individual_notes/velocity_95/str_5/str5_fr1_ntasharp2.mp3": "63f1ed9b15312eb94f61b9d1cc47d146",
"assets/web/assets/individual_notes/velocity_95/str_5/str5_fr2_ntb2.mp3": "5f4a7af301b308b2c24d8024fc8ba326",
"assets/web/assets/individual_notes/velocity_95/str_5/str5_fr21_ntfsharp4.mp3": "3fff068be07abdf31f02ab9180ef7eaf",
"assets/web/assets/individual_notes/velocity_95/str_5/str5_fr17_ntd4.mp3": "66e4567203ca1b6de096e0003764b72d",
"assets/web/assets/individual_notes/velocity_95/str_5/str5_fr19_nte4.mp3": "1cbd3df29f84aaa4a4065f30a00d08f4",
"assets/web/assets/individual_notes/velocity_95/str_5/str5_fr6_ntdsharp3.mp3": "443278e910ef543240416cd16f0af3a6",
"assets/web/assets/individual_notes/velocity_95/str_5/str5_fr22_ntg4.mp3": "4e7440d9b3d3964614820d6116eda795",
"assets/web/assets/individual_notes/velocity_95/str_5/str5_fr9_ntfsharp3.mp3": "263717d2e0806c24c308a4f241ab27fb",
"assets/web/assets/individual_notes/velocity_95/str_5/str5_fr13_ntasharp3.mp3": "ca5e9c7971647393c5fed4ef95e413c4",
"assets/web/assets/individual_notes/velocity_95/str_5/str5_fr15_ntc4.mp3": "8ddb9794cece0aa26c84f6c9e591d48d",
"assets/web/assets/individual_notes/velocity_95/str_5/str5_fr14_ntb3.mp3": "b597d5fab5356d78164bae39f6fbcfe8",
"assets/web/assets/individual_notes/velocity_95/str_5/str5_fr10_ntg3.mp3": "cdb1d58b40895c49dc98e4c78ee8ac1a",
"assets/web/assets/individual_notes/velocity_95/str_5/str5_fr7_nte3.mp3": "8ee64ae07b63dfd56936027ab1d6c758",
"assets/web/assets/individual_notes/velocity_95/str_5/str5_fr16_ntcsharp4.mp3": "21be676aeabaf798fdb8c08ffcd7633f",
"assets/web/assets/individual_notes/velocity_95/str_5/str5_fr23_ntgsharp4.mp3": "db50f76ef59c93907229557b8c37a3a1",
"assets/web/assets/individual_notes/velocity_95/str_5/str5_fr8_ntf3.mp3": "48341387069055abc06b399ca7b316be",
"assets/web/assets/individual_notes/velocity_95/str_5/str5_fr18_ntdsharp4.mp3": "fd8c5b545f089a09d767c5c4beafdcb6",
"assets/web/assets/individual_notes/velocity_95/str_2/str2_fr6_ntf4.mp3": "4026e7c22086d8ff3f50855335681953",
"assets/web/assets/individual_notes/velocity_95/str_2/str2_fr19_ntfsharp5.mp3": "f33259b0c5e02264a517a834ecb11574",
"assets/web/assets/individual_notes/velocity_95/str_2/str2_fr3_ntd4.mp3": "e975fc6d413686c62bdaa965aee49ed5",
"assets/web/assets/individual_notes/velocity_95/str_2/str2_fr20_ntg5.mp3": "d3ad84a8fb84b63c5bd10d64712e05b6",
"assets/web/assets/individual_notes/velocity_95/str_2/str2_fr16_ntdsharp5.mp3": "9ea66d4d68188d7eac29d25c199a394b",
"assets/web/assets/individual_notes/velocity_95/str_2/str2_fr4_ntdsharp4.mp3": "c75ba3b8c6088615abae314227ef3de5",
"assets/web/assets/individual_notes/velocity_95/str_2/str2_fr5_nte4.mp3": "5c0d501e7c6880d51a044e41f90b7fd9",
"assets/web/assets/individual_notes/velocity_95/str_2/str2_fr18_ntf5.mp3": "98b8ffa9af320c900e8c69a9808ac13a",
"assets/web/assets/individual_notes/velocity_95/str_2/str2_fr17_nte5.mp3": "7454f4ffdf6437b15b8c0dc0b1207f7f",
"assets/web/assets/individual_notes/velocity_95/str_2/str2_fr10_nta4.mp3": "5a449d0b4ec895d3c3c1d36c433c4d0a",
"assets/web/assets/individual_notes/velocity_95/str_2/str2_fr2_ntcsharp4.mp3": "4803d9f47b3f5a1009ea4c1774d86b52",
"assets/web/assets/individual_notes/velocity_95/str_2/str2_fr7_ntfsharp4.mp3": "a3d40d149c4360fd36e41625178c1a3c",
"assets/web/assets/individual_notes/velocity_95/str_2/str2_fr9_ntgsharp4.mp3": "5de14b686b11b9cf01b46a26a5669c41",
"assets/web/assets/individual_notes/velocity_95/str_2/str2_fr21_ntgsharp5.mp3": "f4002d64edc3e6f1c2350c4a8e217adf",
"assets/web/assets/individual_notes/velocity_95/str_2/str2_fr14_ntcsharp5.mp3": "3146e833d7797b0f6a221c8fbf9b1547",
"assets/web/assets/individual_notes/velocity_95/str_2/str2_fr1_ntc4.mp3": "a65dbff003e075a9f912af8bd189bb50",
"assets/web/assets/individual_notes/velocity_95/str_2/str2_fr12_ntb4.mp3": "3cfe842de9d389a5a07b4e8fa908f79b",
"assets/web/assets/individual_notes/velocity_95/str_2/str2_fr11_ntasharp4.mp3": "fb8762aa8b7b9a29737261afff6a7e24",
"assets/web/assets/individual_notes/velocity_95/str_2/str2_fr0_ntb3.mp3": "7e29e969c05cb93a5c962dc299dd6d83",
"assets/web/assets/individual_notes/velocity_95/str_2/str2_fr15_ntd5.mp3": "f8a85a8bc27f872d3ef3da5f62a17bba",
"assets/web/assets/individual_notes/velocity_95/str_2/str2_fr13_ntc5.mp3": "5d694af89c52c017d96926fca06e8758",
"assets/web/assets/individual_notes/velocity_95/str_2/str2_fr8_ntg4.mp3": "54a63085dbdc934d1b42f311a950fa16",
"assets/web/assets/individual_notes/velocity_95/str_3/str3_fr15_ntasharp3.mp3": "3669b5eddafea80b505487c1177ecee2",
"assets/web/assets/individual_notes/velocity_95/str_3/str3_fr1_ntgsharp3.mp3": "edcab87a171126cf061c5324a7fc8fb1",
"assets/web/assets/individual_notes/velocity_95/str_3/str3_fr5_ntc3.mp3": "fd2146c9352ff0a578fcdbf3b3414f4e",
"assets/web/assets/individual_notes/velocity_95/str_3/str3_fr10_ntf3.mp3": "5646ced7cc7f99b4c6c84d4030725e79",
"assets/web/assets/individual_notes/velocity_95/str_3/str3_fr4_ntb3.mp3": "45c4c305332e6071f9a25ae587428754",
"assets/web/assets/individual_notes/velocity_95/str_3/str3_fr21_nte4.mp3": "42376fb83f3c9321b3ee7d54544b2bae",
"assets/web/assets/individual_notes/velocity_95/str_3/str3_fr9_nte3.mp3": "bc1b4ff60ad48a0b0fbbe3d2d42a6539",
"assets/web/assets/individual_notes/velocity_95/str_3/str3_fr0_ntg3.mp3": "59246da9879277b48f5f346158cd8bbb",
"assets/web/assets/individual_notes/velocity_95/str_3/str3_fr20_ntdsharp4.mp3": "3c6adbb4fb2d30e2f0a8eab222e34076",
"assets/web/assets/individual_notes/velocity_95/str_3/str3_fr19_ntd4.mp3": "09ac12f06fa04aef30a9aa530ac0da95",
"assets/web/assets/individual_notes/velocity_95/str_3/str3_fr11_ntfsharp3.mp3": "ca912338aa622a315e7bc50c909c75c9",
"assets/web/assets/individual_notes/velocity_95/str_3/str3_fr22_ntf4.mp3": "79778d37d7ad1b469721d22f1c4a6d03",
"assets/web/assets/individual_notes/velocity_95/str_3/str3_fr8_ntdsharp3.mp3": "871ae98637b60e1b927eb81e0e5d3271",
"assets/web/assets/individual_notes/velocity_95/str_3/str3_fr6_ntcsharp3.mp3": "ee4d6b32b9b7aa0b95eb532d71248cb9",
"assets/web/assets/individual_notes/velocity_95/str_3/str3_fr14_nta3.mp3": "00dd06e60d49dcb143500fc25528c9da",
"assets/web/assets/individual_notes/velocity_95/str_3/str3_fr12_ntg3.mp3": "07a7f84d612ac48ecd340ac60281f146",
"assets/web/assets/individual_notes/velocity_95/str_3/str3_fr2_nta3.mp3": "dd06484bd11442b07e52cacd64aa5f73",
"assets/web/assets/individual_notes/velocity_95/str_3/str3_fr7_ntd3.mp3": "034fb633e28cd586d141002f7c36b619",
"assets/web/assets/individual_notes/velocity_95/str_3/str3_fr17_ntc4.mp3": "e3b05a5135edf568b04d724cd1d36383",
"assets/web/assets/individual_notes/velocity_95/str_3/str3_fr23_ntfsharp4.mp3": "ac5342ccb4924c36e2ebd03835948d17",
"assets/web/assets/individual_notes/velocity_95/str_3/str3_fr16_ntb3.mp3": "94fd40bdec8f8e985bc6e4a0e550b89b",
"assets/web/assets/individual_notes/velocity_95/str_3/str3_fr18_ntcsharp4.mp3": "4eb79c117780c1b4d0e38f394c46e9f8",
"assets/web/assets/individual_notes/velocity_95/str_3/str3_fr3_ntasharp3.mp3": "bd5708b9914f673e6184d8d8f2670786",
"assets/web/assets/individual_notes/velocity_95/str_3/str3_fr13_ntgsharp3.mp3": "a9c1a10446d676c20fb797822c42c667",
"assets/web/assets/individual_notes/velocity_95/str_4/str4_fr14_nte4.mp3": "aee55aa7e791428faf1724b8810574d0",
"assets/web/assets/individual_notes/velocity_95/str_4/str4_fr20_ntasharp4.mp3": "68606be7e906f7b63112fe535d50c10c",
"assets/web/assets/individual_notes/velocity_95/str_4/str4_fr2_nte3.mp3": "5338c8b9368a3c0f4bf9edd1e5ebc08b",
"assets/web/assets/individual_notes/velocity_95/str_4/str4_fr11_ntcsharp4.mp3": "7fb4e88c752cf084343e28b1618ed571",
"assets/web/assets/individual_notes/velocity_95/str_4/str4_fr8_ntasharp3.mp3": "c2df4362c35ab677c9f5a1752362cfd3",
"assets/web/assets/individual_notes/velocity_95/str_4/str4_fr12_ntd4.mp3": "a03a924c21c2ba0d1971d9225e65e862",
"assets/web/assets/individual_notes/velocity_95/str_4/str4_fr9_ntb3.mp3": "288045b59102a324b7ec2d5b5ee309c5",
"assets/web/assets/individual_notes/velocity_95/str_4/str4_fr6_ntgsharp3.mp3": "627a731faa42d269897eb4c1b1df5a8c",
"assets/web/assets/individual_notes/velocity_95/str_4/str4_fr21_ntb4.mp3": "7d05969b957e225e1d0d4e0648f48296",
"assets/web/assets/individual_notes/velocity_95/str_4/str4_fr17_ntg4.mp3": "9e5ad731db6337eb3e533d96d8f80ccf",
"assets/web/assets/individual_notes/velocity_95/str_4/str4_fr7_nta3.mp3": "20e60e8936a5122acb345b57205cda5c",
"assets/web/assets/individual_notes/velocity_95/str_4/str4_fr13_ntdsharp4.mp3": "1e6f8df33fe1085d8dc51a63ed1387f9",
"assets/web/assets/individual_notes/velocity_95/str_4/str4_fr5_ntg3.mp3": "cf311e58616d3cb61665205df4e9ba78",
"assets/web/assets/individual_notes/velocity_95/str_4/str4_fr1_ntdsharp3.mp3": "03f5c6ee502b42a43ca699192572a182",
"assets/web/assets/individual_notes/velocity_95/str_4/str4_fr10_ntc4.mp3": "0d88c58cb70bc9e065aed2bbb50ce9f5",
"assets/web/assets/individual_notes/velocity_95/str_4/str4_fr0_ntd3.mp3": "599eba2489e43e37c3f3680a03ff5b0e",
"assets/web/assets/individual_notes/velocity_95/str_4/str4_fr23_ntcsharp5.mp3": "bdedd1dc0bc6d97435ec68c8feacd3a9",
"assets/web/assets/individual_notes/velocity_95/str_4/str4_fr3_ntf3.mp3": "b558259e5a4004bc89e52dccc0775e30",
"assets/web/assets/individual_notes/velocity_95/str_4/str4_fr18_ntgsharp4.mp3": "83eb0b80bd1259427b3aa6549dae3f8b",
"assets/web/assets/individual_notes/velocity_95/str_4/str4_fr22_ntc5.mp3": "96977bced944ff786330ffb18f7f70a2",
"assets/web/assets/individual_notes/velocity_95/str_4/str4_fr15_ntf4.mp3": "0c6ba4afc7398b20672e3e4f5c2ba329",
"assets/web/assets/individual_notes/velocity_95/str_4/str4_fr16_ntfsharp4.mp3": "b085a5d930960c5e2b1d4726a0569e2d",
"assets/web/assets/individual_notes/velocity_95/str_4/str4_fr4_ntfsharp3.mp3": "9de2c9ce2a7ad5d21aaf57efaafc1f34",
"assets/web/assets/individual_notes/velocity_95/str_4/str4_fr19_nta4.mp3": "c623eb973342fdee9033a976d533b0c1",
"assets/web/assets/individual_notes/velocity_95/str_1/str1_fr10_ntd5.mp3": "0f40f2cfe3724ac67d564c8117a49dee",
"assets/web/assets/individual_notes/velocity_95/str_1/str1_fr2_ntfsharp4.mp3": "b589d65a26ca65da841a864639a12720",
"assets/web/assets/individual_notes/velocity_95/str_1/str1_fr5_nta4.mp3": "db14f0aa69674e42bf5fb91ed58371ca",
"assets/web/assets/individual_notes/velocity_95/str_1/str1_fr11_ntdsharp5.mp3": "3f9984050f548a58972163cae252c5c6",
"assets/web/assets/individual_notes/velocity_95/str_1/str1_fr3_ntg4.mp3": "9315303495e1ef5ba9741a888a29403d",
"assets/web/assets/individual_notes/velocity_95/str_1/str1_fr15_ntg5.mp3": "0f54f39a3843c745b6efc5c61bff9b71",
"assets/web/assets/individual_notes/velocity_95/str_1/str1_fr7_ntb4.mp3": "c0d2b323749ecbb3ff08b24890bf085b",
"assets/web/assets/individual_notes/velocity_95/str_1/str1_fr0_nte4.mp3": "98d940c12d8e6bd5d79c97f50b69eaae",
"assets/web/assets/individual_notes/velocity_95/str_1/str1_fr9_ntcsharp5.mp3": "473e93d1de0e1fe15756eba16ede5cb5",
"assets/web/assets/individual_notes/velocity_95/str_1/str1_fr13_ntf5.mp3": "bf2dd06fdcbb3c6f15d8e6bff79b6a4d",
"assets/web/assets/individual_notes/velocity_95/str_1/str1_fr14_ntfsharp5.mp3": "c2ef39178edf21aaa2ee882d86771ee3",
"assets/web/assets/individual_notes/velocity_95/str_1/str1_fr6_ntasharp4.mp3": "7d3a68509fbe197c990c615a993da5d7",
"assets/web/assets/individual_notes/velocity_95/str_1/str1_fr4_ntgsharp4.mp3": "255918b219ede501dee4e6df835ba6b0",
"assets/web/assets/individual_notes/velocity_95/str_1/str1_fr12_nte5.mp3": "c30674b99e2c6dd0663bc49c3025efc8",
"assets/web/assets/individual_notes/velocity_95/str_1/str1_fr8_ntc5.mp3": "9604efa99679a4e011800df9c956484d",
"assets/web/assets/individual_notes/velocity_95/str_1/str1_fr1_ntf4.mp3": "07b5cfd645a796b6ee639c2389068d33",
"assets/web/assets/individual_notes/velocity_95/str_1/str1_fr16_ntgsharp5.mp3": "91dedb0343e12984dee956ff15952845",
"assets/web/assets/individual_notes/velocity_95/str_6/str6_fr3_ntg2.mp3": "bc0ce7717731d4450735d91e1bc69de0",
"assets/web/assets/individual_notes/velocity_95/str_6/str6_fr6_ntasharp2.mp3": "b3edf07565e7941e680293067894d2d6",
"assets/web/assets/individual_notes/velocity_95/str_6/str6_fr10_ntd3.mp3": "ec5fe951a9a4cf3b166fc5a2ebfca8ab",
"assets/web/assets/individual_notes/velocity_95/str_6/str6_fr18_ntasharp3.mp3": "2fc0f2636e2c0775ffc36671ed1ad7f3",
"assets/web/assets/individual_notes/velocity_95/str_6/str6_fr9_ntcsharp3.mp3": "061ecfb99ed2ab2fbfbfb56325b2c633",
"assets/web/assets/individual_notes/velocity_95/str_6/str6_fr23_ntdsharp4.mp3": "8b09f1b612a3aff5870244cbb8ba1aae",
"assets/web/assets/individual_notes/velocity_95/str_6/str6_fr15_ntg3.mp3": "8a501cfe0e3a12f5c6c2c5d0194c1f6d",
"assets/web/assets/individual_notes/velocity_95/str_6/str6_fr5_nta2.mp3": "412ae99e9acd700cd365d52121d7e9f6",
"assets/web/assets/individual_notes/velocity_95/str_6/str6_fr16_ntgsharp3.mp3": "ba03b9014f14c1b6c73f71071f090789",
"assets/web/assets/individual_notes/velocity_95/str_6/str6_fr22_ntd4.mp3": "4ab038c5e22b3d288671e66eaed28b6b",
"assets/web/assets/individual_notes/velocity_95/str_6/str6_fr2_ntfsharp2.mp3": "a5242d1e688b83aeab7a9b666b897645",
"assets/web/assets/individual_notes/velocity_95/str_6/str6_fr7_ntb2.mp3": "7992d37586519119abc661852c729124",
"assets/web/assets/individual_notes/velocity_95/str_6/str6_fr13_ntf3.mp3": "1e7acdfd80316daa468c6e64da9a1b56",
"assets/web/assets/individual_notes/velocity_95/str_6/str6_fr0_nte2.mp3": "930c66926ed4cc217277f6faa15672a5",
"assets/web/assets/individual_notes/velocity_95/str_6/str6_fr8_ntc3.mp3": "0c002a927fcfac1834b3a682db30cc9b",
"assets/web/assets/individual_notes/velocity_95/str_6/str6_fr20_ntc4.mp3": "d81b53e536ab9f59e1bfb6ca80518e15",
"assets/web/assets/individual_notes/velocity_95/str_6/str6_fr12_nte3.mp3": "46d51b849902225e93ac7760e5bb09b0",
"assets/web/assets/individual_notes/velocity_95/str_6/str6_fr1_ntf2.mp3": "083468bf6986d57c5db6e085ef84d38a",
"assets/web/assets/individual_notes/velocity_95/str_6/str6_fr11_ntdsharp3.mp3": "c0bdb1fed145440133d5b56037743073",
"assets/web/assets/individual_notes/velocity_95/str_6/str6_fr21_ntcsharp4.mp3": "39bb05d187ac38ab9da2c84d972cc914",
"assets/web/assets/individual_notes/velocity_95/str_6/str6_fr17_nta3.mp3": "752b9923bf4fb766fc41d077fac202ab",
"assets/web/assets/individual_notes/velocity_95/str_6/str6_fr14_ntfsharp3.mp3": "59bf1269c88c61d2de36cb8debf69eb9",
"assets/web/assets/individual_notes/velocity_95/str_6/str6_fr4_ntgsharp2.mp3": "763606be97d8f225989abd282bade1b4",
"assets/web/assets/individual_notes/velocity_95/str_6/str6_fr19_ntb3.mp3": "199faf9774bf6aa86f50ea5d50941394",
"assets/AssetManifest.json": "951193a3c3dccc4babf9c7fd6a22114d",
"assets/NOTICES": "44bd55b63e831349f4eab8badcdbf86a",
"assets/FontManifest.json": "f16e33b4f5a6eee00c153ad5cc1440bd",
"assets/AssetManifest.bin.json": "2dd817a14074b805f23ab617e042aea0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/reg_page/fonts/SourceSans3-Regular.ttf": "72a368e7e2bcbd83f75c763aa19d8bf4",
"assets/packages/reg_page/fonts/SourceSans3-Bold.ttf": "91e42896d12340dc2039cf7098cf6682",
"assets/packages/reg_page/fonts/SourceSans3-Italic.ttf": "f3045d777d56404bc6cebb77199e360f",
"assets/packages/reg_page/fonts/SourceSans3-SemiBold.ttf": "f8c4ac5aa4a74e615a13bf3c902506af",
"assets/packages/reg_page/assets/images/plus.png": "09d06816391f21a591fbc6a45713761b",
"assets/packages/reg_page/assets/images/jhg_sign.png": "1da5e91071467df481efc575bdbfcda6",
"assets/packages/reg_page/assets/images/icon_cross.png": "e5a63e73c7543e345b28a755b04dbd44",
"assets/packages/reg_page/assets/images/jhg_background.png": "f6f145eee8df2187375f222c8e312f62",
"assets/packages/reg_page/assets/images/jhg_logo.png": "38409171514ad98704c2d54ff057ea66",
"assets/packages/sn_progress_dialog/images/cancel.png": "be94b63af32e39fabad56e2cab611b4b",
"assets/packages/sn_progress_dialog/images/completed.png": "4f4ec717f6bb773c80db76261bb367c3",
"assets/packages/flutter_jhg_elements/fonts/SourceSans3-Regular.ttf": "72a368e7e2bcbd83f75c763aa19d8bf4",
"assets/packages/flutter_jhg_elements/fonts/SourceSans3-Bold.ttf": "91e42896d12340dc2039cf7098cf6682",
"assets/packages/flutter_jhg_elements/fonts/PlusJakartaSans-Regular.ttf": "f539ae4a8884822210a4553cc88ca3dc",
"assets/packages/flutter_jhg_elements/fonts/SourceSans3-Italic.ttf": "f3045d777d56404bc6cebb77199e360f",
"assets/packages/flutter_jhg_elements/fonts/SourceSans3-SemiBold.ttf": "f8c4ac5aa4a74e615a13bf3c902506af",
"assets/packages/flutter_jhg_elements/fonts/alarm_clock.ttf": "2803116d50a5be32e5435aba7d4bb941",
"assets/packages/flutter_jhg_elements/assets/reset.svg": "6117c4dbe4b612a6381f99123730517f",
"assets/packages/flutter_jhg_elements/assets/svg_new_play.svg": "50526ae1f7d617fcb565b5608811bd91",
"assets/packages/flutter_jhg_elements/assets/svg_pause.svg": "d238ff1165d8424694e6b68b1ff58a34",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "c6d738089e6afe37ef1205a839689e29",
"assets/fonts/MaterialIcons-Regular.otf": "b299c8bd6047d2a7247ccecfbf53093a",
"assets/assets/images/plus.png": "5c92121737a9763cbbe65d1524a5db6b",
"assets/assets/images/minus.png": "815c01313557fe49a2ee0fcfa95cce2e",
"assets/assets/images/ph_metronome-light.svg": "ca81af7c3d8095d1af6b5b63bebc5d3b",
"assets/assets/images/bass.png": "d9509fdba1e9510170c5f053f962ffae",
"assets/assets/images/arrow_down.png": "3acc7884e0e257963fbc9ccb5ccbb59c",
"assets/assets/json/Arpeggio.json": "16a75e6405743af96e847f33fb374eb7",
"assets/assets/json/ScaleDictionary.json": "3f0ee818d65b9d11680b58807bba223a",
"assets/assets/metronome/logic1.mp3": "99a6b973ab1c6e117e3ec3b931f98771",
"assets/assets/metronome/logic2.mp3": "f90da22e0e289e329733adee59c3b755",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
