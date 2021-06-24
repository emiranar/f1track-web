'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "d6be2aec7fb7d8ad42bd80fcdfc040b1",
".git/config": "78a0fe21a05ada7e781e8bbcfb8409ee",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b2f19c41c7c3d0e06d0e0180c90f6a28",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0c85b08aff62b7cad28729c19e578309",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e006f9e6fbf79521426626fbdfdf985e",
".git/logs/refs/heads/master": "e006f9e6fbf79521426626fbdfdf985e",
".git/logs/refs/remotes/origin/master": "ab89297ef6c9eb16a7e27e04352602d2",
".git/objects/00/156fc52ac61664f7d9a1bbda666505d8268736": "125ce58de11cfd752b2fdc8fc3b54561",
".git/objects/08/acc470624280132531cba410cdbbc3db0f297c": "529ec395254c9dfbd5a72824dde05999",
".git/objects/08/d061238bc13a94f839162b1f13dd36cf9264e3": "629502d0b87b6df23a73910bad84b363",
".git/objects/09/83fc8771f3bab8c24ae24289956e6a77d444f2": "2161165bbc9c1324a78c865bb6b38d79",
".git/objects/0e/0dd3cf75b9b9d232163a39d0b29b84622a1a0c": "a20857590b8808370dba7d363d8c6f7c",
".git/objects/0e/6592d4b54fc3fe5c9786a50a7929efd5170185": "9a660742c247acfd576b3ba3a23dfdb2",
".git/objects/0f/75a0abcfbcb40724cf1814709bcc6e60ae4a63": "ebc260a62c92550b1752d5389bf063b9",
".git/objects/1b/6b8dd2ddeb262829e74b64ef63d2d7348c1260": "dddb7e515715933b6657e9c727c007b2",
".git/objects/1c/932fd564cfc6bc9973303bca83ea76e8916def": "b44ac7f95af99f437010e4db93b14efc",
".git/objects/1d/e5f661cfaa454d10bfb49ca81b9b7fcf55a1f0": "37995a9d70bcfbb4792ca8eb0215de16",
".git/objects/1e/20a747ce1a8ad150cad9adf4ed1cda172e48f6": "296809999c3ffd2a362e9c788000fc0e",
".git/objects/1e/8de33096e6af2a609ee55c54bbe53a9963c445": "e4047e1221715fc27377091b687f755c",
".git/objects/1e/9172ae78a361fbb015c1e809173961dfb7b82b": "613fa0aa328771727ffee6e9475c2d48",
".git/objects/1f/21f83609abbc0146b67346921718a0063bb85b": "f0e07c02b9625f3a1aa48fe64d889c13",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/2c4b0c89218cba22f52898e0db199688b41925": "828ad2c9ce89ec9f89df33f4212e4da1",
".git/objects/23/cfc3f3d7996a24e4bb7baa1a53015e160b2476": "6f393eb5fb97adf7e0e3fc02983437a2",
".git/objects/23/e4019b952e231509784f5838bf9c2638311507": "329d38440257ac41384a61fa263de2eb",
".git/objects/24/7e15f74f0ea5ad94f03eff561d3d0d6bf0673f": "878e44cb8de7d96a4a2eefde7e1abffc",
".git/objects/29/92d04560a01a5bb5a9ccfddca4b4132f8e9e11": "d6126edc807fcfe9bb1c8ece464c3899",
".git/objects/29/b3c806bc9f404013686fefdcc9d2f6dc2fac20": "8213289bdbdb64de4acf23b55fec21a0",
".git/objects/31/35f9bf319b5be7023433bcbc4bd4cb98cc7230": "f3551bb6fc5fa448f583b5f66f884f2f",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/80fdcccd25aef120ad2cafd420c1be1d695429": "dc16b440105168ba9c69e9829e1eb1a2",
".git/objects/35/9871f91ab98c9ef37e3f09f20290282da2f563": "f34adcd8854417051a5f9161dabe4b8e",
".git/objects/37/f370f0d7d31e10f2e5c805f9f61d285feba567": "49a3b4125ce0437d40b63554a7cd4e42",
".git/objects/39/ba41629e2f911067e1c5d2964ea6dde3ee80dd": "d2b41e6d1b73b0e5af7f61bdfae8f570",
".git/objects/3c/49cb110a207177bff1559cbc06c1191f36a3b8": "6317bc989336d30745fab24b196d1a12",
".git/objects/40/6290b724b1bd64e2fb85564bd6dba4f5fac9e6": "5ffbf6b0e8597f223a7e8905e3dae89e",
".git/objects/43/e32e8e2851b74fe5dfe36af726ef03211c8dff": "b9a974d9ec13db37757bf44048ac1ad4",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/2b6e21a0da07abca268104bff8ea056266b94a": "b273f53ae6f8f5faf5bfa68b08777d1b",
".git/objects/4f/d4606b9284008a543eb7dfbaf78071e48adef4": "fc1e4967d59bda5625e69b36204e2a54",
".git/objects/4f/da383077f5eec11cb0c51d45271e9678a16eac": "a13eb0abef82677d326e8bf6c57bbbfe",
".git/objects/54/be3a3b373291847c59c3ea9d4011b03ee9b872": "076c9148b0e7dc6ca2b88dd1521dbd8d",
".git/objects/58/28c854796bcf202f55e8c9776da815c65dfeef": "6754a0ed5a16d2d0be8e718cdc292843",
".git/objects/5b/75528f1aebdd3fae28cf3177b8dd7ba9c8c35f": "0ea338a8b9f493369678e5d495f98c66",
".git/objects/67/76c757ce49104b5dc08e874975ba3e337cc289": "0fabf8910cd52b2ceb5fbc277b2cc69a",
".git/objects/6a/845ed67a642158ee9492ade52e80dcbc77832e": "e65ed9562c9bbd466a0fd78fdf5765a1",
".git/objects/6c/5f084c1a23bc8f40681ad73c6a818bd4f4fc56": "a1253d6b898dcdf6e28e6a7dc2510019",
".git/objects/6c/b74610c10c4373cf1b66e8a1f6bf6358a9717c": "47fcff1ded6a973f7e164f6ada034228",
".git/objects/6f/a2c18a0ea5fb773b01cb8ee2daf9742959ceba": "ba6d5f2132ce2980c17e527403c2d48a",
".git/objects/72/aa5a98f036fe5c274f46c083189c87011f275b": "e844f0303833d00b58dd835780c6716b",
".git/objects/74/17db907754a121c82fec7e98a19c812ee7034b": "7f038a845fb531a53fa7e3e094d35dd5",
".git/objects/77/661f689076bfb9e01546832ce7f45356948a3d": "60266cab18409a4151cb9fe9e67eb593",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/ac32be885538e1d8d2c20519974d7baca90795": "f61d6c478be0a2055c6c6f41282e264a",
".git/objects/7f/7a93689ce08a541d42f72066c22b1d887a58e1": "60eda8c96d2071af10d0aeb79be4f3c7",
".git/objects/80/71d6ac5acb350a26e76dc4b608e961ca16670e": "bf756a6a673b6ae0efe1118b7020d23a",
".git/objects/83/c66271512b64ecf302ba5bc990c9319deb19c0": "9936790e01b5182fbbe50fc0bde6088f",
".git/objects/85/51eea4089fbac500032e61d640fda01320f9ca": "7131cd338e536084966e3476d0a397df",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/ec7ed7056a5e6edec4b14ad8d593b54afc596b": "576581a935e32225c37b62533338f9af",
".git/objects/91/92592c7b842810eeea953ff940faed99f0e5a9": "800907f457895d83991f2648c4dcb5bc",
".git/objects/92/40f5e9fd017ddbaffe8fb7ba9101f792f96509": "550e84c8b38c39c090b3631f56e95d3e",
".git/objects/92/a73dad67a899cdea70740f429c76e131b6268b": "884ab703c824cce22c12baaaa322288a",
".git/objects/95/28da13af9efbef7f288d54bdbe7448cda355b9": "d61ace54b3be62d4cbb6b704aedc4aa4",
".git/objects/97/2015234afa21439806f0dd8e97f49aa4e012f8": "178c028e1d2294e11ac42b790cb42184",
".git/objects/97/325e820c967275493b54f78964e684c26582fd": "30eccd806a968e6fec866ccfd6c913be",
".git/objects/9d/a5be3a5de5a5eb94025c0bb07a3ba926d8aaef": "01a3bbe42af8bfd90cf8a794be33eba5",
".git/objects/9f/5b33413a1e7a5c6a688a7c88a6f3dff8290698": "1d366651207250356c25f6844322a70b",
".git/objects/a0/715efe52561e621de67a1dec3465a7036684a6": "9618a338059ebcb72b6a52575e451fcd",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/0db45434bf2d9643f75e19cc4eb5519e16ebf2": "49f0653c4df3b3619a38798040365e9e",
".git/objects/a4/df1ffa993e39eeb9d90f1d4a1359317d66a59b": "3d8f3460da1916ab93c218131b843a02",
".git/objects/a5/65b60d9a422ea3bda77e8271a9d433d23ece20": "186b2fea66e8cc42e6cd86f872951c3f",
".git/objects/a6/a519e60279e356599772ba7eff2ff1c55a9d3e": "d2aa5442fd497a08250b17d54196c46b",
".git/objects/a7/dc383cfa98db5b86af659ef35bda3b40942a0f": "cdb74709216a6e68021471826c5671a7",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/13f97fc320cc5d112c24b563dd4dcff72c6fcb": "3c563ef596ccf7879316e18b272babc5",
".git/objects/a9/dd75a5357e41d3fd6fc823afdb3c2647ed6cb3": "8e6f75e80dec3af9ae6adb3131e911aa",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/7934993b3d87c4a153f42cc469618454351a14": "5554b1d4e7dce35b6efec9f5646d7bf8",
".git/objects/ac/bdf70931a48c071adc06d22349a7a1fad9c36b": "f2eac0b9a52a1bff2b7a15496db46e3e",
".git/objects/ac/c93207d814d71b9486b136e125d0d9325c5c80": "79eff9f620f034fb5a1a624d4db46359",
".git/objects/ad/4a6ff5bc3f6a444c13dc2339378c160150050b": "954523e400cf4740ec7987b9e8323cc6",
".git/objects/ae/502d344388576010b735222798e066e4f3f1a9": "458f8be0501c4f72e8f8f596a474966e",
".git/objects/ae/bc4c70d49228b536ae6e5b6b43240395902e95": "e659cc2f5ea637b23bbba9c5a99bb579",
".git/objects/b5/0329e828d72d761af8dfc893713bfc3f8c6a6a": "d77b8ebb65fd0f046516551d92f7fb88",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bd/962383abfa868ba7febdf731ab8381c672b291": "5bb43b37267ee6e6316e2ac3cac9240f",
".git/objects/bf/a32f9fc05d364f53ebde7caa50ed1e1a0f48f1": "c817527b97c3359771815ddfbc3f8c1a",
".git/objects/c5/f29a10d779ddaaeea76633b9557c21b0cd7696": "73887fb601e38327a214d19ba7c2866d",
".git/objects/ca/b8d823c5f150701f8dc329c83fa723ad07d0c0": "0ff4ca91679085133c3131337d105ddd",
".git/objects/cc/54a1fa3e430254c84247ec2d06020a1fa10d15": "068341132ffc15ec81baa244e9ad3779",
".git/objects/d0/cd50cae758f4b4abcf29d53772d6f935078436": "69df2a82ad69362aec5c2a1e0a5a729c",
".git/objects/d1/97804c2b0281cfde6c11ed60bedbbfa9edcf8b": "e0ad96733164db4500764e3c8d0b0d2c",
".git/objects/d9/a9aa445db7bacd165e8384a0b0d18c83968a53": "26ce9c503c0569ac26243e6d26d6efce",
".git/objects/d9/e4347e949137f41c041aa307d1be8aafe04181": "5d411b48022fcd923608155f0c43dfa0",
".git/objects/e4/38417c50a82d48f81837b92acf913fa1f8975a": "99cae5cb3acc51e3781b19f7f5b2c283",
".git/objects/e4/9be01c4312e70d57501da7ac703adaa6def274": "187fe1f08d45e48aed04e846dc42996b",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/8db2902bd65d5800237d04df8428b403d75bb4": "3cc50f3a3f21e920243a20f15fe3656f",
".git/objects/eb/f71d7ea95451a32f705aae7b0cb302f33d6f66": "dcdc040b07d03c433fe9c2a1566c4d4e",
".git/objects/ee/d3cafba2e2bb3b6c42480d1f2db001e35ed44a": "fdf31d2c34004f749f4dcd3083fe287f",
".git/objects/ef/90960078078a20f29e1661f7b80455aa709932": "d95155b7b7dbc69e809a7ab6bde275bc",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f3/6025631a72de6d6e8e6d42e1176c7521f7a847": "a2a978f2e520f9449e890e9cf5662ba2",
".git/objects/f8/bf8d5e1363c0ab0baebe45621bdc6146931c18": "0ed07c5d497275d32babcd0343d61ec9",
".git/objects/fd/9d71f0f0c8d5c92342f94f84408d61211b7cf1": "d27cafe407505fbcbf3e8b2b8f43ea23",
".git/ORIG_HEAD": "1499f0d9059c10855aede9c13c9de7a5",
".git/refs/heads/master": "37617feaf4ed0292932dce77bd98877b",
".git/refs/remotes/origin/master": "37617feaf4ed0292932dce77bd98877b",
"assets/AssetManifest.json": "f33d629befd8098fdcf2ab00ca64684f",
"assets/assets/images/Circuits/albert_park.png": "4af7c422e96f3840d53cb8dc3a3880b3",
"assets/assets/images/Circuits/americas.png": "fa0d9ef3742e97cc9e2e02d1df0379eb",
"assets/assets/images/Circuits/bahrain.png": "1d1ad5529981efb373e7b7ee0ffc4dad",
"assets/assets/images/Circuits/BAK.png": "6f3cb9ba6a2fb2105d1092e4c618382c",
"assets/assets/images/Circuits/catalunya.png": "cd49dcf68b55399a2091d727ffdecb90",
"assets/assets/images/Circuits/hungaroring.png": "55f72b1517695027b9186124d8e76f91",
"assets/assets/images/Circuits/imola.png": "55a8bf3b515ba8383a5c2084e7f34bf5",
"assets/assets/images/Circuits/interlagos.png": "ceab42bc24eb22b3b49136ca16db51bc",
"assets/assets/images/Circuits/jeddah.png": "8712ad746263a10cb209c2700fb0766f",
"assets/assets/images/Circuits/marina_bay.png": "df8458ee28cba81a59e57b26ce03f594",
"assets/assets/images/Circuits/monaco.png": "2cd5eca5d652402a548c5a2774d7a50f",
"assets/assets/images/Circuits/monza.png": "077af0905d009fd8a8d847b163853d87",
"assets/assets/images/Circuits/portimao.png": "c63fb3a9d7d384c3c8f14cfe1877778b",
"assets/assets/images/Circuits/red_bull_ring.png": "585c8e895e64592827fa7c4a8f07cd6a",
"assets/assets/images/Circuits/ricard.png": "b51572de0ad4eefdcac28f084d159247",
"assets/assets/images/Circuits/rodriguez.png": "0497eec031365fdaeecc5e5721e619c8",
"assets/assets/images/Circuits/silverstone.png": "27df614215d103e4248f0335d8b8158d",
"assets/assets/images/Circuits/sochi.png": "4488e1c762cc5a2a967683e6ddddfa81",
"assets/assets/images/Circuits/spa.png": "5f83d4f9e2d3646df6623ee33c628861",
"assets/assets/images/Circuits/suzuka.png": "9e08529a45c5d5654a513ffb6ef2386b",
"assets/assets/images/Circuits/yas_marina.png": "f54788c558342e9704ae5283c98bb359",
"assets/assets/images/Circuits/zandvoort.png": "d25d4e52b7ad303d7a43f5832459237c",
"assets/assets/images/news.jpg": "b015096295419293aaa3d645c3f9eaf8",
"assets/assets/images/Pilots/ALO.png": "642bb5b8092fc9d02c4654ad4be5f0f2",
"assets/assets/images/Pilots/BOT.png": "602aebc3f88a627b8723b67e436c11b6",
"assets/assets/images/Pilots/GAS.png": "f4dff23c6f54d9cc4a50ad1f334b6420",
"assets/assets/images/Pilots/GIO.png": "5870920cf3a305e232d8a790b4c59593",
"assets/assets/images/Pilots/HAM.png": "a7c470d143e9f757b54e1a26f53478e4",
"assets/assets/images/Pilots/LAT.png": "36d184470d2fc8d6905b99ca0ef744e6",
"assets/assets/images/Pilots/LEC.png": "d2f0c0fa2027c32ee8ddc974c3f8d6c7",
"assets/assets/images/Pilots/MAZ.png": "fe575628af50b9e502f1f2163e2bf66b",
"assets/assets/images/Pilots/MSC.png": "124440f2d56b83f0c1a0663ce221e158",
"assets/assets/images/Pilots/NOR.png": "a57b5836bd23089b68b5778f5b4be34e",
"assets/assets/images/Pilots/OCO.png": "8ddc35732a26a0533c1e2541b7475db8",
"assets/assets/images/Pilots/PER.png": "43684363c7b4cdf93744fdf847457e6d",
"assets/assets/images/Pilots/RAI.png": "55d264cfd5d3adcf02671892db3f1542",
"assets/assets/images/Pilots/RIC.png": "a340f049d971dc8f4f7750b27a209d24",
"assets/assets/images/Pilots/RUS.png": "7fd5e3e70fcec526b1628cfb6a3748ad",
"assets/assets/images/Pilots/SAI.png": "e3181e1911cbb6058cb16e5961cad995",
"assets/assets/images/Pilots/STR.png": "effba0b7519348eb72e228ea892c8707",
"assets/assets/images/Pilots/TSU.png": "0159908c843ad21656e88bffd78fc5a4",
"assets/assets/images/Pilots/VER.png": "459958b567e44df8d2118eb3eca66bc1",
"assets/assets/images/Pilots/VET.png": "74cd38da78ff966bbf444dce1bf67fef",
"assets/assets/images/Teams/alfa.png": "6ba6efa41c1b3a54055c53fbc458d820",
"assets/assets/images/Teams/alphatauri.png": "f1869df9d0488fe5f8bbec28ac415e61",
"assets/assets/images/Teams/alpine.png": "6ef77ac36eb59607f239ba142023e1f5",
"assets/assets/images/Teams/aston_martin.png": "a20c134a9e5fdfc3f87846234bef6598",
"assets/assets/images/Teams/ferrari.png": "0e339c477b44a0a77b9c6c14ae8b4b1c",
"assets/assets/images/Teams/haas.png": "fc22ff7cf5bce64731267ad0ad17c436",
"assets/assets/images/Teams/mclaren.png": "2e0458b0b81e5d1ebfd7dc06820c3d92",
"assets/assets/images/Teams/mercedes.png": "5bf10c8d4e825c1994f3b14b727076ea",
"assets/assets/images/Teams/red_bull.png": "fe86fcb75b6728f419a55acf01a217be",
"assets/assets/images/Teams/williams.png": "4ee45388401470d319a75e195525be23",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "b89a755ff95282823011d546da15c57b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "2fc21a13f65f23b7d4d4e59bcb98241c",
"/": "2fc21a13f65f23b7d4d4e59bcb98241c",
"main.dart.js": "5d16437e6a9536af7cc57a4f8ccfa30d",
"manifest.json": "625425794b1bccec519ec6725eb58f16",
"version.json": "d661ed8abc27486b7cf9f2a2930c0c3a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
