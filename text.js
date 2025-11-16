/* The code snippet is exporting an array of objects named `scenes`. Each object in the array
represents a scene and contains the following properties: */

/**
 * An array of scene objects representing different sections with associated media and transitions.
 * @typedef {Object} Scene
 * @property {string} text - The main text content for the scene (usually Arabic).
 * @property {string} video - Path to the background video file. Empty string if no video.
 * @property {string} audio - Path to the audio file. Empty string if no audio.
 * @property {string} transition - Specifies transitions (typically "top bottom").
 */

/**
 * scenes is an array containing each scene's data for the scroll-driven presentation.
 * @type {Scene[]}
 */

export let scenes = [
  {
    text: `أول وأهم حاجة، كل سنة وانتي طيبة يا حبيبة يارب تكون سنة مليانة فرحة وانجازات اليوم اللي اتولدت فيه ارق واجمل بنت  يوم زي ده لازم نحتفل بيه لأنه بيذكّرني قد إيه وجودك مهم`,
    video: "/vanillacake.mp4",
    music: "/cutie.mp3",
    cover: "/cutie.png",
    transition: "top",
  },
  {
    text: `Happy birthday, my lolipop 
يوم ف السنة ومش بيتكرر يارب تفرحي بيه وبالكلام اللي هياجيلك منه مع صحباتك و اللي بتحبيهم النهردة انتي بطلة اليوم وحقك يكون كل التركيز عليكي كل سنة وانتي معانا وبصحة وسلامة
`,
    video: "/whitecake.mp4",
    music: "/attention.mp3",
    cover: "/attention.png",
    transition: "top bottom",
  },
  {
    text: `أكيد انتي عارفة إني مش أحسن واحد يكتب كلام معبر بس حبيت أقولك إني كنت مبسوط بعلاقتنا الأيام اللي قضيناها مع بعض كانت جميلة مش عارفة قد ايه كنت بفرح برسالة بسيطة منك مش مهم الكلام عن ايه المهم انه منك وعارف انك كنتي ديما معايا كان وجودك جنبي كفايا يفرحني حتى من اي حاجة`,
    video: "/bad_wither.mp4",
    music: "/Moonlight(MP3_160K).mp3",
    cover: "/Moonlight_2.jpg",
    transition: "top",
  },
  {
    text: `لسه بفتكرك فكل مرة اتفرج فيها علي فلم او اسمع اغنية او احب اتكلم مع حد فويساتك الغبية و استيكراتك والمرات اللي كنتي بتفضفضي فيها وكنتي عارفة اني مش هقدر اساعد او اقولك نصيحة بس بردو كنتي بتحكيلي بفتكر كل لحظى غبية وكل مرة ضايقتك فيها عشان اسمعك وانتي مضايقة او ونتي بتحضكي وكل مشوف ايدي والدبلة افتكر انك اول واحدة بعتلها لما جبتها وورتلها كل التفاصيل دي لسه عايشة في بالي، وبتخليني أفتكر قدي إيه كانت صداقتنا مميزة. `,
    video: "/bad_wither.mp4",
    music: "/ana_al3ash8.m4a",
    cover: "/ana_al3ash8.jpg",
    transition: "bottom",
  },
  {
    text: `مش عارف علاقتنا بقيت إزاي دلوقتي الكلام قل وحتى السلام أو السؤال عن بعض بقى صعب ده مضايقني شوية مش عشان أنا زعلان منك بس عشان بحس إننا بقينا بعيد عن بعض حتا معدناش صحاب الشات بيقعد بالايام مبيتفتحش ولو مبعتش مش هيتفتح حتا لما ابعت بيكون ديما الرد بسيط والكلام بيتقفل معرفش ده بسببي ولا انتي اللي اتغيرتي مع الكل ومعديش عاوزة تتكلمي ممكن اكون ببلاغ بس بجد معدش عارف ليه مش بتتكلمي حتا لو رسالة واحدة `,
    video: "/forest.mp4",
    music: "/ana meen.m4a",
    cover: "/ana meen.jpg",
    transition: "top bottom",
  },
  {
    text: `لسه نفسي علاقتنا ترجع على الأقل نكون أقرب شوية من اللي احنا فيه دلوقتي كنت أتمنى نقدر نحافظ على علاقتنا حتا لو بشكل بسيط مش حابب احس إنك معديش عوزاني وني معدليش وجود عندك أنا دايمًا هنا ليكي، حتى لو مش محتاجة حاجة مني الصداقة دي مهمة بالنسبة لي ومش عايز تبقي ذكرة وخلصت  شكراً انك لسا موجدة`,
    video: "/night_sea.mp4",
    music: "/i wanna be yours.m4a",
    cover: "/i wanna be yours.jpg",
    transition: "top bottom",
  },
];

export let HeroText = [
  {
    x: 0,
    y: -130 * 1.5,
    word: "happy",
    fontSize: 110,
  },
  {
    x: 0,
    y: 0,
    word: "birth",
    fontSize: 110,
  },
  {
    x: 0,
    y: 130 * 1.5,
    word: "day",
    fontSize: 110,
  },
  {
    x: 0,
    y: 0,
    word: "Habiba",
    fontSize: 110,
    selfShow: false,
  },
  {
    x: 0,
    y: 0,
    word: "🍁🍁♥️🍁🍁",
    fontSize: 60,
    selfShow: false,
  },
];