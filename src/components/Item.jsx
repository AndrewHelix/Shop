function Item(props) {
  const {
    mainId,
    displayName,
    displayDescription,
    displayAssets: [{ full_background }],
    price: { finalPrice },
  } = props;

  return (
    <div className="card" id={mainId}>
      <div className="card-image">
        <img src={full_background} alt={displayName} />
      </div>
      <div className="card-content">
        <p className="card-title">{displayName}</p>
        <p>{displayDescription}</p>
      </div>
      <div className="card-action">
        <button className="btn">Buy now</button>
        <span className="right" style={{'fontSize': '20px'}}>{finalPrice}$</span>
      </div>
    </div>
  );
}

export { Item };

// const arr = [
//   {
//     name: "State",
//     value: [
//       {
//         mainId: "EID_BeHere_8070H",
//         displayName: "Get Gone",
//         displayDescription: "Слишком много макияжа.",
//         displayType: "Эмоция",
//         mainType: "emote",
//         offerId:
//           "v2:/38dfde6ffa2a040410db63e802d60776cd45ea86e8bf936f44f913bf76c8851a",
//         displayAssets: [
//           {
//             displayAsset: "DAv2_EID_BeHere_8070H",
//             materialInstance: "MI_EID_BeHere",
//             url: "https://media.fortniteapi.io/images/displayAssets/v2/DAv2_EID_BeHere_8070H/MI_EID_BeHere.png",
//             flipbook: null,
//             background:
//               "https://media.fortniteapi.io/images/cosmetics/777abc017cfc9488103ea24336cd682f/v2/MI_EID_BeHere/background.png",
//             full_background:
//               "https://media.fortniteapi.io/images/cosmetics/777abc017cfc9488103ea24336cd682f/v2/MI_EID_BeHere/info.ru.png",
//           },
//         ],
//         firstReleaseDate: "2022-02-19",
//         previousReleaseDate: null,
//         giftAllowed: true,
//         buyAllowed: true,
//         price: {
//           regularPrice: 500,
//           finalPrice: 500,
//         },
//         rarity: {
//           id: "Rare",
//           name: "РЕДКИЙ",
//         },
//         series: {
//           id: "CreatorCollabSeries",
//           name: "Звёздная серия",
//         },
//         banner: {
//           id: "New",
//           name: "Новинка!",
//           intensity: "High",
//         },
//         offerTag: null,
//         granted: ['{audio: null, description: "Слишком много макияжа."…}'],
//         priority: -1,
//         section: {
//           id: "Featured",
//           name: "Рекомендации",
//           landingPriority: 70,
//         },
//         groupIndex: 0,
//         storeName: "BRWeeklyStorefront",
//         tileSize: "Normal",
//         categories: ["Panel 01"],
//       },
//       "{banner: {…}, buyAllowed: true, categories: Array(1…}",
//       "{banner: {…}, buyAllowed: true, categories: Array(1…}",
//       "{banner: null, buyAllowed: true, categories: Array(…}",
//       "{banner: null, buyAllowed: true, categories: Array(…}",
//       "{banner: {…}, buyAllowed: true, categories: Array(1…}",
//       "{banner: null, buyAllowed: true, categories: Array(…}",
//       "{banner: null, buyAllowed: true, categories: Array(…}",
//       "{banner: null, buyAllowed: true, categories: Array(…}",
//       "{banner: null, buyAllowed: true, categories: Array(…}",
//       "{banner: null, buyAllowed: true, categories: Array(…}",
//       "{banner: null, buyAllowed: true, categories: Array(…}",
//       "{banner: null, buyAllowed: true, categories: Array(…}",
//       "{banner: null, buyAllowed: true, categories: Array(…}",
//       "{banner: null, buyAllowed: true, categories: Array(…}",
//       "{banner: null, buyAllowed: true, categories: Array(…}",
//       "{banner: {…}, buyAllowed: true, categories: Array(1…}",
//       "{banner: {…}, buyAllowed: true, categories: Array(1…}",
//       "{banner: null, buyAllowed: true, categories: Array(…}",
//       "{banner: null, buyAllowed: true, categories: Array(…}",
//       "{banner: null, buyAllowed: true, categories: Array(…}",
//       "{banner: null, buyAllowed: true, categories: Array(…}",
//       "{banner: {…}, buyAllowed: true, categories: Array(1…}",
//       "{banner: {…}, buyAllowed: true, categories: Array(1…}",
//       "{banner: {…}, buyAllowed: true, categories: Array(1…}",
//       "{banner: null, buyAllowed: true, categories: Array(…}",
//       "{banner: null, buyAllowed: true, categories: Array(…}",
//       "{banner: null, buyAllowed: true, categories: Array(…}",
//       "{banner: null, buyAllowed: true, categories: Array(…}",
//       "{banner: null, buyAllowed: true, categories: Array(…}",
//       "{banner: null, buyAllowed: true, categories: Array(…}",
//       "{banner: null, buyAllowed: true, categories: Array(…}",
//       "{banner: null, buyAllowed: true, categories: Array(…}",
//       "{banner: null, buyAllowed: true, categories: Array(…}",
//       "{banner: null, buyAllowed: true, categories: Array(…}",
//       "{banner: {…}, buyAllowed: true, categories: Array(1…}",
//       "{banner: null, buyAllowed: true, categories: Array(…}",
//       "{banner: null, buyAllowed: true, categories: Array(…}",
//       "{banner: null, buyAllowed: true, categories: Array(…}",
//       "{banner: null, buyAllowed: true, categories: Array(…}",
//       "{banner: null, buyAllowed: true, categories: Array(…}",
//       "{banner: null, buyAllowed: true, categories: Array(…}",
//       "{banner: null, buyAllowed: true, categories: Array(…}",
//       "{banner: null, buyAllowed: true, categories: Array(…}",
//       "{banner: null, buyAllowed: true, categories: Array(…}",
//       "{banner: {…}, buyAllowed: true, categories: Array(1…}",
//       "{banner: null, buyAllowed: true, categories: Array(…}",
//       "{banner: null, buyAllowed: true, categories: Array(…}",
//       "{banner: {…}, buyAllowed: true, categories: Array(1…}",
//       "{banner: {…}, buyAllowed: true, categories: Array(1…}",
//       "{banner: {…}, buyAllowed: true, categories: Array(1…}",
//       "{banner: {…}, buyAllowed: true, categories: Array(1…}",
//       "{banner: {…}, buyAllowed: true, categories: Array(1…}",
//       "{banner: null, buyAllowed: true, categories: Array(…}",
//       "{banner: null, buyAllowed: true, categories: Array(…}",
//       "{banner: null, buyAllowed: true, categories: Array(…}",
//       "{banner: null, buyAllowed: true, categories: Array(…}",
//       "{banner: {…}, buyAllowed: true, categories: Array(0…}",
//       "{banner: null, buyAllowed: true, categories: Array(…}",
//       "{banner: null, buyAllowed: true, categories: Array(…}",
//     ],
//     subHooks: [],
//     hookSource: {
//       lineNumber: 32,
//       functionName: "Shop",
//       fileName: "http://localhost:3000/main.c31553dc4951e1c4bbaf.hot-update.js",
//       columnNumber: 76,
//     },
//   },
//   {
//     name: "State",
//     value: false,
//     subHooks: [],
//     hookSource: {
//       lineNumber: 33,
//       functionName: "Shop",
//       fileName: "http://localhost:3000/main.c31553dc4951e1c4bbaf.hot-update.js",
//       columnNumber: 80,
//     },
//   },
//   {
//     name: "Effect",
//     value: "ƒ () {}",
//     subHooks: [],
//     hookSource: {
//       lineNumber: 34,
//       functionName: "Shop",
//       fileName: "http://localhost:3000/main.c31553dc4951e1c4bbaf.hot-update.js",
//       columnNumber: 51,
//     },
//   },
// ];
