import { delay } from "../shared/async";
import * as ApiDto from "./ApiDto";
import { TrendingApi } from "./createApi";

const mockRepos: ApiDto.Repository[] = [
  {
    author: "open-mmlab",
    name: "mmdeploy",
    description: "OpenMMLab Model Deployment Framework",
    url: "https://github.com//open-mmlab/mmdeploy",
    language: "C++",
    langcolor: "#f34b7d",
    stars: 353,
    forks: 47,
    laststars: 60,
    builtby: [
      {
        username: "grimoire",
        url: "https://github.com/grimoire",
        avatar: "https://avatars.githubusercontent.com/u/1239736?s=40&v=4",
      },
      {
        username: "AllentDan",
        url: "https://github.com/AllentDan",
        avatar: "https://avatars.githubusercontent.com/u/41138331?s=40&v=4",
      },
      {
        username: "RunningLeon",
        url: "https://github.com/RunningLeon",
        avatar: "https://avatars.githubusercontent.com/u/28671653?s=40&v=4",
      },
      {
        username: "SingleZombie",
        url: "https://github.com/SingleZombie",
        avatar: "https://avatars.githubusercontent.com/u/47652064?s=40&v=4",
      },
      {
        username: "VVsssssk",
        url: "https://github.com/VVsssssk",
        avatar: "https://avatars.githubusercontent.com/u/88368822?s=40&v=4",
      },
    ],
  },
  {
    author: "CleverRaven",
    name: "Cataclysm-DDA",
    description:
      "Cataclysm - Dark Days Ahead. A turn-based survival game set in a post-apocalyptic world.",
    url: "https://github.com//CleverRaven/Cataclysm-DDA",
    language: "C++",
    langcolor: "#f34b7d",
    stars: 6039,
    forks: 3014,
    laststars: 17,
    builtby: [
      {
        username: "ZhilkinSerg",
        url: "https://github.com/ZhilkinSerg",
        avatar: "https://avatars.githubusercontent.com/u/16213433?s=40&v=4",
      },
      {
        username: "kevingranade",
        url: "https://github.com/kevingranade",
        avatar: "https://avatars.githubusercontent.com/u/860276?s=40&v=4",
      },
      {
        username: "Rivet-the-Zombie",
        url: "https://github.com/Rivet-the-Zombie",
        avatar: "https://avatars.githubusercontent.com/u/5084581?s=40&v=4",
      },
      {
        username: "BevapDin",
        url: "https://github.com/BevapDin",
        avatar: "https://avatars.githubusercontent.com/u/5095435?s=40&v=4",
      },
      {
        username: "KA101",
        url: "https://github.com/KA101",
        avatar: "https://avatars.githubusercontent.com/u/4195632?s=40&v=4",
      },
    ],
  },
  {
    author: "Eugeny",
    name: "tabby",
    description: "A terminal for a more modern age",
    url: "https://github.com//Eugeny/tabby",
    language: "TypeScript",
    langcolor: "#2b7489",
    stars: 26998,
    forks: 1568,
    laststars: 281,
    builtby: [
      {
        username: "Eugeny",
        url: "https://github.com/Eugeny",
        avatar: "https://avatars.githubusercontent.com/u/161476?s=40&v=4",
      },
      {
        username: "dependabot-preview",
        url: "https://github.com/dependabot-preview",
        avatar: "https://avatars.githubusercontent.com/in/2141?s=40&v=4",
      },
      {
        username: "dependabot",
        url: "https://github.com/dependabot",
        avatar: "https://avatars.githubusercontent.com/in/29110?s=40&v=4",
      },
      {
        username: "allcontributors",
        url: "https://github.com/allcontributors",
        avatar: "https://avatars.githubusercontent.com/in/23186?s=40&v=4",
      },
      {
        username: "Domain",
        url: "https://github.com/Domain",
        avatar: "https://avatars.githubusercontent.com/u/903197?s=40&v=4",
      },
    ],
  },
  {
    author: "babysor",
    name: "MockingBird",
    description:
      "🚀AI拟声: 5秒内克隆您的声音并生成任意语音内容 Clone a voice in 5 seconds to generate arbitrary speech in real-time",
    url: "https://github.com//babysor/MockingBird",
    language: "JavaScript",
    langcolor: "#f1e05a",
    stars: 16813,
    forks: 2090,
    laststars: 460,
    builtby: [
      {
        username: "babysor",
        url: "https://github.com/babysor",
        avatar: "https://avatars.githubusercontent.com/u/7423248?s=40&v=4",
      },
      {
        username: "oceanarium",
        url: "https://github.com/oceanarium",
        avatar: "https://avatars.githubusercontent.com/u/12797292?s=40&v=4",
      },
      {
        username: "hertz-pj",
        url: "https://github.com/hertz-pj",
        avatar: "https://avatars.githubusercontent.com/u/17819608?s=40&v=4",
      },
      {
        username: "Nthily",
        url: "https://github.com/Nthily",
        avatar: "https://avatars.githubusercontent.com/u/31311826?s=40&v=4",
      },
      {
        username: "XiuChen-Liu",
        url: "https://github.com/XiuChen-Liu",
        avatar: "https://avatars.githubusercontent.com/u/55180847?s=40&v=4",
      },
    ],
  },
  {
    author: "ja-netfilter",
    name: "ja-netfilter",
    description: "A javaagent framework",
    url: "https://github.com//ja-netfilter/ja-netfilter",
    language: "Java",
    langcolor: "#b07219",
    stars: 2298,
    forks: 572,
    laststars: 83,
    builtby: [
      {
        username: "pengzhile",
        url: "https://github.com/pengzhile",
        avatar: "https://avatars.githubusercontent.com/u/343491?s=40&v=4",
      },
      {
        username: "wongsyrone",
        url: "https://github.com/wongsyrone",
        avatar: "https://avatars.githubusercontent.com/u/5462232?s=40&v=4",
      },
      {
        username: "squallliu",
        url: "https://github.com/squallliu",
        avatar: "https://avatars.githubusercontent.com/u/585678?s=40&v=4",
      },
    ],
  },
  {
    author: "trekhleb",
    name: "javascript-algorithms",
    description:
      "📝 Algorithms and data structures implemented in JavaScript with explanations and links to further readings",
    url: "https://github.com//trekhleb/javascript-algorithms",
    language: "JavaScript",
    langcolor: "#f1e05a",
    stars: 130782,
    forks: 21446,
    laststars: 428,
    builtby: [
      {
        username: "trekhleb",
        url: "https://github.com/trekhleb",
        avatar: "https://avatars.githubusercontent.com/u/3000285?s=40&v=4",
      },
      {
        username: "m-maksyutin",
        url: "https://github.com/m-maksyutin",
        avatar: "https://avatars.githubusercontent.com/u/29200109?s=40&v=4",
      },
      {
        username: "appleJax",
        url: "https://github.com/appleJax",
        avatar: "https://avatars.githubusercontent.com/u/13618860?s=40&v=4",
      },
      {
        username: "albertstill",
        url: "https://github.com/albertstill",
        avatar: "https://avatars.githubusercontent.com/u/2787876?s=40&v=4",
      },
      {
        username: "moshejs",
        url: "https://github.com/moshejs",
        avatar: "https://avatars.githubusercontent.com/u/29892368?s=40&v=4",
      },
    ],
  },
  {
    author: "sindresorhus",
    name: "awesome",
    description: "😎 Awesome lists about all kinds of interesting topics",
    url: "https://github.com//sindresorhus/awesome",
    language: "",
    langcolor: "",
    stars: 181978,
    forks: 22412,
    laststars: 304,
    builtby: [
      {
        username: "sindresorhus",
        url: "https://github.com/sindresorhus",
        avatar: "https://avatars.githubusercontent.com/u/170270?s=40&v=4",
      },
      {
        username: "davisonio",
        url: "https://github.com/davisonio",
        avatar: "https://avatars.githubusercontent.com/u/5341072?s=40&v=4",
      },
      {
        username: "RichardLitt",
        url: "https://github.com/RichardLitt",
        avatar: "https://avatars.githubusercontent.com/u/910753?s=40&v=4",
      },
      {
        username: "arthurvr",
        url: "https://github.com/arthurvr",
        avatar: "https://avatars.githubusercontent.com/u/6025224?s=40&v=4",
      },
      {
        username: "kdeldycke",
        url: "https://github.com/kdeldycke",
        avatar: "https://avatars.githubusercontent.com/u/159718?s=40&v=4",
      },
    ],
  },
  {
    author: "youngyangyang04",
    name: "leetcode-master",
    description:
      "LeetCode 刷题攻略：200道经典题目刷题顺序，共60w字的详细图解，视频难点剖析，50余张思维导图，支持C++，Java，Python，Go，JavaScript等多语言版本，从此算法学习不再迷茫！🔥🔥 来看看，你会发现相见恨晚！🚀",
    url: "https://github.com//youngyangyang04/leetcode-master",
    language: "",
    langcolor: "",
    stars: 20342,
    forks: 5230,
    laststars: 221,
    builtby: [
      {
        username: "youngyangyang04",
        url: "https://github.com/youngyangyang04",
        avatar: "https://avatars.githubusercontent.com/u/8636020?s=40&v=4",
      },
      {
        username: "ironartisan",
        url: "https://github.com/ironartisan",
        avatar: "https://avatars.githubusercontent.com/u/54694467?s=40&v=4",
      },
      {
        username: "X-shuffle",
        url: "https://github.com/X-shuffle",
        avatar: "https://avatars.githubusercontent.com/u/53906918?s=40&v=4",
      },
      {
        username: "Joshua-Lu",
        url: "https://github.com/Joshua-Lu",
        avatar: "https://avatars.githubusercontent.com/u/47053655?s=40&v=4",
      },
      {
        username: "QuinnDK",
        url: "https://github.com/QuinnDK",
        avatar: "https://avatars.githubusercontent.com/u/39618652?s=40&v=4",
      },
    ],
  },
  {
    author: "lyrric",
    name: "seckill",
    description: "苗苗 约苗 九价 秒杀 脚本",
    url: "https://github.com//lyrric/seckill",
    language: "Java",
    langcolor: "#b07219",
    stars: 1447,
    forks: 495,
    laststars: 23,
    builtby: [
      {
        username: "lyrric",
        url: "https://github.com/lyrric",
        avatar: "https://avatars.githubusercontent.com/u/20310859?s=40&v=4",
      },
      {
        username: "AylaAsia-wangxiaodong",
        url: "https://github.com/AylaAsia-wangxiaodong",
        avatar: "https://avatars.githubusercontent.com/u/85154653?s=40&v=4",
      },
      {
        username: "dependabot",
        url: "https://github.com/dependabot",
        avatar: "https://avatars.githubusercontent.com/in/29110?s=40&v=4",
      },
    ],
  },
  {
    author: "element-plus",
    name: "element-plus",
    description: "🎉 A Vue.js 3 UI Library made by Element team",
    url: "https://github.com//element-plus/element-plus",
    language: "Vue",
    langcolor: "#41b883",
    stars: 13163,
    forks: 2457,
    laststars: 28,
    builtby: [
      {
        username: "zazzaz",
        url: "https://github.com/zazzaz",
        avatar: "https://avatars.githubusercontent.com/u/10731096?s=40&v=4",
      },
      {
        username: "JeremyWuuuuu",
        url: "https://github.com/JeremyWuuuuu",
        avatar: "https://avatars.githubusercontent.com/u/15975785?s=40&v=4",
      },
      {
        username: "sxzz",
        url: "https://github.com/sxzz",
        avatar: "https://avatars.githubusercontent.com/u/6481596?s=40&v=4",
      },
      {
        username: "renovate",
        url: "https://github.com/renovate",
        avatar: "https://avatars.githubusercontent.com/in/2740?s=40&v=4",
      },
      {
        username: "YunYouJun",
        url: "https://github.com/YunYouJun",
        avatar: "https://avatars.githubusercontent.com/u/25154432?s=40&v=4",
      },
    ],
  },
  {
    author: "donnemartin",
    name: "system-design-primer",
    description:
      "Learn how to design large-scale systems. Prep for the system design interview. Includes Anki flashcards.",
    url: "https://github.com//donnemartin/system-design-primer",
    language: "Python",
    langcolor: "#3572A5",
    stars: 156267,
    forks: 28844,
    laststars: 575,
    builtby: [
      {
        username: "donnemartin",
        url: "https://github.com/donnemartin",
        avatar: "https://avatars.githubusercontent.com/u/5458997?s=40&v=4",
      },
      {
        username: "satob",
        url: "https://github.com/satob",
        avatar: "https://avatars.githubusercontent.com/u/171818?s=40&v=4",
      },
      {
        username: "fluency03",
        url: "https://github.com/fluency03",
        avatar: "https://avatars.githubusercontent.com/u/7440735?s=40&v=4",
      },
      {
        username: "sqrthree",
        url: "https://github.com/sqrthree",
        avatar: "https://avatars.githubusercontent.com/u/8622362?s=40&v=4",
      },
      {
        username: "antongulikov",
        url: "https://github.com/antongulikov",
        avatar: "https://avatars.githubusercontent.com/u/6084440?s=40&v=4",
      },
    ],
  },
  {
    author: "vinta",
    name: "awesome-python",
    description:
      "A curated list of awesome Python frameworks, libraries, software and resources",
    url: "https://github.com//vinta/awesome-python",
    language: "Python",
    langcolor: "#3572A5",
    stars: 111396,
    forks: 20437,
    laststars: 199,
    builtby: [
      {
        username: "vinta",
        url: "https://github.com/vinta",
        avatar: "https://avatars.githubusercontent.com/u/652070?s=40&v=4",
      },
      {
        username: "dhamaniasad",
        url: "https://github.com/dhamaniasad",
        avatar: "https://avatars.githubusercontent.com/u/4560482?s=40&v=4",
      },
      {
        username: "vndmtrx",
        url: "https://github.com/vndmtrx",
        avatar: "https://avatars.githubusercontent.com/u/596651?s=40&v=4",
      },
      {
        username: "ellisonleao",
        url: "https://github.com/ellisonleao",
        avatar: "https://avatars.githubusercontent.com/u/178641?s=40&v=4",
      },
      {
        username: "ihebu",
        url: "https://github.com/ihebu",
        avatar: "https://avatars.githubusercontent.com/u/47149194?s=40&v=4",
      },
    ],
  },
  {
    author: "google",
    name: "python-fire",
    description:
      "Python Fire is a library for automatically generating command line interfaces (CLIs) from absolutely any Python object.",
    url: "https://github.com//google/python-fire",
    language: "Python",
    langcolor: "#3572A5",
    stars: 20874,
    forks: 1234,
    laststars: 198,
    builtby: [
      {
        username: "dbieber",
        url: "https://github.com/dbieber",
        avatar: "https://avatars.githubusercontent.com/u/892765?s=40&v=4",
      },
      {
        username: "joejoevictor",
        url: "https://github.com/joejoevictor",
        avatar: "https://avatars.githubusercontent.com/u/1243000?s=40&v=4",
      },
      {
        username: "jacobaustin123",
        url: "https://github.com/jacobaustin123",
        avatar: "https://avatars.githubusercontent.com/u/28993550?s=40&v=4",
      },
      {
        username: "saurabhkpatel",
        url: "https://github.com/saurabhkpatel",
        avatar: "https://avatars.githubusercontent.com/u/1188367?s=40&v=4",
      },
      {
        username: "jtratner",
        url: "https://github.com/jtratner",
        avatar: "https://avatars.githubusercontent.com/u/1598379?s=40&v=4",
      },
    ],
  },
  {
    author: "78778443",
    name: "QingScan",
    description:
      "一个漏洞扫描器粘合剂；支持 web扫描、系统扫描、子域名收集、目录扫描、主机扫描、主机发现、组件识别、URL爬虫、XRAY扫描、AWVS自动扫描、POC批量验证，SSH批量测试、vulmap。",
    url: "https://github.com//78778443/QingScan",
    language: "Python",
    langcolor: "#3572A5",
    stars: 316,
    forks: 71,
    laststars: 21,
    builtby: [
      {
        username: "78778443",
        url: "https://github.com/78778443",
        avatar: "https://avatars.githubusercontent.com/u/8509054?s=40&v=4",
      },
      {
        username: "tingting7788",
        url: "https://github.com/tingting7788",
        avatar: "https://avatars.githubusercontent.com/u/76991805?s=40&v=4",
      },
    ],
  },
  {
    author: "jynew",
    name: "jynew",
    description: "金庸群侠传3D重制版",
    url: "https://github.com//jynew/jynew",
    language: "C#",
    langcolor: "#178600",
    stars: 3700,
    forks: 787,
    laststars: 73,
    builtby: [
      {
        username: "chenggongchina",
        url: "https://github.com/chenggongchina",
        avatar: "https://avatars.githubusercontent.com/u/7448857?s=40&v=4",
      },
      {
        username: "eaphone",
        url: "https://github.com/eaphone",
        avatar: "https://avatars.githubusercontent.com/u/22126740?s=40&v=4",
      },
      {
        username: "qige2016",
        url: "https://github.com/qige2016",
        avatar: "https://avatars.githubusercontent.com/u/18051955?s=40&v=4",
      },
      {
        username: "cherubinxxx",
        url: "https://github.com/cherubinxxx",
        avatar: "https://avatars.githubusercontent.com/u/6310668?s=40&v=4",
      },
      {
        username: "HYYellowOne",
        url: "https://github.com/HYYellowOne",
        avatar: "https://avatars.githubusercontent.com/u/51065949?s=40&v=4",
      },
    ],
  },
];

const mockDevs: ApiDto.Developer[] = [
  {
    name: "Arvid Norberg",
    username: "arvidn",
    avatar: "https://avatars.githubusercontent.com/u/661450?s=96&v=4",
    url: "https://github.com/arvidn",
    repository: {
      name: "libtorrent",
      description: "",
      url: "/arvidn/libtorrent",
    },
  },
  {
    name: "Franck Nijhof",
    username: "frenck",
    avatar: "https://avatars.githubusercontent.com/u/195327?s=96&v=4",
    url: "https://github.com/frenck",
    repository: {
      name: "awesome-home-assistant",
      description: "",
      url: "/frenck/awesome-home-assistant",
    },
  },
  {
    name: "Maxence Charriere",
    username: "maxence-charriere",
    avatar: "https://avatars.githubusercontent.com/u/2692731?s=96&v=4",
    url: "https://github.com/maxence-charriere",
    repository: {
      name: "go-app",
      description: "",
      url: "/maxence-charriere/go-app",
    },
  },
  {
    name: "Raphaël",
    username: "sundowndev",
    avatar: "https://avatars.githubusercontent.com/u/16480203?s=96&v=4",
    url: "https://github.com/sundowndev",
    repository: {
      name: "phoneinfoga",
      description: "",
      url: "/sundowndev/phoneinfoga",
    },
  },
  {
    name: "RangiLyu",
    username: "",
    avatar: "https://avatars.githubusercontent.com/u/12907710?s=96&v=4",
    url: "https://github.com/",
    repository: { name: "nanodet", description: "", url: "/RangiLyu/nanodet" },
  },
  {
    name: "Shu Ding",
    username: "shuding",
    avatar: "https://avatars.githubusercontent.com/u/3676859?s=96&v=4",
    url: "https://github.com/shuding",
    repository: { name: "cobe", description: "", url: "/shuding/cobe" },
  },
  {
    name: "Brad Fitzpatrick",
    username: "bradfitz",
    avatar: "https://avatars.githubusercontent.com/u/2621?s=96&v=4",
    url: "https://github.com/bradfitz",
    repository: { name: "snake", description: "", url: "/bradfitz/snake" },
  },
  {
    name: "Fernand Galiana",
    username: "derailed",
    avatar: "https://avatars.githubusercontent.com/u/4060?s=96&v=4",
    url: "https://github.com/derailed",
    repository: { name: "k9s", description: "", url: "/derailed/k9s" },
  },
  {
    name: "Guillaume Gomez",
    username: "GuillaumeGomez",
    avatar: "https://avatars.githubusercontent.com/u/3050060?s=96&v=4",
    url: "https://github.com/GuillaumeGomez",
    repository: {
      name: "sysinfo",
      description: "",
      url: "/GuillaumeGomez/sysinfo",
    },
  },
  {
    name: "LoveSy",
    username: "yujincheng08",
    avatar: "https://avatars.githubusercontent.com/u/5022927?s=96&v=4",
    url: "https://github.com/yujincheng08",
    repository: {
      name: "BiliRoaming",
      description: "",
      url: "/yujincheng08/BiliRoaming",
    },
  },
  {
    name: "Jason Quense",
    username: "jquense",
    avatar: "https://avatars.githubusercontent.com/u/339286?s=96&v=4",
    url: "https://github.com/jquense",
    repository: { name: "yup", description: "", url: "/jquense/yup" },
  },
  {
    name: "Zoltan Kochan",
    username: "zkochan",
    avatar: "https://avatars.githubusercontent.com/u/1927579?s=96&v=4",
    url: "https://github.com/zkochan",
    repository: {
      name: "which-pm-runs",
      description: "",
      url: "/zkochan/which-pm-runs",
    },
  },
  {
    name: "Anthony Fu",
    username: "antfu",
    avatar: "https://avatars.githubusercontent.com/u/11247099?s=96&v=4",
    url: "https://github.com/antfu",
    repository: { name: "unocss", description: "", url: "/antfu/unocss" },
  },
  {
    name: "hrsh7th",
    username: "hrsh7th",
    avatar: "https://avatars.githubusercontent.com/u/629908?s=96&v=4",
    url: "https://github.com/hrsh7th",
    repository: { name: "nvim-cmp", description: "", url: "/hrsh7th/nvim-cmp" },
  },
  {
    name: "Rob Ede",
    username: "robjtede",
    avatar: "https://avatars.githubusercontent.com/u/3316789?s=96&v=4",
    url: "https://github.com/robjtede",
  },
  {
    name: "Jan De Dobbeleer",
    username: "JanDeDobbeleer",
    avatar: "https://avatars.githubusercontent.com/u/2492783?s=96&v=4",
    url: "https://github.com/JanDeDobbeleer",
    repository: {
      name: "oh-my-posh",
      description: "",
      url: "/JanDeDobbeleer/oh-my-posh",
    },
  },
  {
    name: "Rafał Mikrut",
    username: "qarmin",
    avatar: "https://avatars.githubusercontent.com/u/41945903?s=96&v=4",
    url: "https://github.com/qarmin",
    repository: { name: "czkawka", description: "", url: "/qarmin/czkawka" },
  },
  {
    name: "Nikhil Benesch",
    username: "benesch",
    avatar: "https://avatars.githubusercontent.com/u/882976?s=96&v=4",
    url: "https://github.com/benesch",
  },
  {
    name: "Jyoti Puri",
    username: "jpuri",
    avatar: "https://avatars.githubusercontent.com/u/2182307?s=96&v=4",
    url: "https://github.com/jpuri",
    repository: {
      name: "react-draft-wysiwyg",
      description: "",
      url: "/jpuri/react-draft-wysiwyg",
    },
  },
  {
    name: "Alex Gaynor",
    username: "alex",
    avatar: "https://avatars.githubusercontent.com/u/772?s=96&v=4",
    url: "https://github.com/alex",
    repository: {
      name: "what-happens-when",
      description: "",
      url: "/alex/what-happens-when",
    },
  },
  {
    name: "二货机器人",
    username: "zombieJ",
    avatar: "https://avatars.githubusercontent.com/u/5378891?s=96&v=4",
    url: "https://github.com/zombieJ",
  },
  {
    name: "Armin Ronacher",
    username: "mitsuhiko",
    avatar: "https://avatars.githubusercontent.com/u/7396?s=96&v=4",
    url: "https://github.com/mitsuhiko",
    repository: {
      name: "minijinja",
      description: "",
      url: "/mitsuhiko/minijinja",
    },
  },
  {
    name: "Zeke Sikelianos",
    username: "zeke",
    avatar: "https://avatars.githubusercontent.com/u/2289?s=96&v=4",
    url: "https://github.com/zeke",
    repository: {
      name: "semantic-pull-requests",
      description: "",
      url: "/zeke/semantic-pull-requests",
    },
  },
  {
    name: "Pedro S. Lopez",
    username: "pedroslopez",
    avatar: "https://avatars.githubusercontent.com/u/4368928?s=96&v=4",
    url: "https://github.com/pedroslopez",
    repository: {
      name: "whatsapp-web.js",
      description: "",
      url: "/pedroslopez/whatsapp-web.js",
    },
  },
  {
    name: "Michael Herman",
    username: "mjhea0",
    avatar: "https://avatars.githubusercontent.com/u/2018167?s=96&v=4",
    url: "https://github.com/mjhea0",
    repository: {
      name: "awesome-fastapi",
      description: "",
      url: "/mjhea0/awesome-fastapi",
    },
  },
];
export const mockFetchDevs = () => delay(300).then(() => mockDevs);
export const mockFetchRepos = () => delay(300).then(() => mockRepos);

export const createMockApi = (): TrendingApi => {
  return {
    fetchDevelopers: mockFetchDevs,
    fetchRepositories: mockFetchRepos,
  };
};
